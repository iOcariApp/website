import React from "react";
import PropTypes from "prop-types";
import style from "./input-with-button.scss";

import axios from "axios";

import Button from "components/Button";

class InputWithButton extends React.Component {
  state = { value: "", error: false };

  onChange = e => {
    const newValue = e.target.value;
    this.props.onChange(newValue);
    this.setState({ value: newValue });
  };

  onClick = e => {
    const { value } = this.state;
    const { onClick } = this.props;

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegex.test(value)) {
      this.setState({ error: false });
      axios
        .post("http://www.paddla.es/patricia/addMail.php", {
          email: value,
        })
        .then(response => {
          onClick();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.setState({ error: true });
    }
  };

  render = () => {
    const { value, error } = this.state;
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
    } ${customInputClass} ${error ? style.inputError : ""}`;
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
        <Button className={buttonClass} onClick={this.onClick}>
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
  onChange: PropTypes.func,
};

InputWithButton.defaultProps = {
  breakResponsive: false,
  type: "text",
  placeholder: "",
  inputClass: "",
  buttonText: "",
  buttonClass: "",
  onClick: () => null,
  onChange: () => null,
};

export default InputWithButton;
