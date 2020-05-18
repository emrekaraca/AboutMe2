import React from "react";
import styled from 'styled-components'

import ReactLogo from "./ReactLogo";

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

const Emoji = styled.span`
  font-size: 20px;
  padding: 0 7px;
  position: relative;
  bottom: 3px;
`;

const Tools = styled.ul`
  grid-column: 1/7;
  text-align: center;
  padding: 0 60px;
  margin: 40px 0;
`;


const ToolList = styled.li`
  display: inline-block;
  width: 120px;
  padding: 16px 16px;
  margin: 0 20px;
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
}`;


const ReactLogoContainer = styled.div`
  grid-column: 3/5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 34px 0 10px 0;
`

class Skills extends React.Component {
  state = {
    skills: skillsList
  };
  render() {
    return (
      <div className="Skills" id="skills">
        <div className="container">
          <h1 className="title alignCenter">
            <Emoji>
              🛠
            </Emoji>
            Skills
            <Emoji>
              🛠
            </Emoji>
          </h1>
          <h2 className="subTitle alignCenter">Tools I LOVE</h2>
          
          <ReactLogoContainer>
            <ReactLogo />
          </ReactLogoContainer>
          
          <Tools>
            {this.state.skills.map(item => (
              <ToolList>{item.skill}</ToolList>
            ))}
          </Tools>
        </div>
      </div>
    );
  }
}

export default Skills;
