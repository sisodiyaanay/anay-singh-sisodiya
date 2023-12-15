import React, { useEffect } from "react";
import "./preloader.css";

const Preloader = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");

    const hidePreloader = () => {
      preloader.style.display = "none";
    };

    // Using setTimeout to simulate a 2000ms (2 seconds) delay
    const timeoutId = setTimeout(hidePreloader, 2000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs once after the component mounts

  return (
    <div id="preloader">
      <div>
        <h1>
          •<span></span>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
