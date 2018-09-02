import React from "react";
import ReactDOM from "react-dom";
import NormsUse from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<NormsUse />, div);
	ReactDOM.unmountComponentAtNode(div);
});