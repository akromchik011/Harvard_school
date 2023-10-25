import React from "react";
import "./navbar.css";
import ImageIcon from "../images/globe (1).png";
import { Link } from "react-scroll";
import Logo from "../images/LOGO.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
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

        <div className="linklar">
          <Link
            className="scroll"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            About
          </Link>

          <Link
            className="scroll"
            to="location"
            spy={true}
            smooth={true}
            offset={-220}
            duration={1500}
          >
            Location
          </Link>
          <Link
            className="scroll"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1500}
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="buttons">
        <Link
          className="scroll"
          to="form"
          spy={true}
          smooth={true}
          offset={-150}
          duration={1500}
        >
          <button className="reg-btn"> Registration</button>
        </Link>
        <button className="btn">
          <img className="imagicon" src={ImageIcon} alt="" />
          <p> English</p>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
