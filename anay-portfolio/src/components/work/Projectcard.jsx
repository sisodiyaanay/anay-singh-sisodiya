import React from 'react';

const ProjectCard = ({ imageUrl, heading, link }) => {
  return (
    <div className="project-card">
      <div className="main-content">
        <div className="card-image">
          <img src={imageUrl} alt={heading} />
        </div>
        <div className="card-heading">{heading}</div>
        <div className="card-content"></div>
      </div>
      <div className="card-btn">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
