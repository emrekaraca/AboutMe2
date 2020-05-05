import React from "react";

import styles from "./Skills.module.css";
import ReactLogo from "./ReactLogo";
// import Emoji from "./Emoji";

const skillsList = [
  {
    skill: "React",
    level: "✨✨✨",
    label: "60%"
  },
  {
    skill: "JavaScript",
    level: "✨✨✨✨",
    label: "70%"
  },
  {
    skill: "HTML",
    level: "✨✨✨✨✨",
    label: "90%"
  },
  {
    skill: "CSS",
    level: "✨✨✨✨✨",
    label: "90%"
  }
];

class Skills extends React.Component {
  state = {
    skills: skillsList
  };
  render() {
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
            {this.state.skills.map(item => (
              <li className={styles.toolList}>{item.skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;
