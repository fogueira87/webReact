import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './EscCard-style.css';
import { Container, Modal, Row, Col, ModalBody,Form, FormGroup} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';



const EscCard = props => {

  const [Show, setShow] = useState(false);
  const [ShowReserve, setShowReserve] = useState(false);
  const handleCloseReserve = () => setShowReserve(false);
  const handleShowReserve = () => setShowReserve(true);
  const [id] = useState(props.id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id, name, email, date, people, comment)
    
    const serviceData = {
        Id:id,
        Name:name,
        Email:email,
        Date:date,
        People:people,
        Comment:comment
    }

    console.log(serviceData)

    axios.post('https://sheet.best/api/sheets/a42167fd-0913-4de2-bd7c-384ef16f97fe',serviceData).then((response)=>{
        console.log(response);
        //setId('')
        setName('');
        setEmail('');
        setDate('');
        setPeople('');
        setComment('');
})
 
  
}
  return (
    <div className='card text-center shadow pt-0' id={`${props.id}`} >
      <div className='overflow'>
        <img src={props.imgsrc} onClick={() => setShow(true)}  alt='someplace' className='card-img-top' loading='lazy'/>
      </div>

      <div className='card-body' >
        <h5 className='card-title pb-1 text-secondary'>{props.subtitle}</h5>
        <div className='card-subtitle text-secondary'>
        <h6 className='ps-1 text-secondary'>{props.title}</h6>
        <strong className='ms-1'>{props.altitude} </strong>
        </div>
        <p className='card-text text-secondary'>{props.text}</p>
        
        <Button  id={props.id} variant={props.status}  onClick={handleShowReserve}>
        {props.go} {props.link}
      </Button> 
      
      <Modal
        size="md"
        show={Show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w p-0"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        
        <Modal.Header closeButton>
        <Modal.Title id={`${props.id}`} className='pb-0'>
        {props.title}
        </Modal.Title>
        </Modal.Header>
        <ModalBody className='pb-0'>
         
          
            <Row className='pb-0 mb-0'>
            <Col className='pb-0'><h6>{props.subtitle}</h6></Col>
            <Col ><h6>{props.length}</h6></Col> 
             
            </Row>
            <Row className='pb-0 d-flex justify-content-around'>
            <Col  className='pb-0'><h6>{props.cost}</h6></Col>
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
      <Modal show={ShowReserve} onHide={handleCloseReserve}>
        <Modal.Header closeButton  className='bg-dark modal-reserve'>
          <Modal.Title 
          
          >{props.subtitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='bg-dark modal-reserve'>
          <p>Text con indicaciones, Reglas, requisitos que serán enviados por correo electronico</p>
          
          <ul>
            <li>{props.requiref}</li>
            <li>{props.requirep}</li>
            <li>{props.requiree}</li>
            <li>{props.requirem}</li>
          </ul>

        </Modal.Body>
        <Modal.Body className='bg-dark modal-reserve'>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1"  className=' p-2'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                className='bg-dark modal-reserve text-primary'
                onChange={(e)=>setName(e.target.value)} value={name}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1"  className=' p-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                autoFocus
                className='bg-dark modal-reserve text-primary'
                onChange={(e)=>setEmail(e.target.value)} value={email}
              />
            </Form.Group >

            <Form.Group controlId="exampleForm.ControlInput2"  className='p-2 text-white'>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                className='bg-dark modal-reserve text-white'
                onChange={(e)=>setDate(e.target.value)} value={date}
              />
            </Form.Group>

            <FormGroup controlId="exampleForm.ControlSelect1" className=' p-2'>
            <Form.Select aria-label="Default select example"
             className='bg-dark modal-reserve text-white'
             onChange={(e)=>setPeople(e.target.value)} value={people}
             >
              <option>Acompañantes</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5+">5+</option>
            </Form.Select>
            </FormGroup>



            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="pt-1">Preguntas o comentarios</Form.Label>
              <Form.Control as="textarea" rows={3} className='bg-dark modal-reserve text-white'
              onChange={(e)=>setComment(e.target.value)} value={comment}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark modal-reserve'>
          <Button variant="primary" onClick={handleSubmit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      
      </div>
    </div>
  )
}

export default EscCard