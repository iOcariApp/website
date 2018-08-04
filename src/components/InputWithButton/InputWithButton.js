import React from "react";
import PropTypes from "prop-types";
import style from "./input-with-button.scss";

import Select from "react-select";

import Button from "components/Button";
import Spinner from "components/Spinner";

const selectStyles = {
  valueContainer: base => ({
    ...base,
  }),
  container: base => ({
    ...base,
    margin: "auto -15px",
    height: "100%",
  }),
  control: base => ({
    ...base,
    backgroundColor: "none",
    border: "none",
    height: "100%",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }),
  option: base => ({
    ...base,
    color: "#333333",
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

class InputWithButton extends React.Component {
  state = { value: "", error: false };

  onChange = value => {
    this.props.onChange(value);
    this.setState({ value });
  };

  onChangeOption = value => {
    const { onChange } = this.props;
    if (value === null) onChange("");
    else onChange(value.label);
    this.setState({ value });
  };

  onClick = () => {
    const { value } = this.state;
    const { onClick, onResponse, onError, options } = this.props;

    // Reset error state
    this.setState({ error: false });

    const onWrongFormat = () => {
      this.setState({ error: true });
    };

    const onSend = () => {
      this.setState({ fetching: true });
    };

    const onResponseExtended = response => {
      this.setState({ fetching: false });
      onResponse(response);
    };

    const onErrorExtended = error => {
      this.setState({ fetching: false, error: true });
      onError(error);
    };

    const valueToSend = options ? value.label : value;

    onClick(
      valueToSend,
      onWrongFormat,
      onSend,
      onResponseExtended,
      onErrorExtended
    );
  };

  render = () => {
    const { value, fetching, error } = this.state;
    const {
      breakResponsive,
      type,
      placeholder,
      inputClass: customInputClass,
      buttonText,
      buttonClass: customButtonClass,
      onClick,
      options,
    } = this.props;

    const mainClass = breakResponsive ? style.mainResponsive : style.main;
    const inputClass = `${
      breakResponsive ? style.inputResponsive : style.input
    } ${customInputClass} ${error ? style.inputError : ""}`;
    const buttonClass = `${
      breakResponsive ? style.buttonResponsive : style.button
    } ${customButtonClass}`;

    const input = options ? (
      <div className={inputClass}>
        <Select
          isClearable
          onBlurResetsInput={false}
          styles={selectStyles}
          value={value}
          onChange={this.onChangeOption}
          onKeyDown={event => {
            this.onChange(event.key);
          }}
          options={options}
          placeholder={placeholder}
        />
      </div>
    ) : (
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={event => {
          this.onChange(event.target.value);
        }}
      />
    );

    return (
      <div className={mainClass}>
        {input}
        <Button className={buttonClass} onClick={this.onClick}>
          {fetching ? <Spinner /> : buttonText}
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
  onResponse: PropTypes.func,
  onError: PropTypes.func,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

InputWithButton.defaultProps = {
  breakResponsive: false,
  type: "text",
  placeholder: "",
  inputClass: "",
  buttonText: "",
  buttonClass: "",
  onClick: () => null,
  onResponse: () => null,
  onError: error => console.log(error),
  onChange: () => null,
};

export default InputWithButton;
