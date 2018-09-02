import React from "react";
import style from "./legal-notice.scss";

import text from "./data";

import NavBar from "components/NavBar";
import LegalText from "components/LegalText";
import Footer from "components/Footer";

const LegalNotice = () => (
  <div className={style.main}>
    <NavBar />
    <LegalText title="AVISO LEGAL" text={text} />
    <Footer />
  </div>
);

export default LegalNotice;
