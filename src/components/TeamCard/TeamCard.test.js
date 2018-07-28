import React from "react";
import ReactDOM from "react-dom";
import TeamCard from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<TeamCard />, div);
	ReactDOM.unmountComponentAtNode(div);
});