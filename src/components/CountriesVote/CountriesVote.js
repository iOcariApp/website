import React from "react";
import PropTypes from "prop-types";
import style from "./countries-vote.scss";

import Media from "react-media";

import { voteCountry } from "db";

import atlas from "components/Map/atlas.json";

import variables from "components/variables.scss";

import InputWithButton from "components/InputWithButton";
import CountriesCards from "components/CountriesCards";
import Map from "components/Map";

const allCountriesNames = atlas.objects.ne_110m_admin_0_countries.geometries.map(
  geometry => ({
    name: geometry.properties.NAME,
    iso: geometry.properties.ISO_A2,
  })
);

class CountriesVote extends React.Component {
  state = {
    voted: "",
    countries: this.props.countries,
    search: "",
  };

  onChange = search => {
    this.setState({ search });
  };

  onVote = votedCountry => {
    const { voted, countries } = this.state;

    if (votedCountry === "") return;

    const copy = countries;
    const sameCountryName = countryName => country =>
      country.name.toLowerCase() === countryName.toLowerCase();

    // check already exists
    const countryIndex = copy.findIndex(sameCountryName(votedCountry));
    if (countries[countryIndex] && countries[countryIndex].exists) return;

    // undo previous vote
    if (voted !== "") {
      const votedCountryIndex = copy.findIndex(sameCountryName(voted));
      if (votedCountryIndex >= 0) {
        copy[votedCountryIndex].votes = copy[votedCountryIndex].votes - 1;
        this.updateDatabase(copy[votedCountryIndex].iso, 0);
      }
    }

    // do new vote
    if (countryIndex >= 0) {
      copy[countryIndex].votes = copy[countryIndex].votes + 1;
      this.updateDatabase(copy[countryIndex].iso, 1);
    } else {
      const iso = allCountriesNames.find(sameCountryName(votedCountry)).iso;
      copy.push({
        name: votedCountry,
        votes: 1,
        exists: false,
        iso,
      });
      this.updateDatabase(iso, 1);
    }

    // finally update state
    this.setState({
      voted: votedCountry,
      countries: copy,
    });
  };

  updateDatabase = (iso, vote) => {
    voteCountry({ country: iso, vote });
  };

  getSuggestions = () =>
    allCountriesNames.map(country => ({
      value: country.name,
      label: country.name,
    }));

  render() {
    return (
      <Media query={{ maxWidth: variables.mdAnchor }}>
        {matches => (
          <div className={style.main}>
            <div className={style.maxWidth}>
              <h1 className={style.sectionTitle}>¿Dónde jugamos ahora?</h1>
              <p className={style.explanation}>
                {matches
                  ? "Si quieres que estemos disponibles en tu país, dale +1 búscandolo aquí:"
                  : "Si quieres que estemos disponibles en tu país, dale +1 en el mapa o búscalo aquí:"}
              </p>
              <div className={style.inputWithButton}>
                <InputWithButton
                  placeholder="País"
                  inputClass={style.input}
                  buttonText="+ 1"
                  buttonClass={style.inputButton}
                  onClick={this.onVote}
                  onChange={this.onChange}
                  options={this.getSuggestions()}
                />
              </div>
              {matches ? (
                <CountriesCards {...this.state} vote={this.onVote} />
              ) : (
                <Map countries={this.state.countries} vote={this.onVote} />
              )}
            </div>
          </div>
        )}
      </Media>
    );
  }
}

CountriesVote.propTypes = {
  countries: PropTypes.array,
};

CountriesVote.defaultProps = {
  countries: [
    {
      name: "Spain",
      votes: 10,
      exists: true,
      iso: "ES",
    },
    {
      name: "Mexico",
      votes: 3,
      exists: false,
      iso: "MX",
    },
    {
      name: "Chile",
      votes: 20,
      exists: false,
      iso: "CL",
    },
    {
      name: "Argentina",
      votes: 7,
      exists: false,
      iso: "AR",
    },
    {
      name: "Cuba",
      votes: 13,
      exists: false,
      iso: "CU",
    },
  ],
};

export default CountriesVote;
