import React, { Fragment } from "react";
import style from "./email-form.scss";

import OverlayContext from "contexts/OverlayContext";

import Button from "components/Button";

const EmailForm = () => (
	<OverlayContext.Consumer>
		{({ showOverlay }) => (
			<Fragment>
				<input className={style.input} type="email" placeholder="Correo" />
				<Button
					style={{ padding: "12px 15px", borderRadius: "0 6px 6px 0" }}
					onClick={showOverlay}
				>
					¡A POR ELLO!
				</Button>
			</Fragment>
		)}
	</OverlayContext.Consumer>
);

export default EmailForm;
