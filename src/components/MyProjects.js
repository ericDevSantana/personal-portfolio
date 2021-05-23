import React from "react";
import styles from "./MyProjects.module.css";

const MyProjects = (props) => {
  return (
    <div className={styles.myProjects}>
      <h1>my projects</h1>
      <div className={styles["myProjects-list"]}>
        <div className={styles["myProjects-item"]}>
          <h3>Project 1</h3>
        </div>
        <div className={styles["myProjects-item"]}>
          <h3>Project 1</h3>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
