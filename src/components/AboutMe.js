/* eslint-disable react/jsx-key */
import React, {useState} from "react"
import styled from 'styled-components'


const Button = styled.button`
grid-column-end: 7;
padding: 16px 20px;
border-radius: 4px;
font-family: "Roboto", sans-serif;
font-weight: 300;
font-size: 16px;
letter-spacing: 0.5px;
background: rgb(19, 46, 193);
background: linear-gradient(
  0deg,
  rgba(19, 46, 193, 1) 0%,
  rgba(31, 57, 202, 1) 100%
);
color: #fefefe;
outline: none;
`;

const Img = styled.div`
  grid-column: 1/4;
  grid-row: 1/5;
  background-image: url("https://i.imgur.com/2nwrUy3.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Emoji = styled.span`
  font-size: 28px;
  padding: 0 7px;
  position: relative;
  bottom: 3px;
  letter-spacing: 4px;
`;



const thingsList = [
  {
    emoji: "👩🏻‍💻",
    label: "developer",
    sentence: "I am a Front-end developer."
  },
  {
    emoji: "🇩🇪",
    label: "Germany",
    sentence: "I am based in Berlin, Germany."
  },
  {
    emoji: "👩🏻‍🎓",
    label: "graduate",
    sentence: "I am from non-tech background."
  },
  {
    emoji: "📚",
    label: "study",
    sentence: "I studied International Studies."
  },
  {
    emoji: "🇰🇷",
    label: "South-Korea",
    sentence: "I was born and raised in Seoul, South Korea."
  },
  {
    emoji: "🔠",
    label: "English",
    sentence: "I am fluent in English."
  },
  {
    emoji: "💡",
    label: "learn",
    sentence: "I am a fast learner."
  },
  {
    emoji: "✨",
    label: "active",
    sentence: "I am pro-active."
  },
  {
    emoji: "🐲",
    label: "dragon",
    sentence: "I have a dragon at home."
  }
];



export default function AboutMe() {
  const [things, setThings] = useState(thingsList)

  return (
    <div className="aboutMe" id="aboutMe">
      <div className="container">
        <h1 className="title right">About Me<Emoji>✔️</Emoji></h1>
        <h2 className="subTitle right">Everything is true. Execept one thing!</h2>
        <p className="text right">
        <ul >
            {things.map(item => (
            <li className="thingsList">{item.sentence}<span label={item.label}>{item.emoji} </span></li>))}
        </ul>
        </p>
        <Img></Img>
        <button className="basicButton right-end">Contact Me</button>
      </div>
    </div>
  );
}
