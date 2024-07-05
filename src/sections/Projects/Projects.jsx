import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/KobeMChamba/webdev-labs/tree/main"
          h3={"Webdev"}
          p3={"First foray into Web development at Northwestern"}
        />
        {/* <ProjectCard
          src={viberr}
          link="https://github.com/KobeMChamba/webdev-labs/tree/main"
          h3={"Webdev"}
          p3={"First foray into Web development at Northwestern"}
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/KobeMChamba/webdev-labs/tree/main"
          h3={"Webdev"}
          p3={"First foray into Web development at Northwestern"}
        /> */}
      </div>
    </section>
  );
}

export default Projects;
