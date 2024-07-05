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
    <div>
    <Carousel fade>
    <Carousel.Item>
      <a href='/mont/#citlaltepetl'>
        <img 
        style={{height:'70hv'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
        
        
      /></a>
      <Carousel.Caption  className='text-primary'>
        <h3>{t("homeCover.primer_title_home")}</h3>
        <p>{t("homeCover.primer_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70hv'}}
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
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
      <Carousel.Caption className='text-danger'>
        <h3>{t("homeCover.tercer_title_home")}</h3>
        <p>{t("homeCover.tercer_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    {/*
    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img4}
        alt="fourh slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.cuarto_title_home")}</h3>
        <p>{t("homeCover.cuarto_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    */}

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img5}
        alt="Fifth slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.quinto_title_home")}</h3>
        <p>{t("homeCover.quinto_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img6}
        alt="sixth slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.sexto_title_home")}</h3>
        <p>{t("homeCover.sexto_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img7}
        alt="Seventh slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.septimo_title_home")}</h3>
        <p>{t("homeCover.septimo_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

{/** 
    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img8}
        alt="Eigth slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.octavo_title_home")}</h3>
        <p>{t("homeCover.octavo_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img9}
        alt="neuneth slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.noveno_title_home")}</h3>
        <p>{t("homeCover.noveno_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    */}

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img10}
        alt="tendth slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.decimo_title_home")}</h3>
        <p>{t("homeCover.decimo_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img11}
        alt="eleventh slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.onceavo_title_home")}</h3>
        <p>{t("homeCover.onceavo_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img12}
        alt="eleventh slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.doceavo_title_home")}</h3>
        <p>{t("homeCover.doceavo_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>
{/**
    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img13}
        alt="eleventh slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.trece_title_home")}</h3>
        <p>{t("homeCover.trece_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

     */}

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img14}
        alt="fourtenth slide"
      />
      <Carousel.Caption>
        <h3>{t("homeCover.catorce_title_home")}</h3>
        <p>{t("homeCover.catorce_p_home")}</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:'70hv'}}
        className="d-block w-100"
        src={img15}
        alt="fourtenth slide"
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