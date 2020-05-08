import React, { useEffect, useState } from "react";
import GithubFeed from "./GithubFeed";
import styled from 'styled-components'

const Emoji = styled.span`
  font-size: 26px;
  padding: 0 7px;
  position: relative;
  bottom: 1px;
`;

const  Showcase = () => {

    return (
      <div className="container bottomLine">
        <h1 className="title left">
          My Projects<Emoji>👩🏻‍💻</Emoji></h1>
        <h2 className="subTitle left">Here are some of my ongoing projects</h2>
        {/* <p className="text left">
            You can see more on my Github or Behance
        </p> */}
        <GithubFeed />

        <a className="basicButton left-start"  href="https://github.com/wondasom?tab=repositories" target="_blank" rel="noopener noreferrer">View All</a>
      </div>
    )
}

export default Showcase