import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./countries-cards.scss";

import CardLabel from "components/CardLabel";

class CountriesCards extends React.Component {
  state = {
    showing: 4,
  };

  showMore = () => {
    this.setState(state => ({ showing: state.showing + 4 }));
  };

  render = () => {
    const { showing } = this.state;
    const { countries, search, vote } = this.props;

    const moreVotesFirst = countries.sort((a, b) => {
      if (a.exists) return -1;
      return a.votes > b.votes ? -1 : 1;
    });
    const filteredCountries = moreVotesFirst.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    const slicedCountries = filteredCountries.slice(0, showing);

    return (
      <Fragment>
        <div className={style.countries}>
          {slicedCountries.map(country => (
            <CardLabel
              key={`country-card-${country.name}`}
              type={country.exists ? "exists" : "default"}
              left={country.name}
              right={`+${country.votes}`}
              onClick={() => {
                if (!country.exists) vote(country.name);
              }}
            />
          ))}
        </div>
        {showing < filteredCountries.length && (
          <div className={style.showMore}>
            <CardLabel
              type="border"
              left={`VER +${filteredCountries.length - showing} MÁS`}
              onClick={this.showMore}
            />
          </div>
        )}
      </Fragment>
    );
  };
}

CountriesCards.propTypes = {
  countries: PropTypes.array,
  search: PropTypes.string,
  vote: PropTypes.func,
};

export default CountriesCards;
