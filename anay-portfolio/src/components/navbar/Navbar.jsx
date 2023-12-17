import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const hideNav = () => {
    setShowNav(false);
  };

  return (
    <nav id="navbar" className={`flex-column ${showNav ? "show" : ""}`}>
      <div id="helper-nav" className="flex-row">
        <div id="left">
          <a href="#home">© Code by Anay</a>
        </div>
        <div id="navbar-right" className="flex-row">
          <a href="#home" className="nav-btn" onClick={hideNav}>
            Home
          </a>
          <a href="#about" className="nav-btn" onClick={hideNav}>
            About
          </a>
          <a href="#skills" className="nav-btn" onClick={hideNav}>
            Skills
          </a>
          <a href="#work" className="nav-btn" onClick={hideNav}>
            Work
          </a>
          <a href="#contact" className="nav-btn" onClick={hideNav}>
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
