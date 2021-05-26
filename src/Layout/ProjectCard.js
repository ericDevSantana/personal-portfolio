import React from "react";

import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <a href="/" key={props.data.id} className={styles["projectCard-item"]}>
      <img
        className={styles["projectCard-item-img"]}
        src="project-bg.jpeg"
        alt="landing page"
      />
      <div className={styles["projectCard-item-description"]}>
        <h2>{props.data.name}</h2>
        <p>tag: {props.data.tag}</p>
        <p>this is a little description about this project. </p>
      </div>
    </a>
  );
};

export default ProjectCard;
