import React from "react";
import PropTypes from "prop-types";
import style from "./button.scss";

const Button = ({ children, styleButton, ...rest }) => (
	<button className={`${styleButton} ${style.main}`} {...rest}>{children}</button>
);

Button.propTypes = {
	styleButton: PropTypes.string,
	children: PropTypes.string,
}

export default Button;