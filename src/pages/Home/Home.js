import React from "react";
import style from "./home.scss";

import WithOverlay from "components/WithOverlay";
import Header from "components/Header";
import Features from "components/Features";
import DevCorner from "components/DevCorner";
import MobilePreview from "components/MobilePreview";
import VideoSection from "components/VideoSection";
import Map from "components/Map";

const Home = () => (
  <div className={style.main}>
    <WithOverlay>
      <Header />
    </WithOverlay>
    <Features />
    <DevCorner />
    <MobilePreview />
    <VideoSection />
    <Map />
  </div>
);

export default Home;
