import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.scss";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";

// scrollIntoView options support
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
