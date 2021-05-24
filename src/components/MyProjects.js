import React from "react";
import styles from "./MyProjects.module.css";

const MyProjects = (props) => {
  const onClickHandler = (event) => {
    console.log(event.target.name);
    // Use the a tag name to filter all the projects
  };

  return (
    <div className={styles.myProjects}>
      <h1>my projects</h1>
      <div className={styles["myProjects-list"]}>
        <div className={styles["myProjects-filter"]}>
          <a name="all" onClick={onClickHandler}>
            all
          </a>
          <a href="/">react.js</a>
          <a href="/">javascript</a>
          <a href="/">html</a>
          <a href="/">css</a>
        </div>
      </div>
      <div className={styles["myProjects-list"]}>
        <div className={styles["myProjects-item"]}>
          <h3>Project 1</h3>
        </div>
        <div className={styles["myProjects-item"]}>
          <h3>Project 2</h3>
        </div>
        <div className={styles["myProjects-item"]}>
          <h3>Project 3</h3>
        </div>
        <div className={styles["myProjects-item"]}>
          <h3>Project 4</h3>
        </div>
        <div className={styles["myProjects-item"]}>
          <h3>Project 5</h3>
        </div>
        <div className={styles["myProjects-item"]}>
          <h3>Project 6</h3>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
