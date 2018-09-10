import React from "react";
import PropTypes from "prop-types";
import style from "./countries-vote.scss";

import Media from "react-media";

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

    // undo previous vote
    if (voted !== "") {
      const votedCountryIndex = copy.findIndex(
        country => country.name.toLowerCase() === voted.toLowerCase()
      );
      copy[votedCountryIndex].votes = copy[votedCountryIndex].votes - 1;
    }

    // do new vote
    const countryIndex = copy.findIndex(
      country => country.name.toLowerCase() === votedCountry.toLowerCase()
    );

    if (countryIndex >= 0) {
      copy[countryIndex].votes = copy[countryIndex].votes + 1;
    } else {
      copy.push({
        name: votedCountry,
        votes: 1,
        exists: false,
        iso: allCountriesNames.find(country => country.name === votedCountry)
          .iso,
      });
    }

    // finally update state
    this.setState(state => ({
      voted: state.voted === "" ? votedCountry : "",
      countries: copy,
    }));
  };

  getSuggestions = () =>
    allCountriesNames.map(country => ({
      value: country.name,
      label: country.name,
    }));

  render() {
    const { voted } = this.state;

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
                  buttonText={voted !== "" ? "- 1" : "+ 1"}
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
      name: "España",
      votes: 10,
      exists: true,
      iso: "ES",
    },
    {
      name: "México",
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
