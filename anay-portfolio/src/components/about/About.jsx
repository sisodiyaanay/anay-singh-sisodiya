import React from "react";
import "./about.css";
import laptop_wave from "../../assets/laptop_wave.png";

const About = () => {
  return (
    <section id="about"> 
      <div id="about-main-container" className="flex-row">
        <div id="about-left">
          <img src={laptop_wave} alt="hero_image" id="about-image" />
        </div>
        <div id="about-right">
          <div className="section-heading">About Me</div>
          <div className="section-content">
            Welcome to my portfolio! I'm Anay, a Designer & Developer with a
            passion for creating innovative designs that capture attention and
            convey meaning.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
 