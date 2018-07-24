import React from "react";
import style from "./feature-card.scss";

const FeatureCard = ({ title, text, img }) => (
  <div className={style.main}>
    <div className={style.description}>
      <h4 className={style.title}>{title}</h4>
      <p className={style.text}>{text}</p>
    </div>
    <img className={style.img} src={img} alt={`${title} icon`} />
  </div>
);

export default FeatureCard;
