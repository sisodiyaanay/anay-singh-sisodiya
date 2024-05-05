import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";
import laptop_wave from "../../assets/laptop_wave.png";

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the left section
    gsap.from(aboutLeftRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: aboutLeftRef.current,
        start: "top 90%", 
        end: "bottom 70%", 
        scrub: true, 
      },
    });

    // Animation for the right section
    gsap.from(aboutRightRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRightRef.current,
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="about"> 
      <div id="about-main-container" className="flex-row">
        <div id="about-left" ref={aboutLeftRef}>
          <img src={laptop_wave} alt="hero_image" id="about-image" />
        </div>
        <div id="about-right" ref={aboutRightRef}>
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
