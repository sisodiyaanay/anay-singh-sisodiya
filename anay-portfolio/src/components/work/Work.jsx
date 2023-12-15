import React from "react";
import "./work.css";
import portfolio from "../../assets/portfolio.png";
import analysis from "../../assets/analysis.png";
import lithium from "../../assets/lithium.png";
import jeevan_dan from "../../assets/jeevan_dan.png";
import design from "../../assets/design.png";

const Work = () => {
  return (
    <section id="work">
      <div id="work-main-container" className="flex-column">
        <div id="work-heading">
          {" "}
          <p className="section-heading" id="work-heading">
            My Projects
          </p>
        </div>
        <div className="card-container">
          <div className="project-card">
            <div className="main-content">
              <div className="card-image">
                <img src={portfolio} alt="portfolio" id="portfolio_img" />
              </div>
              <div className="card-heading">Personal Portfolio</div>
              <div className="card-content"></div>
            </div>
            <div className="card-btn">Read More</div>
          </div>

          <div className="project-card">
            <div className="main-content">
              <div className="card-image">
                <img src={lithium} alt="lithium" id="lithium_img" />
              </div>
              <div className="card-heading">
                Comprehensive Analysis on Lithium Production
              </div>
              <div className="card-content"></div>
            </div>
            <div className="card-btn">Read More</div>
          </div>

          <div className="project-card">
            <div className="main-content">
              <div className="card-image">
                <img src={analysis} alt="analysis" id="analysis_img" />
              </div>
              <div className="card-heading">
                Analysis of Diversity of Mother Tongues in different cities of
                India
              </div>
              <div className="card-content"></div>
            </div>
            <div className="card-btn">Read More</div>
          </div>

          <div className="project-card">
            <div className="main-content">
              <div className="card-image">
                <img src={jeevan_dan} alt="jeevan_dan" id="jeevan_dan_img" />
              </div>
              <div className="card-heading">
                JEEVAN DAN Accident Detection and Alert System
              </div>
              <div className="card-content"></div>
            </div>
            <div className="card-btn">Read More</div>
          </div>

          <div className="project-card">
            <div className="main-content">
              <div className="card-image">
                <img src={design} alt="design" id="design" />
              </div>
              <div className="card-heading">Compact Gadget Cleaner</div>
              <div className="card-content"></div>
            </div>
            <div className="card-btn">Read More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
