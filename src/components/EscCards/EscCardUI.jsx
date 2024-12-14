import React, { useState } from 'react';
import { Button, Container, Modal, Row, Col, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EscCard-style.css';

const EscCard = (props) => {
  const [Show, setShow] = useState(false);
  const [ShowReserve, setShowReserve] = useState(false);
  
  // States for your form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState('');
  
  // Validation & submission states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCloseReserve = () => setShowReserve(false);
  const handleShowReserve = () => setShowReserve(true);

  // Validate form data
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      newErrors.name = 'El nombre no es válido';
    }

    if (!email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    
    // Optionally validate date, people, comment here if needed
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    const serviceData = {
      Id: props.id,
      Name: name,
      Email: email,
      Date: date,
      People: people,
      Comment: comment
    };

    // Replace with your own Express endpoint if you're appending to Google Sheets
    axios.post('http://localhost:1337/api/appendSheet', serviceData)
      .then(() => {
        // Clear form
        setName('');
        setEmail('');
        setDate('');
        setPeople('');
        setComment('');
        setErrors({});
        // Close the modal (optional)
        handleCloseReserve();
        // Show toast notification
        toast.success("Reserva enviada con éxito!");
      })
      .catch((err) => console.error(err))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className='card text-center shadow pt-0' id={props.id}>
      <div className='overflow'>
        <img 
          src={props.imgsrc}
          onClick={() => setShow(true)}  
          alt='someplace' 
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
                  <img
                    style={{ height: '30hv' }}
                    className="d-block w-100"
                    src={src}
                    alt={`Slide ${idx}`}
                  />
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
          <p>Text con indicaciones, Reglas, requisitos que serán enviados por correo electrónico</p>
          <ul>
            <li>{props.requiref}</li>
            <li>{props.requirep}</li>
            <li>{props.requiree}</li>
            <li>{props.requirem}</li>
          </ul>
        </Modal.Body>

        <Modal.Body className='bg-dark modal-reserve'>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className='p-2'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tu nombre"
                className='bg-dark modal-reserve text-primary'
                onChange={(e)=>setName(e.target.value)}
                value={name}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className='p-2'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className='bg-dark modal-reserve text-primary'
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formDate" className='p-2 text-white'>
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                className='bg-dark modal-reserve text-white'
                onChange={(e)=>setDate(e.target.value)}
                value={date}
              />
            </Form.Group>

            <Form.Group controlId="formPeople" className='p-2'>
              <Form.Label>Acompañantes</Form.Label>
              <Form.Select
                className='bg-dark modal-reserve text-white'
                onChange={(e)=>setPeople(e.target.value)}
                value={people}
              >
                <option value="">Selecciona</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5+">5+</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formComment" className="mb-3 p-2">
              <Form.Label className="pt-1">Preguntas o comentarios</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className='bg-dark modal-reserve text-white'
                onChange={(e)=>setComment(e.target.value)}
                value={comment}
              />
            </Form.Group>

            <Modal.Footer className='bg-dark modal-reserve'>
              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Save Changes"}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ToastContainer for notifications */}
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

export default EscCard;
