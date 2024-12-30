// import React, { useState, useEffect } from 'react';
// import './Hero.css' 

// const Hero = () => {

//   return (
//     <div className='hero' id='#'>

//       <div className="layer"></div>
      
//       <div className='container hero__header'>
//         <h1 className="hero__heading">Empower The World With Us</h1>
//         <h3 className="hero__heading_small">Connect With Us</h3>
//         <a href="#contact">
//           <button className='btn btn--primary btn--oval btn__start'>Get Started</button>
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Hero

// import React, { useEffect } from 'react';
// import './Hero.css';
// import background from '../../assets/bacground rcm.webp'


// const Hero = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const heroElement = document.querySelector('.hero');
//       const scrollPosition = window.scrollY;
//       heroElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className='hero'
//       id="#"
//     >
//       <div className="layer"></div>
//       <div className='container hero__header'>
//         <h1 className="hero__heading">Empower The World With Us</h1>
//         {/* <h3 className="hero__heading_small">Connect With Us</h3> */}
//         <a href="#contact">
//           <button className='btn btn--primary btn--oval btn__start'>Get Started</button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useEffect } from 'react';
import './Hero.css';

import LeftGate from '../../assets/gate-left.png'
import RightGate from '../../assets/gate-right.png'
import Grass from '../../assets/grass.png'
import RightTree from '../../assets/tree-left.png'
import LeftTree from '../../assets/tree-right.png'
import Building from '../../assets/building.png'

const Hero = () => {
 useEffect(() => {
        const handleScroll = () => {
            const text = document.getElementById('text');
            const treeLeft = document.getElementById('tree-left');
            const treeRight = document.getElementById('tree-right');
            const gateLeft = document.getElementById('gate-left');
            const gateRight = document.getElementById('gate-right');

            if (text && treeLeft && treeRight && gateLeft && gateRight) {
                let scrollY = window.scrollY;
                text.style.transform = `translateY(${scrollY * 0.5}px)`;
                treeLeft.style.transform = `translateX(${-scrollY * 1.5}px)`;
                treeRight.style.transform = `translateX(${scrollY * 1.5}px)`;
                gateLeft.style.transform = `translateX(${-scrollY * 0.5}px)`;
                gateRight.style.transform = `translateX(${scrollY * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="parallax-container">
            <img src={Building} alt="Background image" className="background__image" />
            <h1 id="text" className="parallax-text">Independents Consultant</h1>
            <img src={LeftTree} alt="" id="tree-left" className="tree tree-left"/>
            <img src={RightTree} alt="" id="tree-right" className="tree tree-right"/>
            <img src={RightGate} alt="" id="gate-right" className="gate gate-right"/>
            <img src={LeftGate} alt="" id="gate-left" className="gate gate-left"/>
        </div>
    );
};

export default Hero;
