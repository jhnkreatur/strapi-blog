import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import footerStyles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.social}>
        <ul className={footerStyles.social__list}>
          <li className={footerStyles.icon}>
            <a href="#fb">
              <FaFacebook />
            </a>
          </li>
          <li className={footerStyles.icon}>
            <a href="#fb">
              <FaInstagram />
            </a>
          </li>
          <li className={footerStyles.icon}>
            <a href="#fb">
              <FaTwitter />
            </a>
          </li>
          <li className={footerStyles.icon}>
            <a href="#fb">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
      <p className={footerStyles.copyright}>
        Copyright ©2020 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
