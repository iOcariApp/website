import React from "react";
import ReactDOM from "react-dom";
import LegalText from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<LegalText />, div);
	ReactDOM.unmountComponentAtNode(div);
});