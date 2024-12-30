import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Cards/Cards'
import Founder from './Components/Founder/Founder'
import Mission from './Components/Mission/Mission'
import Testimonials from './Components/Testimonials/Testimonials'
import ContactForm from './Components/ContactForm/ContactForm'

import Service from './NewPages/Service/Service';
import AboutUs from './NewPages/AboutUs/AboutUs';
import Contact from './NewPages/ContactUs/Contact'


const App = () => {

 

  return (
 
    // <Router>
    //     <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/service" element={<Service />} />
    //         <Route path="/aboutus" element={<AboutUs />} />
    //         <Route path="/contact" element={<Contact />} />
    //     </Routes>
    // </Router>


<Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>

  )
}

export default App