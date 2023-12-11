import React from "react";
import Header from "./Header";
const Contact = () => {
  return (
      <div className="contact">
        <Header />
        <div className="contactContent">
        <h2 className="contactPageTitle"> Let's connect
          </h2>
          <div className="contactBlock">
        <img src="contactLeft.png" alt="stay in touch" className="contactLeft"/>
          
          <div className="methods">
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
          </div>
      </div>

  );
};
export default Contact;
