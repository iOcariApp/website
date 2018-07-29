import React from "react";
import ReactDOM from "react-dom";
import NextFeatures from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<NextFeatures />, div);
	ReactDOM.unmountComponentAtNode(div);
});