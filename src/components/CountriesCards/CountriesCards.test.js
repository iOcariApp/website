import React from "react";
import ReactDOM from "react-dom";
import CountriesCards from "./";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<CountriesCards />, div);
	ReactDOM.unmountComponentAtNode(div);
});