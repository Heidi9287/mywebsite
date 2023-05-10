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
          <div className="empty1"></div>
          <div className="empty2"></div>
          <div className="intro">
            <p className="smallText1">Hi, my name is </p>
            <h1 className="name"> Heidi Lyu</h1>
            <p className="smallText2">
              {" "}
              I am an artist turned Full Stack Programmer, a newcomer to the
              industry. I aspire to specialize in creative front-end
              development.
            </p>
          </div>
          <div className="empty3">
            <div className="arrowAnimation">
              <div className="arrow-down" onClick={scrollDown1}></div>
            </div>
          </div>
          <div className="image"></div>
          <div className="empty4"></div>
          {/* <h1 className="slogan"> Unleashing Creativity</h1>{" "} */}
          {/* <span className="span">through</span>
          <h1 className="slogan"> Technology</h1> */}
        </div>
      </div>
      <div ref={aboutRef} className="entireAbout">
        <About />
        <div className="empty3">
          <div className="arrowAnimation">
            <div className="arrow-down2" onClick={scrollDown2}></div>
          </div>
        </div>
        <div ref={projectsRef}>
          <Projects />

          <div className="arrowAnimation">
            <div className="arrow-down3" onClick={scrollDown3}></div>
          </div>
        </div>
      </div>
      <div ref={contactRef}>
        <Contact />{" "}
        <div className="arrowAnimation">
          <div className="arrow-down4" onClick={scrollDown4}></div>{" "}
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
