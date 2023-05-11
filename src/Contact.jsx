import React from "react";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <div className="entireContact">
      <Navbar />
      <div className="contact">
        <img src="contact.jpg" alt="stay in touch"/>
        <div className="contactContent">
          <h1 className="stay">Let's stay</h1>{" "}
          <h1 className="inTouch">
            in touch
          </h1>
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
        </div>{" "}
      </div>
    </div>
  );
};
export default Contact;
