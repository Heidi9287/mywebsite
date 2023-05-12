import React from "react";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div className="entireAbout">
      {" "}
      <Navbar />
      <div className="about">
        <ul className="aboutContent">
          <p style={{fontWeight:'500',fontSize:'30px',margin:'0 0 1% 0'}}>EDUCATION</p>
          <div className="schools">
          <li>Fullstack Academy - Web Development and Software Engineer</li>
          <li> New York University – M. A in Visual Art Administration</li>
          <li>
            Xi’an International Studies University – B. A in Visual
            Communication Design
          </li>
          </div>
          <p style={{fontWeight:'500',fontSize:'30px',margin:'2% 0'}}>TECH STACKS</p>
          <div className="breakUpFlexBox">
          <div className="breakUp">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascsript</li>
          <li>Typescript</li>
          </div>
          <div className="breakUp">    <li>React</li>
          <li>Redux</li>
          <li>Next.Js</li>
          <li>Adobe Creative Suite</li></div>
      
<div className="breakUp"> <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Firebase</li></div>
          </div>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "400px",
              color: "rgb(165, 70, 70)",
            }}
          >
            {" "}
            more about my professional expeirences can be found{" "}
            <a
              href="https://www.linkedin.com/in/heidilyu/"
              style={{ color: "rgb(165, 70, 70)" }}
            >
              {" "}
              here
            </a>
          </p>
        </ul>
        <p className="more"></p>
        <div className="empty3"></div>
        <div className="empty4"></div>
      </div>
    </div>
  );
};
export default About;
