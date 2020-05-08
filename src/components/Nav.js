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
            Skills
          </li>
          <li>
            Contact
          </li>
        </ul>
        <ul className={styles.link}>
          <li>
            <a href="https://github.com/wondasom" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <a href="https://www.behance.net/wondasom" target="_blank" rel="noopener noreferrer" >Behance</a>
          </li>
          <li>
            <a className={styles.linkedIn} href="https://www.linkedin.com/in/wondasom/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
