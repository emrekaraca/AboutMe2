import React from "react";
import styles from "./ReactLogo.module.css";

const ReactLogo = () => {
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.reactLogo}>
          <span class={styles.nucleo} />
        </span>
      </div>
    </div>
  );
};

export default ReactLogo;
