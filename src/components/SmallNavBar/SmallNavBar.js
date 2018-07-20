import React, { Fragment } from "react";
import style from "./small-nav-bar.scss";

import { Link } from "react-router-dom";

import { routes } from "routes";

import getFullClass from "utils/getFullClass";

import Logo from "components/Logo";
import Button from "components/Button";

class SmallNavBar extends React.Component {
	state = { open: false };

	toggle = () => {
		this.setState(state => ({
			open: !state.open,
		}));
	};

	render() {
		const { open } = this.state;

		const hamburguerClass = getFullClass("hamburguer-icon", "-open", open);

		return (
			<Fragment>
				<nav className={`${style.main}`}>
					<div className={style.logo}>
						<Link to="/">
							<Logo color="secondary" />
						</Link>
					</div>
					<div className={style[hamburguerClass]} onClick={this.toggle}>
						<div />
						<div />
						<div />
					</div>
				</nav>
				{open && (
					<div className={style["collapsable-menu"]}>
						{routes.slice(1).map(route => (
							<Link key={`navbar-${route.label}`} to={route.path}>
								{route.label}
							</Link>
						))}
					</div>
				)}
			</Fragment>
		);
	}
}

export default SmallNavBar;
