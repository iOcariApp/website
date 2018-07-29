import React from "react";
import style from "./dev-corner.scss";

import Button from "components/Button";

const DevCorner = () => (
  <div className={style.main}>
    <h1 className={style.sectionTitle}>Construyendo una app muy legacy</h1>
    <p className={style.text}>
      iOcari está en crecimiento y estamos desarrollando el resto de esta
      historia. Entérate de todo lo que viene en el rincón del desarrollador
    </p>
    <a
      href="https://medium.com/@enzoferey"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className={style.button}>IR AL RINCÓN</Button>
    </a>
  </div>
);

export default DevCorner;
