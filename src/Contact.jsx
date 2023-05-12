import React from "react";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <div className="entireContact">
      <Navbar />
      <div className="contact">
        <div className="contactFlexBox">
        <img src="contactLeft.png" alt="stay in touch" className="contactLeft"/>
          
          <div className="methods">
          <h1>Let's stay in touch 
          </h1>
            <p>LYU9287@GMAIL.COM</p>

            <p>
              <a href="https://github.com/Heidi9287">Github</a>
            </p>

            <p>
              <a href="https://www.linkedin.com/in/heidilyu/">Linkedin</a>
            </p>

            <p>
              <a href="https://www.instagram.com/byheidi_/">Instagram</a>
            </p>
          </div>
         
          <img src="contactRight.png" alt="stay in touch" className="contactRight" />
          </div>
       <div className="filler2"></div>
        <div className="empty3"></div>
        <div className="empty4"></div>
      </div>
    </div>
  );
};
export default Contact;
