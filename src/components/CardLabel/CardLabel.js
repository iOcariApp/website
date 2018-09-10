import React from "react";
import PropTypes from "prop-types";
import style from "./card-label.scss";

import cubeLogo from "components/CountriesVote/cube-logo.svg";

const CardLabel = ({ type, centered, left, right, onClick }) => (
  <div className={style[type]} onClick={onClick}>
    <div className={style.left}>{left}</div>
    <div className={style.right}>
      {type === "exists" ? (
        <img className={style.cubeLogo} src={cubeLogo} alt="iOcari cube logo" />
      ) : (
        right
      )}
    </div>
  </div>
);

CardLabel.propTypes = {
  type: PropTypes.oneOf(["default", "exists", "border"]),
  left: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
  onClick: PropTypes.func,
};

CardLabel.defaultProps = {
  type: "default",
  onClick: () => null,
};

export default CardLabel;
