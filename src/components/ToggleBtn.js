import React from "react";
import styled from "styled-components";

const Button = styled.input.attrs({
	type: "checkbox"
})`
	-webkit-appearance: none;
	height: 30px;
	width: 50px;
	background-image: linear-gradient(-45deg, #d31027, #ea384d);
	border-radius: 30px;
	outline: none;
	position: relative;
	border: 5px solid rgba(255, 255, 255, 0.5);
	box-sizing: content-box;
	position: fixed;
	right: 30px;

	&:checked {
		background-image: linear-gradient(-45deg, #1f39ca, #1f38ca);
	}
	&:before {
		position: absolute;
		content: "";
		height: 14px;
		width: 14px;
		border: 3px solid white;
		border-radius: 50%;
		top: 4.5px;
		left: 5px;
		transition: 0.3s;
	}
	&:checked:before {
		width: 0;
		left: 34px;
		border-radius: 5px;
	}
`;

const ToggleBtn = () => {
	return <Button></Button>;
};

export default ToggleBtn;
