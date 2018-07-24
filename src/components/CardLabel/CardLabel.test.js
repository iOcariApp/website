import React from "react";
import ReactDOM from "react-dom";
import CardLabel from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<CardLabel />, div);
	ReactDOM.unmountComponentAtNode(div);
});