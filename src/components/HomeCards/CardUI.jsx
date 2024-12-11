import React from 'react'
import { Link } from 'react-router-dom';

import './Card-style.css';


const Card = props => {

  
    
  return (
    <Link  to={props.link} style={{ textDecoration: 'none' }}>
    <div className='card text-center shadow'>
      
      <div className='overflow'>
        <img src={props.imgsrc} alt='someplace' className='card-img-top'/>
      </div>

      <div className='card-body text-dark text-center'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary text-center'>{props.text}</p>
       
      </div>
     
    </div> </Link>
  )
}

export default Card