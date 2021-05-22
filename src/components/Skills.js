import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skills = [
    {
      id: 0,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
    {
      id: 1,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
    {
      id: 2,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
    {
      id: 3,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
    {
      id: 4,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
    {
      id: 5,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
    {
      id: 6,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
    {
      id: 7,
      name: "Javascript",
      url: "js.png",
      description: "this is my skill!",
    },
  ];

  return (
    <div className={styles.skills}>
      <h1>my skills</h1>
      <div className={styles["skills-list"]}>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className={styles["skills-item"]}>
              <img src={skill.url} alt="javascript's logo"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
