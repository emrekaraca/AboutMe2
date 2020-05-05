import React, { useEffect, useState } from "react";
import styles from "./Showcase.module.css"
import { parseTimeStamp } from "./formatters"

const GITHUB_API = "https://api.github.com/users/wondasom/events"


const  Showcase = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(GITHUB_API);
        const data = await response.json();
        setData(data);
      }
      fetchData();
    }, []);

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>My Projects</h1>
        <h2 className={styles.subTitle}>Here are some of my ongoing projects</h2>
        <p className={styles.text}>
            You can see more on my Github or Behance
        </p>
        {/* <div className={styles.img} /> */}
        
        {/* <div className={styles.caseContainer}>
            {data.map(data=>(
                <p className={styles.repoDescription}>{data.repo.name}</p>
               
            ))}
        </div> */}

        <button className={styles.button}>View All Projects</button>
      </div>
    )
}

export default Showcase