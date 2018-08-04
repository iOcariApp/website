import React from "react";
import ReactDOM from "react-dom";
import WithLabel from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<WithLabel />, div);
	ReactDOM.unmountComponentAtNode(div);
});