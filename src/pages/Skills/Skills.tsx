import styles from "./Skills.module.css";
import skillsData from "../../data/skills.json";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
      {skillsData.skills.map((group) => (
        <section key={group.category} className={styles.section}>
          <h2 className={styles.categoryTitle}>{group.category}</h2>
          <hr className={styles.divider} />

          <div className={styles.iconGrid}>
            {group.items.map((item) => (
              <div key={item.name} className={styles.skillItem}>
                <div className={styles.iconWrapper}>
                  <img src={item.icon_url} alt={item.name} title={item.name} />
                </div>
                <span className={styles.skillName}>{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
