import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
   
      <nav className="navbar">
        
         <div className="firstItem">
          <Link to="/">HEIDI LYU</Link>
          </div>
          <div className="innerBar">
         
          <Link to="/about">CV/RESUME</Link>
         
         
          <Link to="/projects">PROJECT</Link>
       
        
          <Link to="/contact">CONTACT</Link>
      </div>
  
      </nav>
  );
};
export default Navbar;
