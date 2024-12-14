/* ContactForm.js */

"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactForm.css'; // Ensure this CSS file is correctly imported

function ContactForm() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Remove error message as user types
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = t('validation.nameRequired');
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = t('validation.nameInvalid');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('validation.emailRequired');
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = t('validation.emailInvalid');
    }

    // Optional: Add validation for comment if needed

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    const contactData = {
      Name: formData.name,
      Email: formData.email,
      Comment: formData.comment
    };

    try {
      // POST to your Express endpoint that appends to Google Sheets
      const response = await axios.post('http://localhost:1337/api/appendContact', contactData);
      console.log(response);
      toast.success(t('toast.successMessage'));
      
      // Reset form
      setFormData({ name: '', email: '', comment: '' });
    } catch (error) {
      console.error(error);
      toast.error(t('toast.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className='pt-5 col-12 col-md-8 col-lg-6'>
      <Form noValidate onSubmit={handleSubmit} className='contact-form'>
        {/* Name Field */}
        <Form.Group controlId="formName" className='mb-3'>
          <Form.Label>{t('contact.nombre')}</Form.Label>
          <Form.Control
            type='text'
            name='name'
            placeholder={t('placeholders.name')}
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            className='bg-transparent border-success text-white'
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email Field */}
        <Form.Group controlId="formEmail" className='mb-3'>
          <Form.Label>{t('contact.email')}</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder={t('placeholders.email')}
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            className='bg-transparent border-success text-white'
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Comment Field */}
        <Form.Group controlId="formComment" className='mb-3'>
          <Form.Label>{t('message.comment')}</Form.Label>
          <Form.Control
            as='textarea'
            rows='4'
            name='comment'
            placeholder={t('placeholders.comment')}
            value={formData.comment}
            onChange={handleChange}
            className='bg-transparent border-success text-white'
          />
        </Form.Group>

        {/* Submit Button */}
        <div className='d-flex justify-content-end'>
          <Button
            type='submit'
            variant='success'
            disabled={isSubmitting}
            className='opacity-75'
          >
            {isSubmitting ? t('buttons.submitting') : t('buttons.submit')}
          </Button>
        </div>

        {/* Toast Notifications */}
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
      </Form>
    </Container>
  );
}

export default ContactForm;
