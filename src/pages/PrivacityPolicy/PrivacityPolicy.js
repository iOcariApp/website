import React from "react";
import style from "./privacity-policy.scss";

import text from "./data";

import NavBar from "components/NavBar";
import LegalText from "components/LegalText";
import Footer from "components/Footer";

const PrivacityPolicy = () => (
  <div className={style.main}>
    <NavBar />
    <LegalText title="POLÍTICA DE PRIVACIDAD" text={text} />
    <Footer />
  </div>
);

export default PrivacityPolicy;
