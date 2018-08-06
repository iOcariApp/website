import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Advices from "pages/Advices";

const withResetScroll = Component =>
  class extends React.PureComponent {
    componentDidMount = () => {
      window.scrollTo(0, 0);
    };

    render = () => <Component />;
  };

export const routes = [
  {
    label: "Home",
    component: withResetScroll(Home),
    exact: true,
    path: "/",
  },
  {
    label: "Qué puedes hacer",
    component: withResetScroll(Home),
    exact: false,
    path: "/#que-puedes-hacer",
  },
  {
    label: "Quienes somos",
    component: withResetScroll(AboutUs),
    exact: false,
    path: "/quienes-somos",
  },
  {
    label: "Consejos de uso",
    component: withResetScroll(Advices),
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
