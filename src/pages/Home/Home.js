import React from "react";
import style from "./home.scss";

import WithOverlay from "components/WithOverlay";
import Header from "components/Header";
import Features from "components/Features";
import DevCorner from "components/DevCorner";

const Home = () => (
	<div className={style.main}>
		<WithOverlay>
			<Header />
		</WithOverlay>
		<Features />
		<DevCorner />
	</div>
);

export default Home;
