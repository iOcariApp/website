import React from "react";
import style from "./logo.scss";

import logo from "./logo.svg";

const Logo = () => (
	<img className={style.main} src={logo} alt="iOcari logo" />
);

export default Logo;