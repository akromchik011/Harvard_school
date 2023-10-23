import React from "react";
import "./navbar.css";
import ImageIcon from "./earth.png";
import { Link } from "react-scroll";
import Logo from "../images/LOGO.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Link
        className="logo"
        to="hero"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <img src={Logo} alt="" />
      </Link>

      <div className="links">
        <Link
          className="scroll"
          to="about"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
          about
        </Link>
        <Link
          className="scroll"
          to="location"
          spy={true}
          smooth={true}
          offset={-220}
          duration={1500}
        >
          location
        </Link>
        <Link
          className="scroll"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1500}
        >
          contact
        </Link>
      </div>

      <Link
        className="scroll"
        to="form"
        spy={true}
        smooth={true}
        offset={-150}
        duration={1500}
      >
        <button className="reg-btn"> registration</button>
      </Link>

      <button className="btn">
        <img className="imagicon" src={ImageIcon} alt="" />
        <p> English</p>
      </button>
    </nav>
  );
}

export default Navbar;
