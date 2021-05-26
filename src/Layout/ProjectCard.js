import React from "react";

import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <a
      href={props.data.href}
      key={props.data.id}
      className={styles["projectCard-item"]}
    >
      <img
        className={styles["projectCard-item-img"]}
        src={props.data.url}
        alt={props.data.alt}
      />
      <div className={styles["projectCard-item-description"]}>
        <h2>{props.data.name}</h2>
        <p>tag: {props.data.tag}</p>
        <p>{props.data.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
