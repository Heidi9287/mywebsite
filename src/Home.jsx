import React, { useRef } from "react";
import Footer from "./Footer";
import About from "./About";
import Navbar from "./Navbar";
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
    <div>
      <div className="entireHome">
        <Navbar />
        <div class="home" ref={homeRef}>
          <div className="empty2"></div>
          <div className="intro">
           
            <div  className="Heidi">
               <img src="myPhoto.PNG" alt="HEIDI" className="heidiImage"></img>
            
            <div className="name"> 
            <p className="smallText1">Hi, my name is </p>
             Heidi Lyu
             </div>
            </div>
            <p className="smallText2">
              I am an artist turned Full Stack Programmer, a newcomer to the
              industry. <br></br>I aspire to specialize in creative front-end
              development.
            </p>
          </div>
          <div className="empty3">
            <div className="arrowAnimation">
              <div className="arrow-down" onClick={scrollDown1}></div>
            </div>
          </div>
          <div className="moreToCome">
          <div className="moreToComeInner">
            <h4>PHOTOGRAPHY</h4>
          <p className="hiddenText">not open yet</p>
          </div>
          <div className="moreToComeInner">
        <h4>PAINTING</h4> 
            <p className="hiddenText">not open yet</p>
          </div>
          </div>
          <div className="empty4"></div>
        </div>
      </div>
      <div ref={aboutRef} className="entireAbout">
        <About />
        <div className="arrowAnimation">
          <div className="arrow-up" onClick={scrollDown4}></div>
        </div>
          <div className="arrowAnimation2">
            <div className="arrow-down" onClick={scrollDown2}></div>
        </div>
      </div>
      <div ref={projectsRef} className="entireProject">
        <Projects />

        <div className="arrowAnimation">
          <div className="arrow-up" onClick={scrollDown1}></div>
        </div>
          <div className="arrowAnimation2">
            <div className="arrow-down" onClick={scrollDown3}></div>
        </div>
      </div>
      
      <div ref={contactRef} className="entireContact">
        <Contact />
        <div className="arrowAnimation">
          <div className="arrow-up" onClick={scrollDown4}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
