import React from "react";
import Header from "./Header";
const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="aboutContent">
        <h1 className="cvPageTitle">About</h1>
        <div className="education">
          <h2>EDUCATION</h2>
          <li>Fullstack Academy - Web Development and Software Engineer</li>
          <li> New York University – M. A in Visual Art Administration</li>
          <li>
            Xi’an International Studies University – B. A in Visual
            Communication Design
          </li>
        </div>
        <div className="techStack">
          <h2>TECH STACKS</h2>
          <ul className="techList">
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
          <li>Firebase</li></ul>
        </div>
        <div className="aboutFooter">
          more about my professional expeirences can be found{" "}
          <a
            href="https://www.linkedin.com/in/heidilyu/"
            style={{ color: "rgb(165, 70, 70)" }}
          >
            {" "}
            here
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
