import React from "react";
import styles from "./Nav.module.css";
import {Link} from "react-scroll";

const Nav = () => {
  return (
    <div>
      <nav className={styles.container}>
        <div className={styles.logo} />
        <ul className={styles.nav}>
          <Link
            className={styles.scrollLink}
            activeClass="active"
            to="aboutMe"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
              About Me
          </Link>
          <Link
            className={styles.scrollLink}
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
              Skills
          </Link>
          <Link
            className={styles.scrollLink}
            activeClass="active"
            to="contactMe"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
              Contact Me
          </Link>
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
