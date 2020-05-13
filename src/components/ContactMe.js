import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Emoji = styled.span`
	font-size: 28px;
	padding: 0 7px;
	position: relative;
	bottom: 2px;
	letter-spacing: 4px;
`;

const ContactMe = () => {
	const [message, setMessage] = useState("");
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const [name, setName] = useState("Brie Larson");
	const [email, setEmail] = useState("captain@marvel.com");

	const handleNameChange = (event) => {
		setName(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<div className='contactMe' id='contactMe'>
			<div className='container'>
				<h1 className='title left'>
					Contact Me<Emoji>📬</Emoji>
				</h1>
				<h2 className='subTitle left'>
					I'll look forward to hearing from you!
				</h2>

                {/* helpful reference: https://blog.mailtrap.io/react-contact-form/ 
                https://www.youtube.com/watch?v=hPS7LUW7SlA */}
				<div className='inputContainer left-start'>
					<div className='inputName '>
						<label className='subTitle' for='name'>
							Name
						</label>
						<input
							type='name'
							name='name'
							id='name'
							value={name}
							onChange={handleNameChange}
						/>
					</div>
					<div className='inputEmail '>
						<label className='subTitle' for='email'>
							Email
						</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={handleEmailChange}
						/>
					</div>
				</div>
				<div className='messageBoxWrapper'>
					<textarea
						className='messageBox'
						placeholder='Leave me a message'
						onChange={handleMessageChange}
					/>
				</div>
				<button
					className='basicButton right-end'
					style={{ cursor: "pointer" }}
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default ContactMe;
