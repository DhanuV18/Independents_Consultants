import React, { useEffect, useRef } from 'react';
import './NewHero.css'

import LeftGate from '../../assets/gate-left.png'
import RightGate from '../../assets/gate-right.png'
import Grass from '../../assets/grass.png'
import RightTree from '../../assets/tree-left.png'
import LeftTree from '../../assets/tree-right.png'
import Building from '../../assets/building.png'

const NewHero = () => {

  const textRef = useRef('Hi');
  const treeLeftRef = useRef(null);
  const treeRightRef = useRef(null);
  const gateLeftRef = useRef(null);
  const gateRightRef = useRef(null);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (textRef.current) textRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  //     if (treeLeftRef.current) treeLeftRef.current.style.left = `${scrollPosition * -0.5}px`;
  //     if (treeRightRef.current) treeRightRef.current.style.right = `${scrollPosition * -0.5}px`;
  //     if (gateLeftRef.current) gateLeftRef.current.style.left = `${scrollPosition * 0.5}px`;
  //     if (gateRightRef.current) gateRightRef.current.style.right = `${scrollPosition * 0.5}px`;
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     if (textRef.current) textRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  //     if (bgRef.current) bgRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrollPosition * -1.5}px)`;
      }
      if (treeLeftRef.current) {
        treeLeftRef.current.style.transform = `translateX(${-scrollPosition * 0.8}px)`;
      }
      if (treeRightRef.current) {
        treeRightRef.current.style.transform = `translateX(${scrollPosition * 0.8}px)`;
      }
      if (gateLeftRef.current) {
        gateLeftRef.current.style.transform = `translateX(${-scrollPosition * 2.1}px)`;
      }
      if (gateRightRef.current) {
        gateRightRef.current.style.transform = `translateX(${scrollPosition * 2.1}px)`;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return ( 
    <div className="app">
      <section className="hero">
        {/* <h2 className='hero-text'>Welcome to Independents Consultants</h2> */}
        <h1 ref={textRef} id="text" className="hero-text">Welcome to the Parallax Experience</h1>
        <img ref={treeLeftRef} id="tree-left" className="tree-left" src={RightTree} alt="Tree Left" />
        <img ref={treeRightRef} id="tree-right" className="tree-right" src={LeftTree} alt="Tree Right" />
        <img ref={gateLeftRef} id="gate-left" className="gate-left" src={LeftGate} alt="Gate Left" />
        <img ref={gateRightRef} id="gate-right" className="gate-right" src={RightGate} alt="Gate Right" />
      </section>
      {/* <section className="content">
        <h2>Interactive Design</h2>
        <p>Experience a website where every scroll brings something new to life.</p>
      </section> */}
    </div>
  );
}

export default NewHero