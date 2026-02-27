import styles from "./Header.module.css";

const Header = () => {
  // 여기는 지금 홈 내에서 스크롤 되는 애들로 처리되고 있지만
  // 나중에 라우팅 방식이 되어야 한다.
  // 홈 내에서 스크롤 되는 것들은 따로 floating을 띄울 예정.
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <h1>김예은의 포트폴리오</h1>
      <nav className={styles.nav}>
        <button
          className={styles.navLink}
          onClick={() => handleNavClick("about")}
        >
          Home
        </button>
        <button
          className={styles.navLink}
          onClick={() => handleNavClick("project")}
        >
          Projects
        </button>
        <button
          className={styles.navLink}
          onClick={() => handleNavClick("blog")}
        >
          Blog
        </button>
        <button
          className={styles.navLink}
          onClick={() => handleNavClick("guestbook")}
        >
          GuestBook
        </button>
      </nav>
    </header>
  );
};

export default Header;
