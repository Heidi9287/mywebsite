import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const backgroundStyle = {
    backgroundColor: "rgb(255 255 255 / 75%)",
    backgroundSize: "cover",
    transition: "background-color 2s ease-in-out",
    display: "grid",
    gridTemplateRows: '20% 80%',
    gridTemplateAreas: ' "navbar" "aboutContent"',
    textAlign: "center",
    height:'100vh',
  };
  if (isScrolled) {
    backgroundStyle.backgroundColor = "#f3eee2";
  }

  return (
    <div style={backgroundStyle}>
      <Navbar />

      <div className="secondRow">
        <h1 className="AboutTitle"> Hi everyone! I'm Heidi.</h1>
        <div className="about">
          <p>
            I am an artist turned Full Stack Programmer, a newcomer to the
            industry.
            <p>
              I aspire to specialize in creative front-end development.
            </p>
          </p>
        </div>
        <div className="cv">
          <p className="cvTitle">I went to these schools:</p>
          <ul className="cvList">
            <li>Fullstack Academy - Web Development and Software Engineer</li>
            <li> New York University – M. A in Visual Art Administration</li>
            <li>
              Xi’an International Studies University – B. A in Visual
              Communication Design
            </li>
          </ul>
          <p  className="cvTitle">I work with these technologies:</p>
          <ul className="skills">
            <li>Javascsript</li>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Express</li>
            <li>React</li>
            <li>Redux</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Github</li>
            <li>Adobe Creative Suite</li>
          </ul>

          <p className="cvTitle">
            more about my professional expeirences can be found
            <a href="https://www.linkedin.com/in/heidilyu/"> here</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
