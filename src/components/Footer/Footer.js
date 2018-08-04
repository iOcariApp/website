import React from "react";
import style from "./footer.scss";

import { Link } from "react-router-dom";
import OpenApp from "react-open-app";

import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.png";

import Logo from "components/Logo";

const Footer = () => (
  <div className={style.main}>
    <div className={style.maxWidth}>
      <div className={style.social}>
        <OpenApp href="https://www.facebook.com/566205457090856" blank>
          <div className={style.socialItem}>
            <img src={facebook} alt="Facebook logo" />
          </div>
        </OpenApp>
        <OpenApp href="https://twitter.com/iOcariApp" blank>
          <div className={style.socialItem}>
            <img src={twitter} alt="Twitter logo" />
          </div>
        </OpenApp>
        <OpenApp href="https://www.instagram.com/iocari/" blank>
          <div className={style.socialItem}>
            <img src={instagram} alt="Instagram logo" />
          </div>
        </OpenApp>
      </div>
      <a
        href="mailto:contacto@iocariboardgames.com"
        target="_top"
        className={style.email}
      >
        contacto@iocariboardgames.com
      </a>
      <a
        className={style.blueCorp}
        href="http://www.thebluecorp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by: The Blue Corp
      </a>
      <div className={style.logo}>
        <Logo color="footer" />
      </div>
      <div className={style.legals}>
        <p className={style.copyright}>Copyright&copy; 2018</p>
        <Link to="/">Términos y condiciones</Link>
        <Link to="/">Política de privacidad</Link>
        <Link to="/">Política de cookies</Link>
      </div>
    </div>
  </div>
);

export default Footer;
