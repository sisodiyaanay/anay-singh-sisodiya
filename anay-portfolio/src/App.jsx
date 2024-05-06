import React from "react";
import { useState } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Preloader from "./components/preloader/Preloader";


import "@fontsource/league-spartan"; // Defaults to weight 400
import "@fontsource/league-spartan/700.css"; // Specify weight
import "@fontsource/league-spartan/600.css"; // Specify weight
import "@fontsource/league-spartan/500.css"; // Specify weight
import "@fontsource/league-spartan/400.css"; // Specify weight
import "@fontsource/league-spartan/300.css"; // Specify weight
import "@fontsource/league-spartan/200.css"; // Specify weight
import "@fontsource/league-spartan/100.css"; // Specify weight

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <Preloader />

      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="overlay"></div>
        <Navbar darkMode={darkMode} />
        <Home />
        <About />
        <Skills />
        <Work />
        <div className="contact-wrapper">
          <Contact />
        </div>

        {/* Other components */}
      </div>

    </>
  );
};

export default App;
