import React from "react";
import ReactDOM from "react-dom";
import LargeNavBar from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<LargeNavBar />, div);
	ReactDOM.unmountComponentAtNode(div);
});