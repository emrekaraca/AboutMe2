import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.logo} />
        <ul className={styles.nav}>
          <li>
            About Me
          </li>
          <li>
            My Projects
          </li>
          <li>
            Contact
          </li>
        </ul>
        <ul className={styles.link}>
          <li>
            <a href="https://github.com/wondasom">Github</a>
          </li>
          <li>
            <a href="https://www.behance.net/wondasom">Behance</a>
          </li>
          <li>
            <a className={styles.linkedIn} href="https://www.linkedin.com/in/wondasom/">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
