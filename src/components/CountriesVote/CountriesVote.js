import React from "react";
import style from "./countries-vote.scss";

import Media from "react-media";

import variables from "components/variables.scss";

import CountriesCards from "components/CountriesCards";
import Map from "components/Map";

const CountriesVote = () => (
  <Media query={{ maxWidth: variables.mdAnchor }}>
    {matches => (matches ? <CountriesCards /> : <Map />)}
  </Media>
);

export default CountriesVote;
