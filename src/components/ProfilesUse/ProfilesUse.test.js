import React from "react";
import ReactDOM from "react-dom";
import ProfilesUse from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ProfilesUse />, div);
	ReactDOM.unmountComponentAtNode(div);
});