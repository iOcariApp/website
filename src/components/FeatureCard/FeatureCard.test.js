import React from "react";
import ReactDOM from "react-dom";
import FeatureCard from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FeatureCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
