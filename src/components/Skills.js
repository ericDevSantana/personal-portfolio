import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  const skills = [
    {
      id: 0,
      name: "Javascript",
      url: "/pictures/js.png",
      alt: "this is my skill!",
    },
    {
      id: 1,
      name: "Html",
      url: "/pictures/html.jpg",
      alt: "this is my skill!",
    },
    {
      id: 2,
      name: "CSS",
      url: "/pictures/css.png",
      alt: "this is my skill!",
    },
    {
      id: 3,
      name: "React",
      url: "/pictures/react.png",
      alt: "this is my skill!",
    },
    {
      id: 4,
      name: "MongoDB",
      url: "/pictures/mdb.png",
      alt: "this is my skill!",
    },
    {
      id: 5,
      name: "NodeJs",
      url: "/pictures/node.jpg",
      alt: "this is my skill!",
    },
    {
      id: 6,
      name: "C++",
      url: "/pictures/cplusplus.png",
      alt: "this is my skill!",
    },
    {
      id: 7,
      name: "Python",
      url: "/pictures/python.png",
      alt: "this is my skill!",
    },
  ];

  return (
    <div className={styles.skills}>
      <h1>my skills</h1>
      <div className={styles["skills-list"]}>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className={styles["skills-item"]}>
              <img src={skill.url} alt={skill.alt}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
