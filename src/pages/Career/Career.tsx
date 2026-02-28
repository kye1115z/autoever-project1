import styles from "./Career.module.css";

const Career = () => {
  return (
    <div className={styles.careerContainer}>
      {/* 이 부분은 컴포넌트로 넘겨서 작업하자 (반복되는 내용이므로 ) */}
      <div className={styles.career}>
        <h2>Activity</h2>
        <div>
          <p>activity 1</p>
          <p>desc</p>
          <p>2026.01.01 - 2026.02.02</p>
        </div>
        <div>
          <p>activity 1</p>
          <p>desc</p>
          <p>2026.01.01 - 2026.02.02</p>
        </div>
        <div>
          <p>activity 1</p>
          <p>desc</p>
          <p>2026.01.01 - 2026.02.02</p>
        </div>
      </div>
      <div className={styles.career}>
        <h2>Internship</h2>
        <div>
          <p>activity 1</p>
          <p>desc</p>
          <p>2026.01.01 - 2026.02.02</p>
        </div>
        <div>
          <p>activity 1</p>
          <p>desc</p>
          <p>2026.01.01 - 2026.02.02</p>
        </div>
        <div>
          <p>activity 1</p>
          <p>desc</p>
          <p>2026.01.01 - 2026.02.02</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
