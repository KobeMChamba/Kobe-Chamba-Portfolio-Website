import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      <div className={styles.skillCategory}>
        <h2>Programming Languages</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Java" />
          <SkillList src={checkMarkIcon} skill="C++" />
          <SkillList src={checkMarkIcon} skill="Python" />
          <SkillList src={checkMarkIcon} skill="Kotlin" />
          <SkillList src={checkMarkIcon} skill="Assembly" />
          <SkillList src={checkMarkIcon} skill="Bash" />
        </div>
      </div>
      <hr />

      <div className={styles.skillCategory}>
        <h2>Full Stack Development</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML" />
          <SkillList src={checkMarkIcon} skill="CSS" />
          <SkillList src={checkMarkIcon} skill="JavaScript" />
          <SkillList src={checkMarkIcon} skill="React" />
          <SkillList src={checkMarkIcon} skill="SQL" />
          <SkillList src={checkMarkIcon} skill="MongoDB" />
          <SkillList src={checkMarkIcon} skill="Node.js" />
        </div>
      </div>
      <hr />

      <div className={styles.skillCategory}>
        <h2>Machine Learning & Data Analysis</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Pytorch" />
          <SkillList src={checkMarkIcon} skill="TensorFlow" />
          <SkillList src={checkMarkIcon} skill="MATLAB" />
        </div>
      </div>
      <hr />

      <div className={styles.skillCategory}>
        <h2>Web Development</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="React.js" />
          <SkillList src={checkMarkIcon} skill="MaterialUI" />
          <SkillList src={checkMarkIcon} skill="NextJS" />
          <SkillList src={checkMarkIcon} skill="RESTful API" />
        </div>
      </div>
      <hr />

      <div className={styles.skillCategory}>
        <h2>Build and Release Automation</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="Jenkins" />
          <SkillList src={checkMarkIcon} skill="Docker" />
          <SkillList src={checkMarkIcon} skill="Git version control" />
          <SkillList src={checkMarkIcon} skill="Artifactory" />
        </div>
      </div>
      <hr />

      <div className={styles.skillCategory}>
        <h2>Cloud Computing & Database Management</h2>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="AWS" />
          <SkillList src={checkMarkIcon} skill="Firebase" />
          <SkillList src={checkMarkIcon} skill="Firestore" />
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Skills;
