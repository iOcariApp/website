import React from "react";
import style from "./header.scss";

import googlePlay from "./google-play.svg";
import appStore from "./app-store.svg";
import mobile from "./mobile.png";

import OverlayContext from "contexts/OverlayContext";

import { subscribeEmail } from "db";

import NavBar from "components/NavBar";
import InputWithButton from "components/InputWithButton";

const DiagonalHeader = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className={className}
  >
    <polygon fill="white" points="0,0 100,100 0,100" />
  </svg>
);

const Header = () => (
  <header className={style.main}>
    <NavBar />
    <div className={style.content}>
      <div className={style.cta}>
        <h1>Encuentra tu tropa y ¡A jugar!</h1>
        <h4>
          Partidas a tus juegos favoritos, con gente cerca de tí, en cualquier
          lugar del mundo.
        </h4>
        <p>Apúntate a la Beta y conviértete en pionero ¡plazas límitadas!</p>
        <div className={style.emailForm}>
          <OverlayContext.Consumer>
            {({ showOverlay }) => (
              <InputWithButton
                breakResponsive={true}
                type="email"
                placeholder="Correo"
                buttonText="¡A POR ELLO!"
                onClick={subscribeEmail}
                onResponse={showOverlay}
              />
            )}
          </OverlayContext.Consumer>
        </div>
        <p className={style.soon}>Próximamente en</p>
        <div className={style.stores}>
          <img
            className={style.store}
            src={googlePlay}
            alt="Google play icon"
          />
          <img className={style.store} src={appStore} alt="App store icon" />
        </div>
      </div>
      <img className={style.mobile} src={mobile} alt="iOcari App mobile" />
    </div>
    <DiagonalHeader className={style.diagonal} />
  </header>
);

export default Header;
