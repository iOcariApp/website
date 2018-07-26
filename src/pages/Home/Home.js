import React from "react";
import style from "./home.scss";

import WithOverlay from "components/WithOverlay";
import Header from "components/Header";
import Features from "components/Features";
import DevCorner from "components/DevCorner";
import MobilePreview from "components/MobilePreview";
import VideoSection from "components/VideoSection";
import Map from "components/Map";
import Placeholder from "components/Placeholder";
import CTABottom from "components/CTABottom";

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
    <Placeholder />
    <WithOverlay>
      <CTABottom />
    </WithOverlay>
  </div>
);

export default Home;
