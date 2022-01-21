import React, { useState } from "react";
import menuStyles from "./menu.module.css";

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div>
      <div
        className={
          ` ${menuStyles.hamburger} ` +
          (isMenuOpen ? ` ${menuStyles.open}` : "")
        }
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={menuStyles.line}></div>
        <div className={menuStyles.line}></div>
        <div className={menuStyles.line}></div>
      </div>
    </div>
  );
};

export default Menu;
