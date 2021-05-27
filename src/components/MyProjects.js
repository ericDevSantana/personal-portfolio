import React, { useState } from "react";
import ProjectCard from "../Layout/ProjectCard";
import styles from "./MyProjects.module.css";

const MyProjects = (props) => {
  const [filterSelected, setFilterSelected] = useState("all");
  const projects = [
    {
      id: 0,
      name: "real state website",
      href: "",
      url: "/pictures/project-estate.jpg",
      alt: "landing page",
      tag: "react.js",
      description: "this is a little description about this project.",
    },
    {
      id: 1,
      name: "react components",
      href: "",
      url: "/pictures/project-react.jpeg",
      alt: "landing page",
      tag: "javascript",
      description: "this is a little description about this project.",
    },
    {
      id: 2,
      name: "styling app",
      href: "",
      url: "/pictures/project-app.jpg",
      alt: "landing page",
      tag: "html",
      description: "this is a little description about this project.",
    },
    {
      id: 3,
      name: "js game",
      href: "",
      url: "/pictures/project-game.jpg",
      alt: "landing page",
      tag: "css",
      description: "this is a little description about this project.",
    },
    {
      id: 4,
      name: "project 5",
      href: "",
      url: "/pictures/project-bg.jpeg",
      alt: "landing page",
      tag: "react.js",
      description: "this is a little description about this project.",
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
