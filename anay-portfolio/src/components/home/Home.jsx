import React from "react";
import "./home.css";
import hero_image from "../../assets/hero_image.png";
const Home = () => {
  return (
    <header id="home">
      <div className="fake-nav"></div>
      <div id="home-main-container" className="flex-row">
        <div id="home-left">
          <div className="home-text">
            <p id="home-text-heading">
              Hello, <br /> I am <span id="anay">Anay</span>!
            </p>
            <p id="home-text-subheading">A visual storyteller</p>
          </div>
        </div>
        <div id="home-right">
          <img src={hero_image} alt="hero_image" id="hero-image" />
        </div>
      </div>
    </header>
  );
};

export default Home;
