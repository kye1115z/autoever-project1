import styles from "./Header.module.css";

const Header = () => {
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
          About me
        </button>
        <button
          className={styles.navLink}
          onClick={() => handleNavClick("project")}
        >
          Project
        </button>
        <button
          className={styles.navLink}
          onClick={() => handleNavClick("blog")}
        >
          Blog
        </button>
        <button
          className={styles.navLink}
          onClick={() => handleNavClick("contacts")}
        >
          Contacts
        </button>
      </nav>
    </header>
  );
};

export default Header;
