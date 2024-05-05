import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./home.css";
import hero_image from "../../assets/hero_image.png";

const Home = () => {
  const helloRef = useRef(null);
  const nameRef = useRef(null);
  const storytellerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(
      helloRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8,delay: 2}
    )
      .fromTo(
        nameRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8 }
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.5" // Start this animation 0.5 second before the previous one ends
      )
      .fromTo(
        storytellerRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5" // Start this animation 0.5 seconds before the previous one ends
      );
      


  }, []);

  return (
    <header id="home">
      <div className="fake-nav"></div>
      <div id="home-main-container" className="flex-row">
        <div id="home-left">
          <div className="home-text">
            <p ref={helloRef} className="home-text-heading">
              Hello,
            </p>
            <p ref={nameRef} className="home-text-heading">
              I am <span id="anay" >Anay</span>!
            </p>
            <p ref={storytellerRef} id="home-text-subheading">
              A visual storyteller
            </p>
          </div>
        </div>
        <div id="home-right" ref={imageRef}>
          <img src={hero_image} alt="hero_image" id="hero-image" />
        </div>
      </div>
    </header>
  );
};

export default Home;
