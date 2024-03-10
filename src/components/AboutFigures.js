
import About3 from '../images/about3.JPG'
import About4 from '../images/about4.jpg'
import About2 from '../images/esc2.jpg'
import About6 from '../images/about6.JPG'
import About7 from '../images/about7.jpg'
import About8 from '../images/about8.jpg'
import About9 from '../images/about2.JPG'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function FigureExample() {
  return (

    <>
<Container>

    <Row>
      <Col xs = {12} md='auto' lg = {4}>
        <Image 
        src={About9} 

        loading='lazy'
        thumbnail />
      </Col>
      <Col xs= {12} md='auto' lg = {4} >
        <Image src={About3} thumbnail />
      </Col>
      <Col xs= {12} md='auto' lg = {4}>
        <Image src={About4} thumbnail />
      </Col>
      <Col xs= {12} md='auto' lg = {4}>
        <Image src={About6} thumbnail />
      </Col>
      <Col xs= {12} md='auto' lg = {4}>
        <Image src={About7} thumbnail />
      </Col>
      <Col xs= {12} md='auto' lg = {4}>
        <Image src={About8} thumbnail />
      </Col>
      <Col xs= {12} md='auto' lg = {4}>
        <Image src={About2} thumbnail />
      </Col>
    </Row>
</Container>
</>
  )
}

export default FigureExample;