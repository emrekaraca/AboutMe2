import React from "react";
import styled from 'styled-components'
// import styles from "../styles.css"


const Img = styled.div`
grid-column: 4/7;
grid-row: 1/5;
background-image: url("https://i.imgur.com/lvGFsuZ.png");
background-size: 70%;
background-repeat: no-repeat;
background-position: center;
`


export default function Profile() {
  return (
    <div className="profile">
      <div className="container bottomLine">
      <h1 className="title left">Hello ! I am Dasom Won</h1>
        <h2 className="subTitle left">Front-end Developer</h2>
        <p className="text left">
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
        <Img></Img>
        <button className="basicButton left-start">CV Download</button>
      </div>
    </div>
  );
}
