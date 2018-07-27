import React from "react";
import style from "./about-us.scss";

import NavBar from "components/NavBar";
import TheTeam from "components/TheTeam";
import Contact from "components/Contact";
import Footer from "components/Footer";

const AboutUs = () => (
  <div className={style.main}>
    <header className={style.header}>
      <NavBar />
    </header>
    <TheTeam />
    <Contact />
    <Footer />
  </div>
);

export default AboutUs;
