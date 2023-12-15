import React from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import "@fontsource/league-spartan"; // Defaults to weight 400
import "@fontsource/league-spartan/700.css"; // Specify weight
import "@fontsource/league-spartan/600.css"; // Specify weight
import "@fontsource/league-spartan/500.css"; // Specify weight
import "@fontsource/league-spartan/400.css"; // Specify weight
import "@fontsource/league-spartan/300.css"; // Specify weight
import "@fontsource/league-spartan/200.css"; // Specify weight
import "@fontsource/league-spartan/100.css"; // Specify weight

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default App;
