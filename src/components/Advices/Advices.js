import React from "react";
import style from "./advices.scss";

import { advices } from "./data";

import Advice from "components/Advice";

const Advices = () => (
  <div className={style.main}>
    <div className={style.maxWidth}>
      <div className={style.advices}>
        {advices.map((advice, index) => (
          <div key={`advice-${index}`} className={style.advice}>
            <Advice {...advice} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Advices;
