import React from "react";
import style from "./home.scss";

import WithOverlay from "components/WithOverlay";
import Header from "components/Header";
import Features from "components/Features";

const Home = () => (
	<div className={style.main}>
		<WithOverlay>
			<Header />
		</WithOverlay>
		<Features />
	</div>
);

export default Home;
