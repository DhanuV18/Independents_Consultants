import React, { useState } from 'react'
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { motion } from "framer-motion"

import './Navbar.css'
import '../../index.css'
import logo from '../../assets/Logo2.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  
  
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    } 

    // Variants for menu animation
  const menuVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
        staggerChildren: 0.2,   
      },
    },
  };

  //  const navigate = useNavigate();
  
  //      const goToPage = (path) => {
  //        navigate(path);
  //      }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    //   rotate: [0, 10, -10, 0], // Add a subtle wobble effect
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (  

        <nav className='navbar'>
            <motion.img src={logo} alt="Company Logo"
                        className='logo' 
                        variants={logoVariants}
                        initial="hidden"
                        animate="visible"
            />
            <motion.ul
                    className={mobileMenu ? '' : 'hide-mobile-menu'}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
            >
            <motion.li variants={itemVariants}>
                  <Link to="/" className='navbar__list' onClick={() => goToPage("/")}>Home</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                  <Link to="service" className='navbar__list' onClick={() => goToPage("/service")}>Services</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                  <Link to="about-us" className='navbar__list' onClick={() => goToPage("/about-us")}>About Us</Link>
            </motion.li>
            {/* <motion.li variants={itemVariants}>
            <Link to="testimonials" className='navbar__list'>Testimonials</Link>
            </motion.li> */}
            <motion.li variants={itemVariants} >
                  <Link to="contact-us" onClick={() => goToPage("/contact-us")}>
                    {/* <a href="#contact"> */}
                        <button className="btn btn--primary">Get in Touch</button>
                    {/* </a>                */}
                  </Link>
            </motion.li>
        </motion.ul>
            <motion.img src={menu} alt="menu" className='menu' onClick={toggleMenu} />
        </nav>
  )
}

export default Navbar