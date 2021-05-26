import React, { useState } from "react";
import styles from "./MyProjects.module.css";

const MyProjects = (props) => {
  const [filterSelected, setFilterSelected] = useState("all");
  const projects = [
    {
      id: 0,
      name: "project 1",
      tag: "react.js",
    },
    {
      id: 1,
      name: "project 2",
      tag: "html",
    },
    {
      id: 2,
      name: "project 3",
      tag: "html",
    },
    {
      id: 3,
      name: "project 4",
      tag: "javascript",
    },
    {
      id: 4,
      name: "project 5",
      tag: "javascript",
    },
    {
      id: 5,
      name: "project 6",
      tag: "javascript",
    },
    {
      id: 6,
      name: "project 7",
      tag: "javascript",
    },
  ];
  const onClickHandler = (event) => {
    setFilterSelected(event.target.name);
  };

  return (
    <div className={styles.myProjects}>
      <h1>my projects</h1>

      <div className={styles["myProjects-filter"]}>
        <a name="all" onClick={onClickHandler}>
          all
        </a>
        <a name="react.js" onClick={onClickHandler}>
          react.js
        </a>
        <a name="javascript" onClick={onClickHandler}>
          javascript
        </a>
        <a name="html" onClick={onClickHandler}>
          html
        </a>
        <a name="css" onClick={onClickHandler}>
          css
        </a>
      </div>

      <div className={styles["myProjects-list"]}>
        {projects
          .filter((project) => {
            if (filterSelected === "all") {
              return project.tag;
            }
            return project.tag === filterSelected;
          })
          .map((project) => {
            return (
              /* <Card/> */
              <div key={project.id} className={styles["myProjects-item"]}>
                <img
                  className={styles["myProjects-item-img"]}
                  src="project-bg.jpeg"
                />
                <div className={styles["myProjects-item-description"]}>
                  <h4>{project.name}</h4>
                  <p>this is my project description.</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyProjects;
