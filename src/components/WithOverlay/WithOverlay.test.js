import React from "react";
import ReactDOM from "react-dom";
import WithOverlay from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<WithOverlay />, div);
	ReactDOM.unmountComponentAtNode(div);
});