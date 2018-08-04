import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./input.scss";

import WithLabel from "../WithLabel/WithLabel";

const Input = ({ label, isTextarea, className, ...rest }) => {
  const content = (
    <Fragment>
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

  if (label) {
    return <WithLabel label={label}>{content}</WithLabel>;
  }

  return content;
};

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
