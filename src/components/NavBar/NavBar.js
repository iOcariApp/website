import React, { Fragment } from "react";

import { withRouter } from "react-router-dom";
import { routes } from "routes";

import SmallNavBar from "components/SmallNavBar";
import LargeNavBar from "components/LargeNavBar";

class NavBar extends React.PureComponent {
  state = { sticky: false };

  componentDidMount = () => {
    window.addEventListener("scroll", this.checkSticky);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.checkSticky);
  };

  fillBg = () => {
    const { match } = this.props;
    return routes.findIndex(route => route.path === match.path) > 2;
  };

  checkSticky = () => {
    const { sticky } = this.state;
    const newSticky = window.pageYOffset > 80;
    if (newSticky !== sticky) this.setState({ sticky: newSticky });
  };

  render = () => {
    const { sticky } = this.state;

    return (
      <Fragment>
        <div className="sm">
          <SmallNavBar />
        </div>
        <div className="md">
          <LargeNavBar solid={this.fillBg()} sticky={sticky} />
        </div>
      </Fragment>
    );
  };
}

export default withRouter(NavBar);
