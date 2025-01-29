import React from "react";

import s from "../styles/ThankYou.module.scss";
import { Link } from "react-router-dom";

const ThankYou = () => (
	<section className={`${s.section}`} id="home">
		<div className={`${s.background}`}>
			<div className={s.textCenter}>
				<h1 className={s.title}>Thank You! 🎉</h1>
				<p className={s.subtitle}>Your message has been successfully sent. We`ll get back to you soon!</p>
				<Link to="/" className={s.back} title="Back to Home" rel="noopener noreferrer" aria-label="Back to Home">
					Back to Home
				</Link>
			</div>
		</div>
	</section>
);

export default ThankYou;
