import React from "react";
import PropTypes from "prop-types";
import style from "./button.scss";

const Button = ({ children, ...rest }) => (
	<button className={style.main} {...rest}>{children}</button>
);

Button.propTypes = {
	children: PropTypes.string,
}

export default Button;