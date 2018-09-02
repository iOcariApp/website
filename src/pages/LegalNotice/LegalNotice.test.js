import React from "react";
import ReactDOM from "react-dom";
import LegalNotice from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<LegalNotice />, div);
	ReactDOM.unmountComponentAtNode(div);
});