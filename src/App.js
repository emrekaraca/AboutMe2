import React from "react";
import "./styles.css";

import Profile from "./components/Profile";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <AboutMe />
      <Skills />
    </div>
  );
}
