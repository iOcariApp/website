import React, { Fragment } from "react";
import style from "./nav-bar.cssmodule.scss";

import SmallNavBar from "../SmallNavBar";
import LargeNavBar from "../LargeNavBar";

class NavBar extends React.PureComponent {
	state = { sticky: false };

	componentDidMount = () => {
		window.addEventListener("scroll", this.checkSticky);
	};

	componentWillUnmount = () => {
		window.removeEventListener("scroll", this.checkSticky);
	};

	checkSticky = () => {
		const { sticky } = this.state;
		const newSticky = window.pageYOffset > 80;
		if (newSticky !== sticky) this.setState({ sticky: newSticky });
	};

	render = () => {
		const { sticky } = this.state;

		return (
			<Fragment>
				<div className="sm">
					<SmallNavBar />
				</div>
				<div className="md">
					<LargeNavBar sticky={sticky} />
				</div>
			</Fragment>
		);
	};
}

export default NavBar;
