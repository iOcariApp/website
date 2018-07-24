import React from "react";
import style from "./map.scss";

import InputWithButton from "../InputWithButton";

const Map = () => (
  <div className={style.main}>
    <h1 className={style.sectionTitle}>¿Dónde jugamos ahora?</h1>
    <p className={style.explanation}>
      Si quieres que estemos disponibles en tu país, dale +1 búscandolo aquí:
    </p>
    <div className={style.inputWithButton}>
      <InputWithButton
        placeholder="País"
        inputClass={style.input}
        buttonText="+ 1"
        buttonClass={style.inputButton}
        onClick={value => console.log("+1 on country", value)}
      />
    </div>
  </div>
);

export default Map;
