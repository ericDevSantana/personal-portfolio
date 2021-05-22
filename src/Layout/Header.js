import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-navbar"]}>
      <div className={styles["header-logo"]}>
        <img src="/portfolioLogo.png" alt="My personal logo."></img>
      </div>
      <div className={styles["header-links"]}>
        <a href="/">home</a>
        <a href="/">my skills</a>
        <a href="/">projects</a>
        <a href="/">resume</a>
        <a href="/">contact me</a>
      </div>
    </div>
  );
};

export default Header;
