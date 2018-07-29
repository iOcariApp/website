import React from "react";
import style from "./small-nav-bar.scss";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { routes } from "routes";
import scrollToHash from "utils/scrollToHash";

import getFullClass from "utils/getFullClass";

import Logo from "components/Logo";

class SmallNavBar extends React.Component {
  state = { open: false };

  toggle = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  render() {
    const { open } = this.state;

    const hamburguerClass = getFullClass("hamburguerIcon", "Open", open);

    return (
      <div className={style.fake}>
        <nav className={`${style.main}`}>
          <div className={style.logo}>
            <Link to="/">
              <Logo color="secondary" />
            </Link>
          </div>
          <div className={style[hamburguerClass]} onClick={this.toggle}>
            <div />
            <div />
            <div />
          </div>
        </nav>
        {open && (
          <div className={style.collapsableMenu}>
            {routes.slice(1).map(route => (
              <HashLink
                scroll={scrollToHash}
                key={`navbar-${route.label}`}
                to={route.path}
                onClick={this.toggle}
              >
                {route.label}
              </HashLink>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default SmallNavBar;
