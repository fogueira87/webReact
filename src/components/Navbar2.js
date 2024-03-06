import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import "../App.css"
import { useTranslation } from 'react-i18next';



const languages = [
    {
        code:'es',
        name:'Español',
        county_code : 'mx'
    },
    {
        code:'en',
        name:'English',
        county_code : 'us'
    },

    {
        code:'pt',
        name:'Portugués',
        county_code : 'br'
    }
]


const GlobeIcon = ({width = 24, height=24}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="muted" className="bi bi-globe mt-2 me-1" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>

)

function Navbar2() {

const {t} = useTranslation()
  return (

    
    <Navbar expand="lg" className="bg-dark" fixed='top' data-bs-theme="dark" style={{opacity:'0.6'}}>
      <Container>
        <Link to="/">Foeira</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-2 m-2 w-100 ">
            <Link to="/about" className='m-2 fs-5 text-decoration-none'>{t("about")}</Link>
            <Link to="/contact" className='m-2 pe-3 fs-5 text-decoration-none' >{t("contact")}</Link>
            <GlobeIcon/>
            <NavDropdown id="basic-nav-dropdown">
            {languages.map(({code, name, county_code}) => (
                        
                        <li key={county_code}>
                            <div>
                            <NavDropdown.Item className="dropdown-item"  onClick={()=> i18next.changeLanguage(code)}>{name}<button className={`fi fi-${county_code} mx-2 mt-2`}></button></NavDropdown.Item>
                            </div>  
                        </li>  
                        
                        ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbar2;