"use client";

import { useTranslation } from 'react-i18next';
import { Container} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    const{t} = useTranslation()
    const notify = (t) => toast.success("Thank you for your message");
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(name, email, comment)
        const contactData = {
            Name:name,
            Email:email,
            Comment:comment
        }
        
        axios.post('https://sheet.best/api/sheets/a42167fd-0913-4de2-bd7c-384ef16f97fe',contactData)
        .then((response)=>{
            console.log(response)
            setName('');
            setEmail('');
            setComment('');

    }).catch(err => {
        console.log(err)
    })
    
    }

  
  return (
    <Container className='pt-5 col-5' >
        <form autoComplete='off' 
        className='form-group text-success' 
        onSubmit={handleSubmit}
        
        
        
           >
            <label className='pt-5 '>{t('contact.nombre')}</label>
            <input type='text' 
            placeholder={'Enter your name'} 
            className='form-control bg-dark opacity-60 border-success text-success ' 
            onChange={(e)=>setName(e.target.value)} value={name}    
            />
            
            <label className='pt-5'>{t('contact.email')}</label>
            <input type='text' 
            placeholder={'Enter your email'} 
             
            className='form-control bg-dark opacity-60 border-success text-success'
            onChange={(e)=>setEmail(e.target.value)} value={email} required
            />

            <label className='pt-5 text-success'>{t('message.comment')}</label>
            <textarea type='text' 
            rows='4'
            placeholder={'Enter your message'} 
             
            className='form-control bg-dark opacity-60 border-success text-success'
            onChange={(e)=>setComment(e.target.value)} value={comment}
            />  

            <div style={{display:'flex', justifyContent:'flex-end',padding:'10px'}}>
                <button 
                type='submit' 
                className='btn btn-success opacity-60' onClick={notify}>{t('Submit')}
                 
                </button>
                <ToastContainer
                 autoClose={2000}
                 theme="colored"
                 
                 />
               
                
            </div>



        </form>

    </Container>
  );
}

export default ContactForm;