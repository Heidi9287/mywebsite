import React, { useState, useRef } from "react";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
const Home = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const scrollDown1 = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDown2 = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDown3 = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollDown4 = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div class="home" ref={homeRef}>
        <div className="header">
          <h1 className="name"> HEIDI LYU: </h1>{" "}
          <h1 className="slogan"> Unleashing Creativity</h1>{" "}
          <span className="span">through</span>
          <h1 className="slogan"> Technology</h1>
        </div>
        <div className="arrowAnimation">
          <div className="arrow-down" onClick={scrollDown1}></div>
        </div>
      </div>
      <div ref={aboutRef}>
        <About />{" "}
        <div className="arrowAnimation">
          {" "}
          <div className="arrow-down2" onClick={scrollDown2}></div>
        </div>
        <div ref={projectsRef}>
          <Projects />
          <div className="arrowAnimation">
            <div className="arrow-down3" onClick={scrollDown3}></div>
          </div>
        </div>
      </div>   
      <div ref={contactRef}>
        <Contact /> <div className="arrowAnimation"><div className="arrow-down4" onClick={scrollDown4}></div>{" "}
      </div>   </div>
      <Footer />
    </>
  );
};
export default Home;
