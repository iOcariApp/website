import React from "react";
import style from "./feature-card.scss";

import Card from "components/Card";

const FeatureCard = ({ title, text, img }) => (
  <Card>
    <div className={style.description}>
      <h4 className={style.title}>{title}</h4>
      <p className={style.text}>{text}</p>
    </div>
    <img className={style.img} src={img} alt={`${title} icon`} />
  </Card>
);

export default FeatureCard;
