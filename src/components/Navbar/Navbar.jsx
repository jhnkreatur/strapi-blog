import React, { useState } from "react";
import navbarStyles from "./navbar.module.css";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.navbar__header}>
        <h1 className={navbarStyles.logo}>Francis</h1>
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div
        className={
          isMenuOpen
            ? ` ${navbarStyles.navbar__list__container} ${navbarStyles.show__container}`
            : `${navbarStyles.navbar__list__container} `
        }
      >
        <ul className={navbarStyles.navbar__list}>
          <li className={navbarStyles.navbar__item}>
            <Link to="/home" className={navbarStyles.navbar__link} href="#">
              Home
            </Link>
          </li>
          <li className={navbarStyles.navbar__item}>
            <Link to="/blog" className={navbarStyles.navbar__link} href="#">
              Blog
            </Link>
          </li>
          <li className={navbarStyles.navbar__item}>
            <Link to="/contact" className={navbarStyles.navbar__link} href="#">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
