import React from "react";
import style from "./the-team.scss";

import { team } from "./data";

import TeamCard from "components/TeamCard";

const TheTeam = () => (
  <div className={style.main}>
    <h1 className={style.sectionTitle}>Quiénes somos</h1>
    <p className={style.text}>
      Somos un pequeño equipo de jugones y desarrolladores que tenemos la misma
      visión. Jugar es genial y es nuestro deber ponerlo fácil a los jugones y
      jugonas del mundo
    </p>
    <div className={style.cards}>
      {team.map((member, index) => (
        <TeamCard key={`team-member-${index}`} index={index} {...member} />
      ))}
    </div>
  </div>
);

export default TheTeam;
