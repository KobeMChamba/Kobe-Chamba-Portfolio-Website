import React from "react";
import styles from "./ProjectsStyles.module.css";
import NUwebdev from "../../assets/NUWebdev.jpeg"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={NUwebdev}
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
