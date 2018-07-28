import React from "react";
import style from "./advices.scss";

import NavBar from "components/NavBar";
import Main from "components/Advices";
import Footer from "components/Footer";

const Advices = () => (
  <div className={style.main}>
    <NavBar />
    <Main />
    <Footer />
  </div>
);

export default Advices;
