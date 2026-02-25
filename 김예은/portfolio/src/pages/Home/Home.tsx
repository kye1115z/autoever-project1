import AboutMe from "../AbooutMe/AboutMe";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <AboutMe />
    </div>
  );
};

export default Home;
