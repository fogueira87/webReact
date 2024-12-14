import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../images/cover1.jpg';
import img2 from '../images/cover2.jpg';
import img3 from '../images/cover3.jpg';
import img5 from '../images/cover5.jpg';
import img17 from '../images/cover17.jpg';
import img15 from '../images/cover15.jpg';
import './Carrusel.css';
import { useTranslation } from 'react-i18next';

function CarouselPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (path, anchor) => {
    navigate(`${path}#${anchor}`);
  };

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Carousel fade>
        <Carousel.Item>
          <div
            onClick={() => handleNavigate('/mont', 'citlaltepetl')}
            style={{ cursor: 'pointer' }}
          >
            <img
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="text-primary">
            <h3>{t("homeCover.primer_title_home")}</h3>
            <p>{t("homeCover.primer_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div
            onClick={() => handleNavigate('/hikes', 'leones')}
            style={{ cursor: 'pointer' }}
          >
            <img
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
        </div>
         
          <Carousel.Caption className="text-success">
            <h3>{t("homeCover.segundo_title_home")}</h3>
            <p>{t("homeCover.segundo_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/hikes">
            <img
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />
          </Link>
          <Carousel.Caption className="text-danger">
            <h3>{t("homeCover.tercer_title_home")}</h3>
            <p>{t("homeCover.tercer_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/mont">
            <img
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              className="d-block w-100"
              src={img5}
              alt="Fifth slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>{t("homeCover.quinto_title_home")}</h3>
            <p>{t("homeCover.quinto_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/mont">
            <img
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              className="d-block w-100"
              src={img17}
              alt="Chiapas"
            />
          </Link>
          <Carousel.Caption>
            <h3>{t("homeCover.septimo_title_home")}</h3>
            <p>{t("homeCover.septimo_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Link to="/mont">
            <img
              style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
              className="d-block w-100"
              src={img15}
              alt="Fourteenth slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>{t("homeCover.quince_title_home")}</h3>
            <p>{t("homeCover.quince_p_home")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;
