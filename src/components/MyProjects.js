import React, { useState } from "react";
import ProjectCard from "../Layout/ProjectCard";
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
        <a href="javascript:void(0)" name="all" onClick={onClickHandler}>
          all
        </a>
        <a href="javascript:void(0)" name="react.js" onClick={onClickHandler}>
          react.js
        </a>
        <a href="javascript:void(0)" name="javascript" onClick={onClickHandler}>
          javascript
        </a>
        <a href="javascript:void(0)" name="html" onClick={onClickHandler}>
          html
        </a>
        <a href="javascript:void(0)" name="css" onClick={onClickHandler}>
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
            return <ProjectCard data={project} />;
          })}
      </div>
    </div>
  );
};

export default MyProjects;
