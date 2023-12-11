import React from "react";
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projectPageTitle">Work</h1>
      <div className="codenames">
        <h1 className="projectTitle">
          <a href="https://www.youtube.com/watch?v=nMLCx3XAIkE" target="_blank" rel="noreferrer">01. CODENAMES</a>
        </h1>

        <img
          src="codeNames.jpeg"
          alt="codename game begining scene"
          className="projectImage"
        />

        <p className="secondTitle">Design and Devlopement </p>
        <p className="secondTitle">
          <a href="https://github.com/2208-Capstone-Team-2/codenames" target="_blank" rel="noreferrer">Github</a>
        </p>

        <p className="projectContent">
          Codenames is an accessible and stylish online version of the popular
          party card game.<br></br> On the frontend, React and Redux provided a
          platform for state management and Firebase enabled us to implement a
          real-time, interactive experience for the players. We utilized custom
          CSS and responsive design to allow for a mobile-friendly experience.
        </p>
      </div>
      <div className="graceshopper">
      <h1 className="projectTitle">
          <a href="https://app.screencastify.com/v2/watch/GZ0GiOIWu8ViJHbv4Wwf" target="_blank" rel="noreferrer">
           02. GRACE SHOPPER
          </a>
        </h1>
        <img
          src="graceShopper.jpeg"
          alt="home page of graceshopper project"
          className="projectImage"
        />
        <p className="secondTitle">Design and Devlopement </p>
        <p className="secondTitle">
          <a href="https://github.com/2208-GS-Team-4/Acme-Shopping" target="_blank" rel="noreferrer">Github</a>
        </p>
        <p className="projectContent">
          Our eCommerce website was built using JavaScript, React, Redux,
          PostgreSQL, and custom CSS in just two and a half weeks. Our
          technology stack provides a fast and responsive platform with features
          like real-time product updates and seamless checkout,
        </p>
      </div>
      <div className="cardGame">
      <h1 className="projectTitle">
          <a href="https://app.screencastify.com/v2/watch/ABuuMxbO9vK4G5mZkKJO" target="_blank" rel="noreferrer">
           03. Art Trivia
          </a>
        </h1>
        <img
          src="trivia.png"
          alt="home page of trivia project"
          className="projectImage"
        />
        <p className="secondTitle">Design and Devlopement </p>
        <p className="secondTitle">
          <a href="https://github.com/Heidi9287/artTrivia" target="_blank" rel="noreferrer">Github</a>
        </p>
        <p className="projectContent">
         The purose of this project is to practice Next.Js and Typescript. 
        </p>
        </div>
    </div>
  );
};
export default Projects;
