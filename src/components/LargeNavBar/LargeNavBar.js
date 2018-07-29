import React from "react";
import PropTypes from "prop-types";
import style from "./large-nav-bar.scss";

import { Link, withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { routes } from "routes";

import Logo from "components/Logo";
import Button from "components/Button";

const LargeNavBar = ({ background, solid, sticky, match, location }) => {
  const hasBg = solid || sticky;
  const backgroundColor = hasBg ? background : "";
  const menuClass = `${style.main} ${hasBg ? style.solid : ""} ${
    sticky ? style.sticky : ""
  }`;

  return (
    <div className={style.fake}>
      <nav style={{ backgroundColor }} className={menuClass}>
        <div className={style.content}>
          <div className={style.logo}>
            <Link to="/">
              <Logo color={hasBg ? "secondary" : "white"} />
            </Link>
          </div>
          <div className={style.menu}>
            {routes.slice(1).map(route => (
              <HashLink smooth key={`navbar-${route.label}`} to={route.path}>
                <span
                  className={
                    match.path === route.path || location.hash === route.path
                      ? style.activeLink
                      : ""
                  }
                >
                  {route.label}
                </span>
              </HashLink>
            ))}
            <HashLink smooth to={"/#cta-bottom"}>
              <Button className={style.button}>ÚNETE</Button>
            </HashLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

LargeNavBar.propTypes = {
  background: PropTypes.string,
  solid: PropTypes.bool,
  sticky: PropTypes.bool,
  match: PropTypes.object,
  location: PropTypes.object,
};
LargeNavBar.defaultProps = {
  background: "white",
  solid: false,
  sticky: false,
};

export default withRouter(LargeNavBar);
