import React from "react";
import ReactDOM from "react-dom";
import Advice from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Advice />, div);
	ReactDOM.unmountComponentAtNode(div);
});