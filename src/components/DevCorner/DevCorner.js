import React from "react";
import style from "./dev-corner.scss";

import Button from "../Button";

const DevCorner = () => (
	<div className={style.main}>
		<h1 className={style.sectionTitle}>Construyendo una app muy legacy</h1>
		<p className={style.text}>iOcari está en crecimiento y estamos desarrollando el resto de esta historia. Entérate de todo lo que viene en el rincón del desarrollador</p>
		<Button className={style.button}>IR AL RINCÓN</Button>
	</div>
);

export default DevCorner;