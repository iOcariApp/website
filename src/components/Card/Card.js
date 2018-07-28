import React from "react";
import PropTypes from "prop-types";
import style from "./card.scss";

const Card = ({ className, children }) => (
  <div className={`${style.main} ${className}`}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Card;
