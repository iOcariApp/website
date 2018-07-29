import React from "react";
import PropTypes from "prop-types";
import style from "./dropdown.scss";

import arrowDown from "./arrow-down.svg";

class Dropdown extends React.Component {
  state = {
    showOptions: false,
    label: "",
  };

  toggleOptions = () => {
    this.setState(state => ({ showOptions: !state.showOptions }));
  };

  onChange = label => {
    this.props.onChange(label);
    this.setState({ showOptions: false, label });
  };

  render = () => {
    const { label, showOptions } = this.state;
    const { label: inputLabel, options, className } = this.props;

    return (
      <div className={style.root}>
        {inputLabel && <label className={style.label}>{inputLabel}</label>}
        <div
          className={`${className} ${style.input}`}
          onClick={this.toggleOptions}
        >
          <p className={style.labelSelected}>{label}</p>
          <img
            className={showOptions ? style.arrowTop : style.arrow}
            src={arrowDown}
            alt="Arrow down"
          />
        </div>
        {showOptions && (
          <div className={style.options}>
            {options.map((option, index) => (
              <p
                key={`option-${index}`}
                className={style.option}
                onClick={() => this.onChange(option)}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  className: PropTypes.string,
};
Dropdown.defaultProps = {
  options: [],
  onChange: () => null,
  className: "",
};

export default Dropdown;
