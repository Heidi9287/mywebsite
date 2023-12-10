import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">PROJECT</Link>
      <Link to="/about">CV/RESUME</Link>
      <Link to="/contact">CONTACT</Link>

      <div className="empty1"></div>
    </nav>
  );
};
export default Navbar;
