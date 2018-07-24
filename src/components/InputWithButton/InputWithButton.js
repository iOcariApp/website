import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./input-with-button.scss";

import Button from "components/Button";

class InputWithButton extends React.Component {
  state = { value: "" };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render = () => {
    const { value } = this.state;
    const {
      breakResponsive,
      type,
      placeholder,
      inputClass: customInputClass,
      buttonText,
      buttonClass: customButtonClass,
      onClick,
    } = this.props;

    const mainClass = breakResponsive ? style.mainResponsive : style.main;
    const inputClass = `${
      breakResponsive ? style.inputResponsive : style.input
    } ${customInputClass}`;
    const buttonClass = `${
      breakResponsive ? style.buttonResponsive : style.button
    } ${customButtonClass}`;

    return (
      <div className={mainClass}>
        <input
          className={inputClass}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={this.onChange}
        />
        <Button className={buttonClass} onClick={() => onClick(value)}>
          {buttonText}
        </Button>
      </div>
    );
  };
}

InputWithButton.propTypes = {
  breakResponsive: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func,
};

InputWithButton.defaultProps = {
  breakResponsive: false,
  type: "text",
  placeholder: "",
  inputClass: "",
  buttonText: "",
  buttonClass: "",
  onClick: () => null,
};

export default InputWithButton;
