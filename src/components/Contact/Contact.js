import React from "react";
import style from "./contact.scss";

import ReCAPTCHA from "react-google-recaptcha";
import { isMobile } from "react-device-detect";
import Select from "react-select";

import iconXXL from "./icon-xxl.svg";

import Input from "components/Input";
import Button from "components/Button";
import WithLabel from "components/WithLabel";

const options = [
  { value: "Apuntarme a la beta", label: "Apuntarme a la beta" },
  { value: "Pregunta", label: "Pregunta" },
  { value: "Comentario", label: "Comentario" },
  {
    value: "Soy tienda, quiero más información",
    label: "Soy tienda, quiero más información",
  },
  { value: "Otro", label: "Otro" },
];

const selectStyles = {
  valueContainer: base => ({
    ...base,
    height: style.inputHeight,
  }),
  container: base => ({
    ...base,
    borderRadius: 7,
  }),
  option: base => ({
    ...base,
    color: "#333333",
  }),
};

class Contact extends React.Component {
  state = {
    reason: "",
    name: "",
    email: "",
    description: "",
    verified: false,
  };

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onChangeAutocomplete = value => {
    this.onChange({ target: { name: "reason", value } });
  };

  onCaptcha = recaptcha => {
    this.setState({ verified: true });
  };

  onSubmit = e => {
    const { verified } = this.state;

    e.preventDefault();

    if (verified) {
      // Get reason.label
      console.log("Form submited", this.state);
    }
  };

  render = () => {
    const { reason, name, email, description } = this.state;
    return (
      <div className={style.main}>
        <div className={style.maxWidth}>
          <div className={style.left}>
            <img className={`md ${style.shieldXXL}`} src={iconXXL} alt="" />
            <h1 className={style.sectionTitle}>Contacto</h1>
            <p className={style.text}>
              ¿Dudas? ¿Quejas, felicitaciones o comentarios? No dudéis en
              contactarnos, nuestros meeples trabajan a tope y contestarán en
              cuanto les sea posible.
            </p>
          </div>
          <form className={style.form} onSubmit={this.onSubmit}>
            <WithLabel label="Contacto por">
              <div className={style.reason}>
                <Select
                  styles={selectStyles}
                  isClearable
                  value={reason}
                  onChange={this.onChangeAutocomplete}
                  options={options}
                />
              </div>
            </WithLabel>
            <Input
              type="text"
              label="Mi nombre es"
              className={style.name}
              name="name"
              value={name}
              onChange={this.onChange}
            />
            <Input
              type="email"
              label="Mi correo es"
              className={style.email}
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <Input
              isTextarea
              className={style.textarea}
              label="Descripción de razón de contacto"
              name="description"
              value={description}
              onChange={this.onChange}
            />
            <div className={style.captcha}>
              <ReCAPTCHA
                ref="recaptcha"
                sitekey="6LesQ2gUAAAAAEG8MS7f5pTbLbGXz5lErH7b-XbH"
                onChange={this.onCaptcha}
                size={isMobile ? "compact" : "normal"}
              />
            </div>
            <Button className={style.button} type="submit">
              ENVIAR
            </Button>
          </form>
        </div>
      </div>
    );
  };
}

export default Contact;
