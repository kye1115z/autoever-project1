import AboutMe from "../AbooutMe/AboutMe";
import Career from "../Career/Career";
import Posts from "../Posts/Posts";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <AboutMe />
      <Career />
      <Posts />
    </div>
  );
};

export default Home;
