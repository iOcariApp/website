import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./with-label.scss";

const WithLabel = ({ label, children }) => (
  <Fragment>
    <label className={style.label}>{label}</label>
    {children}
  </Fragment>
);

WithLabel.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
WithLabel.defaultProps = {
  label: "",
};

export default WithLabel;
