import React from "react";

const OverlayContext = React.createContext({
	showOverlay: () => null,
	hideOverlay: () => null,
});

export default OverlayContext;
