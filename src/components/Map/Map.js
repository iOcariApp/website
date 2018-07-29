import React from "react";
import PropTypes from "prop-types";
import style from "./map.scss";

import InputWithButton from "components/InputWithButton";
import CardLabel from "components/CardLabel";

class Map extends React.Component {
  state = {
    voted: false,
    countries: this.props.countries,
    showing: 4,
    search: "",
  };

  showMore = () => {
    this.setState(state => ({ showing: state.showing + 4 }));
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

  render = () => {
    const { voted, countries, showing, search } = this.state;

    const moreVotesFirst = countries.sort((a, b) => {
      if (a.exists) return -1;
      return a.votes > b.votes ? -1 : 1;
    });
    const slicedCountries = moreVotesFirst.slice(0, showing);
    const filteredCountries = slicedCountries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

    console.log("rerender");

    return (
      <div className={style.main}>
        <div className={style.maxWidth}>
          <h1 className={style.sectionTitle}>¿Dónde jugamos ahora?</h1>
          <p className={style.explanation}>
            Si quieres que estemos disponibles en tu país, dale +1 búscandolo
            aquí:
          </p>
          <div className={style.inputWithButton}>
            <InputWithButton
              placeholder="País"
              inputClass={style.input}
              buttonText={voted ? "- 1" : "+ 1"}
              buttonClass={style.inputButton}
              onClick={this.onVote}
              onChange={this.onChange}
            />
          </div>
          <div className={style.countries}>
            {filteredCountries.map(country => (
              <CardLabel
                key={`country-card-${country.name}`}
                type={country.exists ? "exists" : "default"}
                left={country.name}
                right={`+${country.votes}`}
                onClick={() => {
                  if (!country.exists) this.onVote(country.name);
                }}
              />
            ))}
          </div>
          {showing < countries.length && (
            <div className={style.showMore}>
              <CardLabel
                type="border"
                left={`VER +${countries.length - showing} MÁS`}
                onClick={this.showMore}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
}

Map.propTypes = {
  countries: PropTypes.array,
};

Map.defaultProps = {
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

export default Map;
