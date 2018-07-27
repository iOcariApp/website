import React from "react";
import ReactDOM from "react-dom";
import TheTeam from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<TheTeam />, div);
	ReactDOM.unmountComponentAtNode(div);
});