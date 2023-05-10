import React from "react";
import Navbar from "./Navbar";
const About = () => {

  

  return (
    <><Navbar />
        <div className="about">
        <div className="empty1"></div>
        <div className="empty2"></div>
          <ul className="cvList">
          <p className="cvTitle">I went to these schools:</p>
            <li>Fullstack Academy - Web Development and Software Engineer</li>
            <li> New York University – M. A in Visual Art Administration</li>
            <li>
              Xi’an International Studies University – B. A in Visual
              Communication Design
            </li>
          <p className="cvTitle">I work with these technologies:</p>
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
            <p className="cvTitle">
            more about my professional expeirences can be found
            <a href="https://www.linkedin.com/in/heidilyu/"> here</a>
          </p>
          </ul>
          <div className="image"></div>
          <div className="empty4"></div>
        </div>
      
    </>
  );
};
export default About;
