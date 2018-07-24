import React from "react";
import ReactDOM from "react-dom";
import InputWithButton from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputWithButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
