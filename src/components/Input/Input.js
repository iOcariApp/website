import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./input.scss";

const Input = ({ label, isTextarea, className, ...rest }) => (
  <Fragment>
    {label && <label className={style.label}>{label}</label>}
    {isTextarea ? (
      <textarea
        className={`${className} ${style.main}`}
        cols="30"
        rows="10"
        {...rest}
      />
    ) : (
      <input className={`${className} ${style.main}`} {...rest} />
    )}
  </Fragment>
);

Input.propTypes = {
  label: PropTypes.string,
  isTextarea: PropTypes.bool,
  className: PropTypes.string,
};
Input.defaultProps = {
  isTextarea: false,
  className: "",
};

export default Input;
