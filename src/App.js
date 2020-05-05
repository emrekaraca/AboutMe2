import React from "react";
import "./styles.css";

import Profile from "./components/Profile";
import Showcase from "./components/Showcase"
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <AboutMe />
      <Showcase />
      <Skills />
    </div>
  );
}
