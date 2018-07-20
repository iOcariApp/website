import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./with-overlay.scss";

import OverlayContext from "contexts/OverlayContext";

import icon from "./icon.svg";
import Button from "components/Button";

class WithOverlay extends React.Component {
	constructor(props) {
		super(props);

		this.state = { show: false };

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	show() {
		this.setState({ show: true });
	}

	hide() {
		this.setState({ show: false });
	}

	render() {
		const { show } = this.state;
		const { children } = this.props;

		return (
			<Fragment>
				{show && (
					<div className={style.main}>
						<img className={style.icon} src={icon} alt="Computer icon with logo iOcari"/>
						<span>¡Información recibida!</span>
						<p>
							Espera el santo y seña muy pronto así que atento a nuestras
							comunicaciones por redes sociales y e-mail.
						</p>
						<Button className={style.button} onClick={this.hide}>¡VALE!</Button>
					</div>
				)}
				<OverlayContext.Provider value={{ showOverlay: this.show, hideOverlay: this.hide }}>
				{children}
				</OverlayContext.Provider>
			</Fragment>
		);
	}
}

WithOverlay.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export default WithOverlay;
