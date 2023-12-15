import React from "react";
import "./skills.css";
import skills from "../../assets/skills.png";

const Skills = () => {
  return (
    <section id="skills" className="flex-column">
      <div id="skills-main-container" className="flex-row">
        <div id="skills-left">
          <div className="skills-heading">
            <p className="section-heading">Skills</p>
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
                    <div id="design" className="skills-element"></div>
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
        <div id="skills-right">
          <img src={skills} alt="skills_image" id="skills-image" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
