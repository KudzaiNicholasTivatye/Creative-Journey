import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Services from './components/Services';
import ScrollToTop from "./components/ScrollToTop";



const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
       
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
