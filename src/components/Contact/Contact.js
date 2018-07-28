import React from "react";
import style from "./contact.scss";

import iconXXL from "./icon-xxl.svg";

import Dropdown from "components/Dropdown";
import Input from "components/Input";
import Button from "components/Button";

const options = [
  "Apuntarme a la beta",
  "Pregunta",
  "Comentario",
  "Soy tienda, quiero más información",
  "Otro",
];

class Contact extends React.Component {
  state = {
    reason: "",
    name: "",
    email: "",
    description: "",
  };

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("Form submited", this.state);
  };

  render = () => {
    const { reason, name, email, description } = this.state;
    return (
      <div className={style.main}>
        <div className={style.maxWidth}>
          <div className={style.left}>
            <img className={`md ${style.shieldXXL}`} src={iconXXL} />
            <h1 className={style.sectionTitle}>Contacto</h1>
            <p className={style.text}>
              ¿Dudas? ¿Quejas, felicitaciones o comentarios? No dudéis en
              contactarnos, nuestros meeples trabajan a tope y contestarán en
              cuanto les sea posible.
            </p>
          </div>
          <form className={style.form} onSubmit={this.onSubmit}>
            <Dropdown
              label="Contacto por"
              className={style.reason}
              options={options}
              onChange={label => {
                this.onChange({ target: { name: "reason", value: label } });
              }}
            />
            <Input
              label="Mi nombre es"
              className={style.name}
              name="name"
              value={name}
              onChange={this.onChange}
            />
            <Input
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
