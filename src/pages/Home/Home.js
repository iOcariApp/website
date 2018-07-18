import React from "react";
import style from "./home.scss";

import WithOverlay from "components/WithOverlay";
import Header from "components/Header";

const Home = () => (
	<div className={style.main}>
		<WithOverlay>
			<Header />
		</WithOverlay>
	</div>
);

export default Home;
