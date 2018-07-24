import React from "react";
import ReactDOM from "react-dom";
import SmallNavBar from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SmallNavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
