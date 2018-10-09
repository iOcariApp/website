import React from "react";
import PropTypes from "prop-types";
import style from "./countries-vote.scss";

import Media from "react-media";

import { voteCountry, getCountriesVotes } from "db";

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

const getStateFromDatabaseCountries = databaseData =>
  databaseData.map(country => ({
    name: country.name,
    votes: parseInt(country.votes, 10),
    exists: country.name === "Spain",
    iso: country.iso,
  }));

class CountriesVote extends React.Component {
  state = {
    voted: "",
    countries: this.props.countries,
    search: "",
  };

  componentDidMount = () => {
    this.getDatabaseData();
  };

  getDatabaseData = () => {
    getCountriesVotes().then(data => {
      const countries = getStateFromDatabaseCountries(data.data);
      this.setState({ countries });
    });
  };

  onChange = search => {
    this.setState({ search });
  };

  onVote = votedCountryName => {
    const { voted, countries } = this.state;

    if (votedCountryName === "") return;

    const copy = countries;
    const sameCountryName = countryName => country =>
      country.name.toLowerCase() === countryName.toLowerCase();
    const countryIndex = copy.findIndex(sameCountryName(votedCountryName));

    // if already exists we ignore the vote
    if (countries[countryIndex] && countries[countryIndex].exists) return;

    // undo previous vote
    if (voted !== "") {
      const votedCountryIndex = copy.findIndex(sameCountryName(voted));
      if (votedCountryIndex >= 0) {
        this.unvoteCountry(copy, votedCountryIndex);
      }
    }

    const unvotedLastVote = votedCountryName === voted;
    if (!unvotedLastVote) {
      // do new vote
      const isCountryInState = countryIndex >= 0;
      if (isCountryInState) {
        this.voteCountry(copy, countryIndex);
      } else {
        const iso = allCountriesNames.find(sameCountryName(votedCountryName))
          .iso;
        this.voteNewCountry(copy, votedCountryName, iso);
      }
    }
  };

  voteNewCountry = (countries, votedCountryName, iso) => {
    console.log("New vote", iso);
    countries.push({
      name: votedCountryName,
      votes: 1,
      exists: false,
      iso,
    });
    voteCountry({ country: iso, vote: 1 }).then(() => {
      this.getDatabaseData();
      this.setState({ voted: votedCountryName });
    });
  };

  voteCountry = (countries, index) => {
    console.log("Vote", countries[index].iso);
    countries[index].votes = countries[index].votes + 1;
    voteCountry({ country: countries[index].iso, vote: 1 }).then(() => {
      this.getDatabaseData();
      this.setState({ voted: countries[index].name });
    });
  };

  unvoteCountry = (countries, index) => {
    console.log("Unvote", countries[index].iso);
    countries[index].votes = countries[index].votes - 1;
    voteCountry({ country: countries[index].iso, vote: 0 }).then(() => {
      this.getDatabaseData();
      this.setState({ voted: "" });
    });
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
  countries: [],
};

export default CountriesVote;
