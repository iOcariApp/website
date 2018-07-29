import React from "react";
import style from "./features.scss";

import glassGirl from "./glass-girl.png";

import { features } from "./data";

import FeatureCard from "components/FeatureCard";

const Features = () => (
  <div className={style.main}>
    <div id="que-puedes-hacer" className={style.anchor} />
    <h1 className={style.sectionTitle}>¿Qué puedes hacer con iOcari?</h1>
    <img
      className={`xl ${style.glassGirl}`}
      src={glassGirl}
      alt="Girl with tattoos and glasses"
    />
    <div className={style.cards}>
      {features.map((feature, index) => (
        <div key={`feature-${index}`} className={style.card}>
          <FeatureCard {...feature} />
        </div>
      ))}
    </div>
  </div>
);

export default Features;
