import React, { useEffect } from "react";
import "./work.css";
import portfolio from "../../assets/portfolio.png";
import analysis from "../../assets/analysis.png";
import lithium from "../../assets/lithium.png";
import jeevan_dan from "../../assets/jeevan_dan.png";
import design from "../../assets/design.png";
import uci_har from "../../assets/uci_har.png";
import uci_har_2 from "../../assets/uci_har_2.png";
import world_cup from "../../assets/world_cup.png";
import graduation from "../../assets/graduation.png";
import ProjectCard from "./Projectcard.jsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Work = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation for work-heading
    gsap.from("#work-heading", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#work-heading",
        start: "top 90%", 
        end: "bottom 70%", 
        scrub: 1,
      },
    });

    // Animation for project cards
    gsap.utils.toArray(".project-card").forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%", 
          end: "bottom 70%", 
          scrub: 1,
        },
      });
    });
  }, []);

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
            className="project-card"
          />
          <ProjectCard
            imageUrl={portfolio}
            heading="Personal Portfolio"
            link="https://sisodiyaanay.github.io/anay-singh-sisodiya/#home"
            className="project-card"
          />
          <ProjectCard
              imageUrl={uci_har_2}
              heading=" HumanActivity Recognition (HAR) Analysis"
              link="https://github.com/sisodiyaanay/UCI-HAR"
              className="project-card"
            />
          <ProjectCard
              imageUrl={world_cup}
              heading="Analyzing Performance Data for T20 World Cup 2024: Best 11 Prediction"
              link="https://github.com/sisodiyaanay/t20-wc-2024-best-XI"
              className="project-card"
            />
          <ProjectCard
            imageUrl={lithium}
            heading="Comprehensive Analysis on Lithium Production"
            link="https://drive.google.com/file/d/1qOK5mYcBkJhqQgIDj9TsWpi1_i3o7AJi/view"
            className="project-card"
          />
          <ProjectCard
            imageUrl={analysis}
            heading="Analysis of Diversity of Mother Tongues in different cities of India"
            link="https://drive.google.com/file/d/1FjQXJDBEHTj2Aef41JRtsX6fk8oOfiLS/view"
            className="project-card"
          />
          <ProjectCard
            imageUrl={jeevan_dan}
            heading="JEEVAN DAN Accident Detection and Alert System"
            link="https://drive.google.com/file/d/1Kz-gp9FnO8rMGsSfwBInYN8Smq4kRS5i/view"
            className="project-card"
          />
            
          <ProjectCard
            imageUrl={design}
            heading="Compact Gadget Cleaner"
            link="https://drive.google.com/file/d/1BEJzVfkr6nVV0O8HpWYCBkAlql356Zu3/view"
            className="project-card"
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
