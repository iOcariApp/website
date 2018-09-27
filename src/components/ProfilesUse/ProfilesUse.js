import React from "react";
import style from "./profiles-use.scss";

import Media from "react-media";

import variables from "components/variables.scss";
import data from "./data";

import releaseFlag from "./release-flag.svg";

import Card from "components/Card";

const SmallProfileUse = ({ title, text, icon, release, hasReleaseFlag }) => (
  <Card>
    {hasReleaseFlag && (
      <div className={style.releaseFlag}>
        <span>Release {release}</span>
        <img src={releaseFlag} alt="" />
      </div>
    )}
    <div
      className={`${style.description} ${hasReleaseFlag &&
        style.extraPaddingTop}`}
    >
      <h4 className={style.title}>{title}</h4>
      <p className={style.text}>{text}</p>
    </div>
    <img className={style.img} src={icon} alt={`Icono perfil ${title}`} />
  </Card>
);

const BigProfileUse = ({ title, text, icon, release, hasReleaseFlag }) => (
  <Card>
    <div className={style.bigProfileContainer}>
      {hasReleaseFlag && (
        <div className={style.releaseFlag}>
          <span>Release {release}</span>
          <img src={releaseFlag} alt="" />
        </div>
      )}
      <div className={style.description}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>{text}</p>
      </div>
      <img className={style.img} src={icon} alt={`Icono perfil ${title}`} />
    </div>
  </Card>
);

const ProfilesUse = () => (
  <Media query={{ minWidth: variables.mdAnchor }}>
    {matches => {
      const ProfileCard = matches ? BigProfileUse : SmallProfileUse;
      return (
        <div className={style.main}>
          <div className={style.maxWidth}>
            <h1 className={style.sectionTitle}>Un perfil a tu medida</h1>
            <div className={style.profiles}>
              {data.map((profile, index) => {
                const hasReleaseFlag = profile.release > 0;
                return (
                  <div
                    key={`profile-card-${index}`}
                    className={style.profileCard}
                  >
                    <ProfileCard hasReleaseFlag={hasReleaseFlag} {...profile} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }}
  </Media>
);

export default ProfilesUse;
