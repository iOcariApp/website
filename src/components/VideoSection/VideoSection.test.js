import React from "react";
import ReactDOM from "react-dom";
import VideoSection from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VideoSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
