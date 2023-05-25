import React from "react";
import Navbar from "./Navbar";
const Projects = () => {
  return (
    <div className="entireProject">
      <Navbar />
      <div className="projects">
        <div className="projectFlexBox">
        <div>
      
            <h1 className="projectTitle">
              <a href="https://codenames-0nt7.onrender.com/">CODENAMES</a>
            </h1>
            <p className="secondTitle">Design and Devlopement </p>
            <p className="secondTitle">
              <a href="https://github.com/2208-Capstone-Team-2/codenames">
                Github
              </a>
            </p>
         
          <p className="projectContent">
            Codenames is an accessible and stylish online version of the popular
            party card game.<br></br> On
            the frontend, React and Redux provided a platform for state
            management and Firebase enabled us to implement a real-time,
            interactive experience for the players. We utilized custom
            CSS and responsive design to allow for a mobile-friendly experience.
          </p>
        </div>
        <div >
            <h1 className="projectTitle">
              <a href="https://github.com/2208-GS-Team-4/Acme-Shopping">
                GRACE SHOPPER
              </a>
            </h1>
            <p className="secondTitle">Design and Devlopement </p>
            <p className="secondTitle">
              <a href="https://github.com/2208-GS-Team-4/Acme-Shopping">
                Github
              </a>
            </p>
          <p
           className="projectContent"
          >
            Our eCommerce website was built using JavaScript, React, Redux,
            PostgreSQL, and custom CSS in just two and a half weeks. Our
            technology stack provides a fast and responsive platform with
            features like real-time product updates and seamless checkout,
          </p>
        </div>    <p className="moreProject">Hire me, so I can work more...</p></div>
        <div className="filler"></div>
        <div className="empty3"></div>
        <div className="empty4"></div>
      </div>
    
    </div>
  );
};
export default Projects;
