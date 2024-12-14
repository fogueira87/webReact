import React, { useState } from 'react';
import { Button, Container, Modal, Row, Col, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import './SendCard-style.css';
import { useTranslation } from 'react-i18next';

const SendCard = (props) => {
  const { t } = useTranslation();

  const [Show, setShow] = useState(false);
  const [ShowReserve, setShowReserve] = useState(false);
  const handleCloseReserve = () => setShowReserve(false);
  const handleShowReserve = () => setShowReserve(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('');

  const validateForm = () => {
    if (!name) {
      toast.error(t('validation.name'));
      return false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t('validation.email'));
      return false;
    }
    if (!date) {
      toast.error(t('validation.date'));
      return false;
    }
    if (!people || isNaN(people) || people <= 0) {
      toast.error(t('validation.people'));
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const serviceData = {
      Id: props.id,
      Name: name,
      Email: email,
      Date: date,
      People: people,
      Comment: comment,
    };

    axios.post('https://sheet.best/api/sheets/a42167fd-0913-4de2-bd7c-384ef16f97fe', serviceData)
      .then(() => {
        toast.success(t('validation.success'));
        setName('');
        setEmail('');
        setDate('');
        setPeople('');
        setComment('');
      })
      .catch(() => {
        toast.error(t('validation.error'));
      });
  };

  return (
    <div className='card text-center shadow pt-0' id={props.id}>
      <div className='overflow'>
        <img 
          src={props.imgsrc} 
          onClick={() => setShow(true)}  
          alt={t('alt.image')} 
          className='card-img-top' 
          loading='lazy'
        />
      </div>

      <div className='card-body'>
        <div>
          <h5 className='card-title text-secondary'>{props.subtitle}</h5>
          <div className='card-subtitle text-secondary d-flex justify-content-between'>
            <h6 className='ps-1 text-secondary'>{props.title}</h6>
            <strong className='ms-1'>{props.altitude}</strong>
          </div>
          <p className='card-text text-secondary'>{props.text}</p>
        </div>
        
        <Button id={props.id} variant={props.status} onClick={handleShowReserve}>
          {props.go} {props.link}
        </Button> 
      </div>

      {/* Modal for Images/Info */}
      <Modal
        show={Show}
        onHide={() => setShow(false)}
        size="lg"
        dialogClassName="modal-100w p-0"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id={props.id} className='pb-0'>
            {props.title}
            <Button id={props.id} className='mt-auto' variant={props.status} onClick={handleShowReserve}>
              {props.go} {props.link}
            </Button> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-0'>
          <Row className='pb-0 mb-0'>
            <Col className='pb-0'><h6>{props.subtitle}</h6></Col>
            <Col><h6>{props.length}</h6></Col> 
          </Row>
          <Row className='pb-0 d-flex justify-content-around'>
            <Col className='pb-0'><h6>{props.cost}</h6></Col>
            <Col><h6>{props.altitude}</h6></Col>
          </Row>
        </Modal.Body>

        <Modal.Body className='p-1'>
          <Container className='p-1'>
            <Carousel>
              {[props.imgsrc1, props.imgsrc2, props.imgsrc3, props.imgsrc4, props.imgsrc5].map((src, idx) => (
                <Carousel.Item key={idx}>
                  <img style={{height:'30hv'}} className="d-block w-100" src={src} alt={`Slide ${idx}`} />
                </Carousel.Item>
              ))}
            </Carousel>
            <h6>{props.require}</h6>
            <p>{props.description}</p>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Reserve Modal */}
      <Modal show={ShowReserve} onHide={handleCloseReserve}>
        <Modal.Header closeButton className='bg-dark modal-reserve'>
          <Modal.Title>{props.subtitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark modal-reserve'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className='p-2'>
              <Form.Label>{t('form.name')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('form.namePlaceholder')}
                className='bg-dark modal-reserve text-primary'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className='p-2'>
              <Form.Label>{t('form.email')}</Form.Label>
              <Form.Control
                type="email"
                placeholder={t('form.emailPlaceholder')}
                className='bg-dark modal-reserve text-primary'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="formDate" className='p-2 text-white'>
              <Form.Label>{t('form.date')}</Form.Label>
              <Form.Control
                type="date"
                className='bg-dark modal-reserve text-white'
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>

            <Form.Group controlId="formPeople" className='p-2'>
              <Form.Label>{t('form.people')}</Form.Label>
              <Form.Select
                className='bg-dark modal-reserve text-white'
                onChange={(e) => setPeople(e.target.value)}
                value={people}
              >
                <option value="">{t('form.selectOption')}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5+">5+</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formComment" className="mb-3 p-2">
              <Form.Label>{t('form.comment')}</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                className='bg-dark modal-reserve text-white'
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </Form.Group>
            <Button variant="primary" type="submit">{t('form.submit')}</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default SendCard;

