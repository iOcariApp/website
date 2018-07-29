import React from "react";
import PropTypes from "prop-types";
import style from "./team-card.scss";

import Card from "components/Card";

const Mapple = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.666 23.667">
    <path
      style={{ fill: color }}
      d="M22.665,9.751c.131-3.118-7.334-4.636-7.657-4.992C14.847,4.582,15.382,0,11.334,0S7.82,4.582,7.659,4.759C7.336,5.114-.129,6.633,0,9.751s4.092,1.517,4.936,2.435c.739.8-3.463,5.945-3.933,9.21-.153,1.064.146,1.271,1.18,1.271H7.5c.745,0,1.01-.428,1.394-1.018.851-1.306,1.879-3.405,2.438-3.405s1.587,2.1,2.438,3.4c.384.59.649,1.018,1.394,1.018h5.316c1.034,0,1.334-.206,1.18-1.271-.47-3.265-4.672-8.407-3.933-9.21C18.573,11.268,22.535,12.869,22.665,9.751Z"
      transform="translate(0.499 0.5)"
    />
  </svg>
);

const TeamCard = ({ index, avatar, name, description, skills, mapple }) => (
  <Card className={style.main}>
    <img src={avatar} className={style.avatar} alt={`${name}'s avatar`} />
    <div className={style.mapple}>
      <Mapple color={mapple} />
    </div>
    <div className={style.verticalContent}>
      <p className={style.name}>{name}</p>
      <p
        className={style.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className={style.skills}>
        {skills.map((skill, subindex) => (
          <div
            key={`team-member-${index}-skill-${subindex}`}
            className={
              skill.background === "none" ? style.skill : style.skillPadding
            }
            style={{ backgroundColor: skill.background }}
          >
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </div>
  </Card>
);

TeamCard.propTypes = {
  index: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.object),
  mapple: PropTypes.string,
};

export default TeamCard;
