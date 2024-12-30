import React from 'react'
import './Service.css'
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";

import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero';
import Cards from '../../Components/Cards/Cards';
import OtherNavbar from '../../Components/NewNavbar/NewNavbar';
import NewNavbar from '../../Components/NewNavbar/NewNavbar';

const Service = () => {

  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  }

  return (
    <div>


 
      <Hero />
      <Cards />



    </div>
  )
}

export default Service