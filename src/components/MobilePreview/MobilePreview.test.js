import React from "react";
import ReactDOM from "react-dom";
import MobilePreview from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<MobilePreview />, div);
	ReactDOM.unmountComponentAtNode(div);
});