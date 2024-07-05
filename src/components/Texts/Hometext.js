import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../App.css"


function HomeText() {
  return (
    <Container className='fluid'>
        <Row>
            <Col >
            <div className='text-home'>
             Vén antes que se queme todo!!.
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