import React from "react";
import ReactDOM from "react-dom";
import PrivacityPolicy from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<PrivacityPolicy />, div);
	ReactDOM.unmountComponentAtNode(div);
});