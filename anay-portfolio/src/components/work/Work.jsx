import React from "react";
import "./work.css";
import portfolio from "../../assets/portfolio.png";
import analysis from "../../assets/analysis.png";
import lithium from "../../assets/lithium.png";
import jeevan_dan from "../../assets/jeevan_dan.png";
import design from "../../assets/design.png";
import graduation from "../../assets/graduation.png";

import ProjectCard from "./Projectcard.jsx";

const Work = () => {
  return (
    <section id="work">
      <div id="work-main-container">
        <div id="work-heading">
          {" "}
          <p className="section-heading" id="work-heading">
            My Projects
          </p>
        </div>
        <div className="card-container">
          <ProjectCard
            imageUrl={graduation}
            heading="Graduation Requirements Tracker"
            link="https://students.iitgn.ac.in/student-academic-council/#/grade-req-tracker"
          />
          <ProjectCard
            imageUrl={portfolio}
            heading="Personal Portfolio"
            link="https://sisodiyaanay.github.io/anay-singh-sisodiya/#home"
          />
          <ProjectCard
            imageUrl={lithium}
            heading="Comprehensive Analysis on Lithium Production"
            link="https://drive.google.com/file/d/1qOK5mYcBkJhqQgIDj9TsWpi1_i3o7AJi/view"
          />
          <ProjectCard
            imageUrl={analysis}
            heading="Analysis of Diversity of Mother Tongues in different cities of India"
            link="https://drive.google.com/file/d/1FjQXJDBEHTj2Aef41JRtsX6fk8oOfiLS/view"
          />
          <ProjectCard
            imageUrl={jeevan_dan}
            heading="JEEVAN DAN Accident Detection and Alert System"
            link="https://drive.google.com/file/d/1Kz-gp9FnO8rMGsSfwBInYN8Smq4kRS5i/view"
          />
          <ProjectCard
            imageUrl={design}
            heading="Compact Gadget Cleaner"
            link="https://drive.google.com/file/d/1BEJzVfkr6nVV0O8HpWYCBkAlql356Zu3/view"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
