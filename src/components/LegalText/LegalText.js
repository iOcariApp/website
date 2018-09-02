import React from "react";
import style from "./legal-text.scss";

const LegalText = ({ title, text }) => (
  <div className={style.main}>
    <div className={style.maxWidth}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.content}>{text}</div>
    </div>
  </div>
);

export default LegalText;
