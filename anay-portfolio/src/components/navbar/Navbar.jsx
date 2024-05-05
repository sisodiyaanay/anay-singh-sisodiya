import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef, useState } from "react";
import "./navbar.css";
import ThemeToggle from '../darkmode/ThemeToggle';

const Navbar = () => {


  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const hideNav = () => {
    setShowNav(false);
  };

  useGSAP(() => {
    gsap.fromTo(".nav-animation", {
      y: -200,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });
  })

  // useGSAP(() => {
  //   gsap.fromTo("#code-by-anay", {
  //     backgroundColor: "white",
  //   }, {
  //     backgroundColor: "var(--pink-color)",
  //     duration: 2,
  //     delay: 0.5,
  //     ease: "power4.out",
  //   });
  // })



  return (
    <nav id="navbar" className={`nav-text ${showNav ? "show" : ""}`}>
      <div id="helper-nav">
        <div id="navbar-left" className='nav-animation'>
          <a id="code-by-anay" href="#home">© Code by Anay</a>
          <ThemeToggle />
        </div>
        
        <div id="navbar-right" className="flex-row">
        
          <a href="#home" className="nav-btn nav-animation" onClick={hideNav}>
            Home
          </a>
          <a href="#about" className="nav-btn nav-animation" onClick={hideNav}>
            About
          </a>
          <a href="#skills" className="nav-btn nav-animation" onClick={hideNav}>
            Skills
          </a>
          <a href="#work" className="nav-btn nav-animation" onClick={hideNav}>
            Work
          </a>
          <a href="#contact" className="nav-btn nav-animation" onClick={hideNav}>
            Contact
          </a>
        </div>
        <button id="hamburger-btn" onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
