import React from "react";
import "./work.css";
import portfolio from "../../assets/portfolio.png";

const Work = () => {
  return (
    <section id="work">
      <div id="work-main-container">
        <div className="card-container">
          <div className="project-card">
            <div className="main-content">
              <div className="card-image">
                <img src={portfolio} alt="portfolio" id="portfolio_img" />
              </div>
              <div className="card-heading">Heading</div>
              <div className="card-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                iure ducimus sequi accusantium laboriosam atque voluptas
                asperiores molestias ratione quibusdam non blanditiis beatae
                architecto, assumenda voluptatem, esse, exercitationem eos
                illum.
              </div>
            </div>
            <div className="card-btn">Read More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
