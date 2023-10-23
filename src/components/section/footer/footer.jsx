import React from "react";
import "./footer.css";
import Phone from "../images/call (1).png";
import location from "../images/pin (1).png";
import telegram from "../images/telegram.png";
import instagram from "../images/instagram.png";
import footlogo from "../images/LOGO.png";

function Footer() {
  return (
    <div className="footer-main" id="contact">
      <div className="footer-left">
        <img src={footlogo} alt="" className="foot-logo" />
      </div>

      <div className="footer-mid">
        <h1>Biz bilan bog'lanish uchun</h1>
        <span>+998-93-255-55-67</span>
      </div>

      <div className="footer-right">
        <h1>Ijtimoiy tarmoqlar</h1>
        <div className="alar">
          <a href="https://instagram.com/harvard_school_grand?igshid=MzRlODBiNWFlZA==">
            <img src={instagram} alt="" />
          </a>
          <a href="https://t.me/H_schoolonline">
            <img src={telegram} alt="" />
          </a>

          <a href="tel:+998932555567">
            <img src={Phone} alt="" />
          </a>
          <a href="https://maps.app.goo.gl/BYtktNWQrhLsPdS59">
            <img src={location} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
