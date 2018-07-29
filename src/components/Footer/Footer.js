import React from "react";
import style from "./footer.scss";

import { Link } from "react-router-dom";

import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.png";

import Logo from "components/Logo";

const Footer = () => (
  <div className={style.main}>
    <div className={style.maxWidth}>
      <div className={style.social}>
        <a
          className={style.socialItem}
          href="https://bit.ly/2AkrDiJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook logo" />
        </a>
        <a
          className={style.socialItem}
          href="https://bit.ly/2NUOfs2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter logo" />
        </a>
        <a
          className={style.socialItem}
          href="https://bit.ly/2LL2mm9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram logo" />
        </a>
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
