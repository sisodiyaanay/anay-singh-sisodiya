import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar" className="flex-column">
      
      <div id="helper-nav" className="flex-row">
        <div id="left">
          <a href="#home">© Code by Anay</a>
        </div>
        <div id="navbar-right" className="flex-row">
          <a href="#home" className="nav-btn">
            Home
          </a>
          <a href="#about" className="nav-btn">
            About
          </a>
          <a href="#skills" className="nav-btn">
            Skills
          </a>
          <a href="#work" className="nav-btn">
            Work
          </a>
          <a href="#contact" className="nav-btn">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 