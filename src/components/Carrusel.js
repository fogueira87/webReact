import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.JPG'
import img2 from '../images/img2.JPG'
import img3 from '../images/img3.JPG'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
//import './Carrusel.css'

function CarouselPage() {
  return (
    <div>
    <Carousel>

    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="cover w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="cover w-100"
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="cover w-100"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="cover w-100"
        src={img4}
        alt="fourh slide"
      />
      <Carousel.Caption>
        <h3>Fourth slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="cover w-100"
        src={img5}
        alt="Fifth slide"
      />
      <Carousel.Caption>
        <h3>Fifth slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage