import React from "react";
import PropTypes from "prop-types";
import style from "./map.scss";

import InputWithButton from "components/InputWithButton";
import CardLabel from "components/CardLabel";

class Map extends React.Component {
  state = { showing: 4, search: "" };

  showMore = () => {
    this.setState(state => ({ showing: state.showing + 4 }));
  };

  onChange = search => {
    this.setState({ search });
  };

  render = () => {
    const { showing, search } = this.state;
    const { countries } = this.props;

    const slicedCountries = countries.slice(0, showing);
    const filteredCountries = slicedCountries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

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
              buttonText="+ 1"
              buttonClass={style.inputButton}
              onClick={value => console.log("+1 on country", value)}
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
