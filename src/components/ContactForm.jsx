"use client";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function BasicExample() {
    const{t} = useTranslation()
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const onSubmit = () => {
      axios.post('https://sheet.best/api/sheets/a42167fd-0913-4de2-bd7c-384ef16f97fe',
      {
        name, lname, email, comment
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))

    
    }
  return (
    <Container className='pt-5' >
    <Row className="justify-content-sm-center align-items-center pt-3 mt-2">
    <Form variant='dark'  className='form p-2 mt-4 w-50 align-items-baseline' >
    <InputGroup className="mb-3">
      <InputGroup.Text  className='bg-dark opacity-75  border-success text-success w-20'>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" id='name'  className='bg-dark opacity-50  border-success text-success w-25' onChange={(e)=> setName(e.target.value)}/>
      <Form.Control aria-label="Last name"  id='lname' className='bg-dark opacity-50  border-success text-success w-25' onChange={(e)=> setLname(e.target.value)}/>
    </InputGroup>
      <InputGroup className="mb-3" controlid="email">
      <InputGroup.Text  className='bg-dark opacity-75 border-success text-success w-15'>email</InputGroup.Text>
        <Form.Control type="email" placeholder="Enter email" className='bg-dark opacity-50  border-success text-success' onChange={(e)=> setEmail(e.target.value)}/>
      </InputGroup> 

      <Form.Group 
      className="mb-3 bg-dark opacity-75  text-success" 
      controlId="comment">
        <InputGroup.Text 
        className='bg-dark text-success border-success'>{t('comments')}
        </InputGroup.Text>
        <Form.Control 
        size="md" 
        as="textarea" 
        rows={6}  
        className='bg-dark opacity-75 text-success border-success'
        onChange={(e)=> setComment(e.target.value)} 
        
        />
      </Form.Group>
      <Button 
      variant="dark text-success m-4"
       type="submit" 
       onClick={onSubmit}>
      submit
      </Button>
    </Form>
    </Row>
    </Container>
  );
}

export default BasicExample;