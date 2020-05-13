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


const Emoji = styled.span`
  font-size: 30px;
  padding: 0 7px;
  position: relative;
  bottom: -2px;
  letter-spacing: 4px;
`;




export default function Profile() {
  return (
    <div className="profile">
      <div className="container bottomLine">
      <h1 className="title left">Hello ! I am Dasom Won<Emoji>🇰🇷🇩🇪</Emoji></h1>
        <h2 className="subTitle left">Front-end Developer</h2>
        <p className="text left">
          Open and bright-minded, a front-end developer with a great passion for
          web development. Having boundless enthusiasm for learning new
          languages to communicate with machines and the people, self-taught for
          a while since 2018, now being intensely taught from code masters at
          ReDI School. <br/>Made in Seoul, currently based in Berlin.
        </p>
        <Img></Img>
        <button className="basicButton left-start">CV Download</button>
      </div>
    </div>
  );
}
