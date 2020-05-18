import React from "react";
import "./styles.css";

import Profile from "./components/Profile";
import Showcase from "./components/Showcase";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ToggleBtn from "./components/ToggleBtn";

export default function App() {
	return (
		<div className='App'>
			<ToggleBtn />
			<Nav />
			<Profile />
			<AboutMe />
			<Skills />
			<Showcase />
			<ContactMe />
			<Footer />
		</div>
	);
}
