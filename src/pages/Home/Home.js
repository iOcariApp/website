import React from "react";
import style from "./home.scss";

import WithOverlay from "components/WithOverlay";
import Header from "components/Header";
import Features from "components/Features";
import DevCorner from "components/DevCorner";
import MobilePreview from "components/MobilePreview";

const Home = () => (
  <div className={style.main}>
    <WithOverlay>
      <Header />
    </WithOverlay>
    <Features />
    <DevCorner />
    <MobilePreview />
  </div>
);

export default Home;
