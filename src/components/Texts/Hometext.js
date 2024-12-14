import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../App.css"
import { useTranslation } from 'react-i18next';


function HomeText() {

  const {t} = useTranslation()
  return (

    <Container className='fluid'>
        <Row>
            <Col >
            <div className='text-home'>
              <h1>{t('homeTexts.hometext1')}</h1>
            </div>
            </Col>
            <Col>
            <div className='text-home2'>
              <ul>
              <li> Guias certificados en emergencias (algun dia)</li>
              <li> Transporte redondo</li>
              <li> Equipo personal certificado</li>
              <li> Equipo personal certificado por mi jefecita</li>
              <li> Higiene en Alimentos y bebidas</li>
              </ul>
            </div>
            </Col>
    </Row>
    </Container>
  );
}

export default HomeText;