import React from "react";
import "./styles.css";

import Profile from "./components/Profile";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

export default function App() {
  return (
    <div className="App">
      <Profile />
      <AboutMe />
      <Skills />
    </div>
  );
}
