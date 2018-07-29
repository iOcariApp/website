import React from "react";
import PropTypes from "prop-types";
import style from "./next-features.scss";

import dices from "./dices.svg";

const features = [
  {
    icon: require("./groups.svg"),
    label: "Grupos",
  },
  {
    icon: require("./reviews.svg"),
    label: "Reseñas",
  },
  {
    icon: require("./rating.svg"),
    label: "Valoración a usuarios",
  },
  {
    icon: require("./shops.svg"),
    label: "Acceso a tiendas",
  },
  {
    icon: require("./chat.svg"),
    label: "Chat",
  },
  {
    icon: require("./stats.svg"),
    label: "Estadísticas",
  },
];

const Feature = ({ icon, label, smallVisible }) => (
  <div className={style.feature}>
    <img
      className={`${smallVisible ? style.icon : style.iconMedium}`}
      src={icon}
      alt=""
    />
    <p className={style.label}>{label}</p>
  </div>
);

Feature.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  smallVisible: PropTypes.bool,
};

Feature.defaultProps = {
  smallVisible: true,
};

const NextFeatures = () => (
  <div className={style.main}>
    <h1 className={style.sectionTitle}>
      ¡Vosotros haceís esta comunidad más fuerte!
    </h1>
    <div className={style.separator} />
    <h2>Próximamente en iOcari...</h2>
    <div className={style.features}>
      {features.map(feature => <Feature {...feature} />)}
    </div>
    <Feature icon={dices} label="¡Y mucho más!" smallVisible={false} />
  </div>
);

export default NextFeatures;
