import CareerContent from "../../components/Career/CareerContent";
import styles from "./Career.module.css";

const Career = () => {
  return (
    <div className={styles.careerContainer}>
      <div className={styles.career}>
        <p className="section-title">Activity</p>
        <CareerContent title="교육"></CareerContent>
      </div>
    </div>
  );
};

export default Career;
