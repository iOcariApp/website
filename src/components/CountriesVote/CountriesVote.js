import React from "react";
import PropTypes from "prop-types";
import style from "./countries-vote.scss";

import Media from "react-media";

import variables from "components/variables.scss";

import InputWithButton from "components/InputWithButton";
import CountriesCards from "components/CountriesCards";
import Map from "components/Map";

const options = [
  { value: "España", label: "España" },
  { value: "Chile", label: "Chile" },
  { value: "Cuba", label: "Cuba" },
  {
    value: "Argentina",
    label: "Argentina",
  },
  { value: "México", label: "México" },
];

class CountriesVote extends React.Component {
  state = {
    voted: false,
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
    const countryIndex = copy.findIndex(
      country => country.name.toLowerCase() === votedCountry.toLowerCase()
    );

    if (countryIndex >= 0) {
      const toAdd = voted ? -1 : 1;
      copy[countryIndex].votes = copy[countryIndex].votes + toAdd;

      this.setState(state => ({ voted: !state.voted, countries: copy }));
    }
  };

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
                  buttonText={voted ? "- 1" : "+ 1"}
                  buttonClass={style.inputButton}
                  onClick={this.onVote}
                  onChange={this.onChange}
                  options={options}
                />
              </div>
              {matches ? <CountriesCards {...this.state} /> : <Map />}
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
    },
    {
      name: "México",
      votes: 3,
      exists: false,
    },
    {
      name: "Chile",
      votes: 20,
      exists: false,
    },
    {
      name: "Argentina",
      votes: 7,
      exists: false,
    },
    {
      name: "Cuba",
      votes: 13,
      exists: false,
    },
  ],
};

export default CountriesVote;
