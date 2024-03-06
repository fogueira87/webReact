import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar2 from "./components/Navbar2";



function App() {
const {t} = useTranslation()

  return (
   
    <div>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/about" element={<AboutPage/>} /> 
        <Route path="/contact" element={<ContactPage/>} /> 
      </Routes>
      <div className="d-flex flex-column align-items-start" >
        <h1 className="font-weight-normal mb-3">{t('Welcome_to_React')}</h1>
      </div>
    </div>
  );
}

export default App;
