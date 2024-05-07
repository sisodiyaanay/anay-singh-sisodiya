import React, { useEffect, useRef } from "react";
import "./skills.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skills from "../../assets/skills.png";

const Skills = () => {
  const skillsLeftRef = useRef(null);
  const skillsRightRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the left section
    gsap.from(skillsLeftRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skillsLeftRef.current,
        start: "top 90%", 
        end: "bottom 90%", 
        scrub: 1, 
      },
    });

    // Animation for the right section
    gsap.from(skillsRightRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skillsRightRef.current,
        start: "top 90%",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    
  }, []);

  return (
    <section id="skills" className="flex-column">
      <div id="skills-main-container" className="flex-row">
        <div id="skills-left" ref={skillsLeftRef}>
          <div className="skills-main">
            <p className="section-heading">Skills</p>
            <div id="skills-phone-container"><img src={skills} alt="skills_image" id="skills-image-phone" /></div>
            <p className="section-content" id="skills-content">
              I have an experience of building projects with HTML, CSS,
              JavaScript and ReactJS aditionally I have also worked with MySQL,
              Python and C++. I have also worked with UI/UX Designing tools like
              Adobe XD, Figma and Adobe Photoshop.
            </p>
            <div id="skill-sub-container">
              <ul>
                <li>
                  <p className="skills-element-heading">Frontend</p>
                  <div className="skills-100">
                    <div id="frontend" className="skills-element"></div>
                  </div>
                </li>
                <li>
                  <p className="skills-element-heading">Backend</p>
                  <div className="skills-100">
                    <div id="backend" className="skills-element"></div>
                  </div>
                </li>
                <li>
                  <p className="skills-element-heading">UI/UX Design</p>
                  <div className="skills-100">
                    <div id="UIdesign" className="skills-element"></div>
                  </div>
                </li>
                <li>
                  <p className="skills-element-heading">Problem Solving</p>
                  <div className="skills-100">
                    <div id="problem-solving" className="skills-element"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="skills-right" ref={skillsRightRef}>
          <img src={skills} alt="skills_image" id="skills-image" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
