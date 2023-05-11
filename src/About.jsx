import React from "react";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div className="entireAbout">
      {" "}
      <Navbar />
      <div className="about">
        <ul className="aboutContent">
          <p>EDUCATION</p>
          <li>Fullstack Academy - Web Development and Software Engineer</li>
          <li> New York University – M. A in Visual Art Administration</li>
          <li>
            Xi’an International Studies University – B. A in Visual
            Communication Design
          </li>

          <p>TECH STACKS</p>
   
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascsript</li>
            <li>Typescript</li>
    
            <li>React</li>
            <li>Redux</li>
            <li>Next.Js</li>
            <li>Adobe Creative Suite</li>
      
          <li>Node.js</li>
          <li>Express</li>
            <li>PostgreSQL</li>
            <li>Firebase</li>
            <p>  more about my professional expeirences can be found    <a href="https://www.linkedin.com/in/heidilyu/"> here</a></p>
        </ul>
        <p className="more">
        </p>
        <div className="empty3"></div>
        <div className="empty4"></div>
      </div>
    </div>
  );
};
export default About;
