import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./large-nav-bar.scss";

import { Link } from "react-router-dom";

import { routes } from "routes";

import Logo from "components/Logo";
import Button from "components/Button";

const LargeNavBar = ({ sticky }) => (
	<div className={style.fake}>
		<nav className={sticky ? style.sticky : style.main}>
			<div className={style.logo}>
				<Link to="/">
					<Logo color={sticky ? "secondary" : "white"} />
				</Link>
			</div>
			<div className={style.menu}>
				{routes.slice(1).map(route => (
					<Link key={`navbar-${route.label}`} to={route.path}>
						{route.label}
					</Link>
				))}
				<Button className={style.button}>ÚNETE</Button>
			</div>
		</nav>
	</div>
);

LargeNavBar.propTypes = {
	sticky: PropTypes.bool,
};

export default LargeNavBar;
