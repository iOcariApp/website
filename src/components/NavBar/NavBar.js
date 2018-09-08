import React from "react";

import Media from "react-media";
import { withRouter } from "react-router-dom";
import { routes } from "routes";

import variables from "components/variables.scss";

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
      <Media query={{ maxWidth: variables.mdAnchor }}>
        {matches =>
          matches ? (
            <SmallNavBar />
          ) : (
            <LargeNavBar solid={this.fillBg()} sticky={sticky} />
          )
        }
      </Media>
    );
  };
}

export default withRouter(NavBar);
