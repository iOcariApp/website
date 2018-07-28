import React from "react";
import ReactDOM from "react-dom";
import Advices from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Advices />, div);
	ReactDOM.unmountComponentAtNode(div);
});