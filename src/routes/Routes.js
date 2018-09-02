import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import AboutUs from "pages/AboutUs";
import Advices from "pages/Advices";
import LegalNotice from "pages/LegalNotice";
import NormsUse from "pages/NormsUse";
import PrivacityPolicy from "pages/PrivacityPolicy";
import TermsConditions from "pages/TermsConditions";

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
  {
    label: "Términos y condiciones",
    component: withResetScroll(TermsConditions),
    exact: false,
    path: "/terminos-y-condiciones",
  },
  {
    label: "Política de privacidad",
    component: withResetScroll(PrivacityPolicy),
    exact: false,
    path: "/politica-de-privacidad",
  },
  {
    label: "Normas de uso",
    component: withResetScroll(NormsUse),
    exact: false,
    path: "/normas-de-uso",
  },
  {
    label: "Aviso legal",
    component: withResetScroll(LegalNotice),
    exact: false,
    path: "/aviso-legal",
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
