import React, { Fragment } from "react";
import style from "./email-form.scss";

import OverlayContext from "contexts/OverlayContext";

import Button from "components/Button";

const EmailForm = () => (
  <OverlayContext.Consumer>
    {({ showOverlay }) => (
      <div className={style.main}>
        <input className={style.input} type="email" placeholder="Correo" />
        <Button className={style.button} onClick={showOverlay}>
          ¡A POR ELLO!
        </Button>
      </div>
    )}
  </OverlayContext.Consumer>
);

export default EmailForm;
