import React from "react";
import style from "./header.scss";

import { Link } from "react-router-dom";

import Logo from "components/Logo";
import NavBar from "components/NavBar";
import EmailForm from "components/EmailForm";

const DiagonalHeader = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		preserveAspectRatio="none"
	>
		<polygon fill="white" points="0,0 100,100 0,100" />
	</svg>
);

const Header = () => (
	<header className={style.main}>
		<div className={style.padding}>
			<div className={style.logo}>
				<Link to="/">
					<Logo />
				</Link>
			</div>
			<div className={style.navbar}>
				<NavBar />
			</div>
			<div className={style.content}>
				<div className={style.cta}>
					<h1>Encuentra tu tropa y ¡A jugar!</h1>
					<h4>
						Partidas a tus juegos favoritos, con gente cerca de tí, en cualquier
						lugar del mundo.
					</h4>
					<p>
						Apúntate a la Beta y conviértete en pionero<br />¡plazas límitadas!
					</p>
					<div className={style["email-form"]}>
						<EmailForm />
					</div>
					<p>Próximamente en</p>
					<div className={style.store} />
					<div className={style.store} />
				</div>
				<div className={style.mobile} />
			</div>
		</div>
		<DiagonalHeader />
	</header>
);

export default Header;
