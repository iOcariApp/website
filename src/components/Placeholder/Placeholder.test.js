import React from "react";
import ReactDOM from "react-dom";
import Placeholder from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Placeholder />, div);
	ReactDOM.unmountComponentAtNode(div);
});