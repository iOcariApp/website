import React from "react";
import style from "./home.scss";

import WithOverlay from "components/WithOverlay";
import Header from "components/Header";
import Features from "components/Features";
import DevCorner from "components/DevCorner";
import MobilePreview from "components/MobilePreview";
import VideoSection from "components/VideoSection";
import ProfilesUse from "components/ProfilesUse";
import CountriesVote from "components/CountriesVote";
import NextFeatures from "components/NextFeatures";
import CTABottom from "components/CTABottom";
import Footer from "components/Footer";

const Home = () => (
  <div className={style.main}>
    <WithOverlay>
      <Header />
    </WithOverlay>
    <Features />
    <DevCorner />
    <MobilePreview />
    <ProfilesUse />
    <CountriesVote />
    <NextFeatures />
    <WithOverlay>
      <CTABottom />
    </WithOverlay>
    <Footer />
  </div>
);

export default Home;
