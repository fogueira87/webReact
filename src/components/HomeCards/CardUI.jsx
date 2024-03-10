import React from 'react'
import { Link } from 'react-router-dom';

import './Card-style.css';


const Card = props => {

  
    
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={props.imgsrc} alt='someplace' className='card-img-top'/>
      </div>

      <div className='card-body text-dark text-center'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text text-secondary text-center'>{props.text}</p>
        <Link to={props.link} className='btn btn-outline-info text-center'>{props.go}</Link>
      
      </div>
    </div>
  )
}

export default Card