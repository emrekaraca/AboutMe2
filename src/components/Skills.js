import React from "react";

import styles from "./Skills.module.css";
import ReactLogo from "./ReactLogo";
// import Emoji from "./Emoji";

export default function Skills() {
  return (
    <div className="Skills">
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.emoji} role="img" aria-label="tool">
            🛠
          </span>
          Skills
          <span className={styles.emoji} role="img" aria-label="tool">
            🛠
          </span>
        </h1>
        <h2 className={styles.subTitle}>Tools I LOVE</h2>
        {/* <p className={styles.text} /> */}
        <div className={styles.reactLogo}>
          <ReactLogo />
        </div>
        <ul className={styles.tools}>
          <li> React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  );
}
