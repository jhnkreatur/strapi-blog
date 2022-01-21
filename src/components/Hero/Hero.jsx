import React from "react";
import userImage from "../../images/user.png";
import heroStyles from "./hero.module.css";

const Hero = () => {
  return (
    <header className={heroStyles.hero}>
      <div className={heroStyles.hero__text}>
        <h1 className={heroStyles.title}>
          hi, i am Doziego, <br /> political scientist
        </h1>
        <p className={heroStyles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className={heroStyles.btn}>download resume</button>
      </div>

      <div className={heroStyles.hero__image}>
        <img src={userImage} alt="standing man" />
      </div>
    </header>
  );
};

export default Hero;
