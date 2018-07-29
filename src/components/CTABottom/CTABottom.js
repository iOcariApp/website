import React from "react";
import style from "./cta-bottom.scss";

import OverlayContext from "contexts/OverlayContext";

import InputWithButton from "components/InputWithButton";

const CTABottom = () => (
  <div className={style.main}>
    <div id="cta-bottom" className={style.anchor} />
    <div className={style.content}>
      <h1 className={style.sectionTitle}>
        ¿Estás listo? Únete a la Beta ahora
      </h1>
      <p className={style.text}>
        Al subscribirte te unirás a la lista de espera para unirte al Beta de
        iOcari. No te espamearemos, es más no tenemos Newsletter así que ¡sin
        preocuparse!<br />
        <br />En cuanto tengamos listo tu acceso te enviaremos un correo.<br />
        <b>¡Mantén abiertas las comunicaciones!</b>
      </p>
      <div className={style.emailForm}>
        <OverlayContext.Consumer>
          {({ showOverlay }) => (
            <InputWithButton
              breakResponsive={true}
              type="email"
              placeholder="Correo"
              inputClass={style.input}
              buttonText="¡A POR ELLO!"
              buttonClass={style.inputButton}
              onClick={showOverlay}
            />
          )}
        </OverlayContext.Consumer>
      </div>
    </div>
  </div>
);

export default CTABottom;
