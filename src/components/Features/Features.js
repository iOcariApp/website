import React from "react";
import style from "./features.scss";

import glassGirl from "./glass-girl.png";

import FeatureCard from "../FeatureCard";

const features = [
  {
    title: "Encuentra a tu gente",
    text:
      "Con iOcari encuentra personas que quieren jugar los mismos juegos que tu cerca de tí",
    img: require("./find-people.svg"),
  },
  {
    title: "Sesiones a tu medida",
    text:
      "Crea sesiones, partidas o torneos de juegos de mesa, privadas o públicas. Las reglas las pones tú. ",
    img: require("./custom-experience.svg"),
  },
  {
    title: "Búsqueda por zona o juego",
    text:
      "Crea o busca tu próxima partida por zona o por juego ¡Se acabaron las excusas para no jugar!",
    img: require("./nearby-you.svg"),
  },
  {
    title: "Ludoteca personal",
    text:
      "¡Presume lo que tienes! Digitaliza tus juegos y compartelos con quien quieras.",
    img: require("./your-collection.svg"),
  },
  {
    title: "Medallas y experiencia",
    text:
      "Usa iOcari, juega partidas, obtén medallas y experiencias ¡por honor, gloria y puntos intercambiables!",
    img: require("./badges.svg"),
  },
  {
    title: "Biblioteca de juegos",
    text:
      "La información que necesitas de los juegos que quieres, totalmente en castellano. ",
    img: require("./library.svg"),
  },
];

const Features = () => (
  <div className={style.main}>
    <h1 className={style.sectionTitle}>¿Qué puedes hacer con iOcari?</h1>
    <img
      className={`xl ${style.glassGirl}`}
      src={glassGirl}
      alt="Girl with tattoos and glasses"
    />
    <div className={style.cards}>
      {features.map((feature, index) => (
        <div key={`feature-${index}`} className={style.card}>
          <FeatureCard {...feature} />
        </div>
      ))}
    </div>
  </div>
);

export default Features;
