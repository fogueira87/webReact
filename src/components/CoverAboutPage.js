import Image from 'react-bootstrap/Image';
import FigureCaption from 'react-bootstrap/FigureCaption'
import ImageCover from '../images/contact.jpg'

function FluidExample() {
  return (
  <div>
 
  <FigureCaption>
  <Image 
  src={ImageCover}
  fluid 
  style={{width: '100%', height: 'auto'}}
  
  />
</FigureCaption>
  
  </div>
  )
}

export default FluidExample;