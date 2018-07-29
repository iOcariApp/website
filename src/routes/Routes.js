import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Advices from "pages/Advices";

class WithResetScroll extends React.PureComponent {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render = () => {
    const { render } = this.props;

    return render();
  };
}

export const routes = [
  {
    label: "Home",
    render: () => <WithResetScroll render={Home} />,
    exact: true,
    path: "/",
  },
  {
    label: "Qué puedes hacer",
    render: () => <WithResetScroll render={Home} />,
    exact: false,
    path: "#que-puedes-hacer",
  },
  {
    label: "Quienes somos",
    render: () => <WithResetScroll render={AboutUs} />,
    exact: false,
    path: "/quienes-somos",
  },
  {
    label: "Consejos de uso",
    render: () => <WithResetScroll render={Advices} />,
    exact: false,
    path: "/consejos-de-uso",
  },
];

const Routes = () => (
  <Router>
    <Switch>
      {routes.map(({ label, ...rest }, index) => (
        <Route key={`route-${index}`} {...rest} />
      ))}
    </Switch>
  </Router>
);

export default Routes;
