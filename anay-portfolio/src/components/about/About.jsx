import React from "react";
import "./about.css";
import question_mark from "../../assets/question_mark.png";

const About = () => {
  return (
    <section id="about">
      <div className="clock-image">
        <img src={question_mark} alt="about me" />
      </div>
      <div className="about-me-content">
        <p className="about-me-heading">
          Welcome to my portfolio! <br /> <br />I'm Anay, a Designer & Developer with a
          passion for creating innovative designs that capture attention and
          convey meaning.
        </p>{" "}
        <br />
        <hr className="hr" />
        <p className="about-me-sub-heading">
          My specialization includes designing eye-catching social media posts,
          creating memorable merch designs, and developing responsive and
          user-friendly websites that stand out in a crowded digital landscape.
        </p>
      </div>
    </section>
  );
};

export default About;
