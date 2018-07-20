import React from "react";
import PropTypes from "prop-types";
import style from "./button.scss";

const Button = ({ children, className, ...rest }) => (
	<button className={`${className} ${style.main}`} {...rest}>{children}</button>
);

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
}

export default Button;