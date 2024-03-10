import React from 'react'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './MontCard-style.css';
import { Container, Modal, Row, Col, ModalBody} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "../../App.css"


const MontCard = props => {

  const [Show, setShow] = useState(false);
    
  return (
    <div className='card text-center shadow p-1' id={`${props.id}`}>
      <div className='overflow'>
        <img src={props.imgsrc} onClick={() => setShow(true)}  alt='someplace' className='card-img-top' loading='lazy'/>
      </div>

      <div className='card-body text-dark '>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='card-subtitle ps-3'>{props.subtitle} <strong className='ms-2'>{props.altitude} </strong></h6>
        <p className='card-text text-secondary'>{props.text}</p>
        
        <Button id={props.id} variant={props.status}  onClick={() => setShow(true)}>
        {props.go} {props.link}
      </Button>
      
      <Modal
        size="lg"
        show={Show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w p-0"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        
        <Modal.Header closeButton className='pb-0'>
        <Modal.Title id={`${props.id}`} className='pb-0'>
        {props.title}
        </Modal.Title>
        </Modal.Header>
        <ModalBody className='pb-0'>
         
          
            <Row className='pb-0 mb-0'>
            <Col className='pb-0'><h6>{props.subtitle}</h6></Col>
            <Col ><h6>{props.length}</h6></Col> 
             
            </Row>
            <Row className='pb-0 align-items-end'>
            <Col  className='pb-0'><h6><strong>{props.cost}</strong></h6></Col>
            <Col  className='ml-auto'><h6>{props.altitude}</h6></Col>
            </Row>
        </ModalBody>
       
        <Modal.Body  className='p-1'>
    <Container className='p-1'>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'30hv'}}
        className="d-block w-100"
        src={props.imgsrc1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'30hv'}}
        className="d-block w-100"
        src={props.imgsrc2}
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'30hv'}}
        className="d-block w-100"
        src={props.imgsrc3}
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'30hv'}}
        className="d-block w-100"
        src={props.imgsrc4}
        alt="First slide"
      />
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'30hv'}}
        className="d-block w-100"
        src={props.imgsrc5}
        alt="First slide"
      />
    </Carousel.Item>

    </Carousel>
        <h6>{props.require}</h6>
         <p>{props.description}</p>
         </Container>
        </Modal.Body>
      </Modal>
      </div>
    </div>
  )
}

export default MontCard