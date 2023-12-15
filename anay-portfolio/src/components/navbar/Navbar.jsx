import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar__left"><a href="#home">© Code by Anay</a>
            
        </div>
        <div className="navbar__right">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
        </div>
    </nav>
  )
}

export default Navbar