import React from "react";
import ReactDOM from "react-dom";
import DevCorner from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<DevCorner />, div);
	ReactDOM.unmountComponentAtNode(div);
});