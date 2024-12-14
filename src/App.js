
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HikesPage from "./pages/HikesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar2 from "./components/Navbar2";
import RCPage from "./pages/RCPage";
import MCPage from "./pages/MCPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {


  return (
   
    <div>
      <Navbar2 />
      <Routes>
        <Route exact path="/" element={<HomePage/>} /> 
        <Route path="/hikes" element={<HikesPage/>} />
        <Route path="/esc" element={<RCPage/>} /> 
        <Route path="/mont" element={<MCPage/>} /> 
        <Route path="/about" element={<AboutPage/>} /> 
        <Route path="/contact" element={<ContactPage/>} /> 
        <Route path="*" element = {<Navigate to="/"/>} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        theme="colored"
      />

    </div>
  );
}

export default App;
