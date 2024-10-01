import React from "react";
import styles from "./ProjectsStyles.module.css";
import NUwebdev from "../../assets/NUWebdev.jpeg";
import HandTrackingLogo from "../../assets/AI HandTracking Logo.jpeg"
import ChessLogo from "../../assets/Chess Openings Calculator Logo.jpeg"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
        src={ChessLogo}
        link="https://github.com/KobeMChamba/Python-Projects/tree/main/Openings%20Calculator"
        h3={"Chess Openings Calculator"}
        p3={"A Python project utilizing the Chess.com API to analyze and gain insights into the openings of my chess games. By fetching game data, I was able to track patterns, evaluate the effectiveness of different opening strategies, and identify areas for improvement."}
      />
      
      <ProjectCard
        src={HandTrackingLogo}
        link="https://github.com/KobeMChamba/Python-Projects/tree/main/Hand%20Tracking%20Project"
        h3={"AI Hand Tracking"}
        p3={"I developed a hand-tracking app using machine learning libraries such as OpenCV and Mediapipe. This project marked my first experience with these libraries, allowing me to dive into computer vision."}
      />
        
      <ProjectCard
        src={NUwebdev}
        link="https://github.com/KobeMChamba/webdev-labs/tree/main"
        h3={"NU Webdev"}
        p3={"In my first web development class at Northwestern University, I learned the fundamentals of web development, including HTML, CSS, and JavaScript."}
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
