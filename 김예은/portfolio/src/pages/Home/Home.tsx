import AboutMe from "../AbooutMe/AboutMe";
import Career from "../Career/Career";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <AboutMe />
      <Career />
    </div>
  );
};

export default Home;
