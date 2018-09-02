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
        <div className={style.socialItem}>
          <OpenApp href="https://www.facebook.com/566205457090856" blank>
            <img src={facebook} alt="Facebook logo" />
          </OpenApp>
        </div>

        <div className={style.socialItem}>
          <OpenApp href="https://twitter.com/iOcariApp" blank>
            <img src={twitter} alt="Twitter logo" />
          </OpenApp>
        </div>

        <div className={style.socialItem}>
          <OpenApp href="https://www.instagram.com/iocari/" blank>
            <img src={instagram} alt="Instagram logo" />
          </OpenApp>
        </div>
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
        <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
        <Link to="/politica-de-privacidad">Política de privacidad</Link>
        <Link to="/normas-de-uso">Normas de Uso</Link>
        <Link to="/aviso-legal">Aviso legal</Link>
      </div>
    </div>
  </div>
);

export default Footer;
