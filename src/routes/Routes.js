import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Advices from "pages/Advices";

export const routes = [
  {
    label: "Home",
    component: Home,
    exact: true,
    path: "/",
  },
  {
    label: "Qué puedes hacer",
    component: Home,
    exact: false,
    path: "/que-puedes-hacer",
  },
  {
    label: "Quienes somos",
    component: AboutUs,
    exact: false,
    path: "/quienes-somos",
  },
  {
    label: "Consejos de uso",
    component: Advices,
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
