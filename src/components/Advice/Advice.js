import React from "react";
import PropTypes from "prop-types";
import style from "./advice.scss";

const Advice = ({ icon, title, content }) => (
  <div className={style.main}>
    <h1 className={style.title}>
      <img className={`lg ${style.icon}`} src={icon} />
      {title}
    </h1>
    <div className={style.content}>{content}</div>
  </div>
);

Advice.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.node,
};

export default Advice;
