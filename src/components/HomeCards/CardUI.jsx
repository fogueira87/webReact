import React from 'react';
import { Link } from 'react-router-dom';
import './Card-style.css';

const Card = (props) => {
  return (
    <Link to={props.link} style={{ textDecoration: 'none' }}>
      {/* Use both Bootstrap classes and our custom classes for styling */}
      <div className="card no-fixed-height text-center shadow my-card">
        <div className="overflow">
          <img src={props.imgsrc} alt="someplace" className="card-img-top" />
        </div>
        {/* Bootstrap's card-body + our my-card-body for additional styling */}
        <div className="text-dark text-center my-card-body">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text text-secondary">{props.text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
