import React from "react";
import ReactDOM from "react-dom";
import TermsConditions from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<TermsConditions />, div);
	ReactDOM.unmountComponentAtNode(div);
});