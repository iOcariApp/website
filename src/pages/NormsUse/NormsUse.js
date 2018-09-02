import React from "react";
import style from "./norms-use.scss";

import text from "./data";

import NavBar from "components/NavBar";
import LegalText from "components/LegalText";
import Footer from "components/Footer";

const NormsUse = () => (
  <div className={style.main}>
    <NavBar />
    <LegalText title="NORMAS DE USO" text={text} />
    <Footer />
  </div>
);

export default NormsUse;
