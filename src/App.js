import React from "react";
import "./styles.css";


import Profile from "./components/Profile";
import Showcase from "./components/Showcase"
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import ContactMe from "./components/ContactMe"

export default function App() {
  return (

    <div className="App">
      <Nav />
      <Profile />
      <AboutMe />
      <Skills />
      <Showcase />
      <ContactMe />
    </div>

  );
}
