import React from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        {/* <h2 className={styles.subTitle}>Front-end Developer</h2> */}
        <p className={styles.text}>
          In college, I majored International Studies - specifically
          International Relations. I liked what I learned and I was good at it.
          I was expected to continue my studies going to Master - and I didn't.
          I wanted to do something more practical and have more tangible skills.
          So I started to design. I learned editorial design, which led me to
          move onto web design. In the web design course I took, soon I realized
          that I feel much more comfortable with doing markup than actual
          design. That was the moment I made up my mind to become a front-end
          developer.
        </p>
        <div className={styles.img} />
        <button className={styles.button}>Contact Me</button>
      </div>
    </div>
  );
}
