import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div>
        <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />
        <div>
          <h2>김예은</h2>
          <p>Full-stack Developer</p>
        </div>
      </div>
      <p>사용자의 경험을 개선하는 개발자입니다.</p>
    </div>
  );
};

export default AboutMe;
