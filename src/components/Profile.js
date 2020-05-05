import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello ! I am Dasom Won</h1>
        <h2 className={styles.subTitle}>Front-end Developer</h2>
        <p className={styles.text}>
          Open and bright-minded, a front-end developer with a great passion for
          web development. Having boundless enthusiasm for learning new
          languages to communicate with machines and the people, self-taught for
          a while since 2018, now being intensely taught from code masters at
          ReDI School.
          {/* In college, I majored International Studies -
          specifically International Relations. I liked what I learned and I was
          good at it. I was expected to continue my studies going to Master -
          and I didn't. I wanted to do something more practical and have more
          tangible skills. So I started to design. I learned editorial design,
          which led me to move onto web design. In the web design course I took,
          soon I realized that I feel much more comfortable with doing markup
          than actual design. That was the moment I made up my mind to become a
          front-end developer. */}
        </p>
        <div className={styles.img} />
        <button className={styles.button}>Download CV</button>
      </div>
    </div>
  );
}
