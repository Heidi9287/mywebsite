import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
   
      <nav className="navbar">
        <ul className="navBarList">
          <li>
          <Link to="/">HOME</Link>
          </li>
          <li>
          <Link to="/about">CV/RESUME</Link>
          </li>
          <li>
          <Link to="/projects">PROJECT</Link>
          </li>
          <li>
          <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
  );
};
export default Navbar;
