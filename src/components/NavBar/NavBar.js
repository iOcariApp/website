import React from "react";
import style from "./nav-bar.scss";

import { Link } from "react-router-dom";

import { routes } from "routes";
import Button from "components/Button";

const NavBar = () => (
	<nav className={style.main}>
		{routes.slice(1).map(route => <Link key={`navbar-${route.label}`} to={route.path}>{route.label}</Link>)}
		<Button style={{ marginLeft: 15 }}>ÚNETE</Button>
	</nav>
);

export default NavBar;
