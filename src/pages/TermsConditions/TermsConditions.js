import React from "react";
import style from "./terms-conditions.scss";

import text from "./data";

import NavBar from "components/NavBar";
import LegalText from "components/LegalText";
import Footer from "components/Footer";

const TermsConditions = () => (
  <div className={style.main}>
    <NavBar />
    <LegalText title="TÉRMINOS Y CONDICIONES" text={text} />
    <Footer />
  </div>
);

export default TermsConditions;
