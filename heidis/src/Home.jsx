import React from "react";
import Footer from "./Footer";
import About from "./About";
import Navbar from './Navbar'
import Projects from "./Projects";
import Contact from "./Contact";
const Home = () => {
  return (
    <><div class="home">
 <Navbar />
      <div className="header">
        <h1 className="name"> HEIDI LYU: </h1>{" "}
      <h1 className="slogan"> Unleashing Creativity</h1> <span className="span">through</span>
     <h1 className="slogan">   Technology</h1>
      </div>  </div>
      <About />
      <Projects />
      <Contact />
      <Footer /></>
  
  );
};
export default Home;
