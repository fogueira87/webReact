import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/cover1.jpg'
import img2 from '../images/cover2.jpg'
import img3 from '../images/cover3.jpg'
import img5 from '../images/cover5.jpg'
import img6 from '../images/cover17.jpg'
import img7 from '../images/cover7.jpg'
import img10 from '../images/cover10.jpg'
import img11 from '../images/cover11.JPG'
import img12 from '../images/cover12.jpg'
import img14 from '../images/cover14.jpg'
import img15 from '../images/cover15.jpg'
import './Carrusel.css'
import { useTranslation } from 'react-i18next';

function CarouselPage() {
  const {t} = useTranslation()
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Carousel fade>
        <Carousel.Item>
          <a href='/mont/#citlaltepetl'>
            <img
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </a>
          <Carousel.Caption className='text-primary'>
            <h3>{t("homeCover.primer_title_home")}</h3>
            <p>{t("homeCover.primer_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img 
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{t("homeCover.segundo_title_home")}</h3>
            <p>{t("homeCover.segundo_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption className='text-danger'>
            <h3>{t("homeCover.tercer_title_home")}</h3>
            <p>{t("homeCover.tercer_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src={img5}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3>{t("homeCover.quinto_title_home")}</h3>
            <p>{t("homeCover.quinto_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* ... Repeat for other slides ... */}

        <Carousel.Item>
          <img 
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
            className="d-block w-100"
            src={img15}
            alt="fourteenth slide"
          />
          <Carousel.Caption>
            <h3>{t("homeCover.quince_title_home")}</h3>
            <p>{t("homeCover.quince_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselPage
