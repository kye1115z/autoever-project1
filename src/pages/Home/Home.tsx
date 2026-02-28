import AboutMe from "../AbooutMe/AboutMe";
import Career from "../Career/Career";
import Posts from "../Posts/Posts";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <section id="about" className={styles.section}>
        <AboutMe />
        <Career />
        <Skills />
      </section>
      <section id="project" className={styles.section}>
        <Projects />
      </section>
      <section id="blog" className={styles.section}>
        <Posts />
      </section>
      <section id="contacts" className={styles.section}>
        <h2>Contacts</h2>
        <p>연락처 정보를 여기에 추가하세요.</p>
      </section>
    </div>
  );
};

export default Home;
