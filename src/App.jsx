import "./styles/App.scss";
import "./reset.css";

import { Link } from "react-router-dom";
import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import AnimatedCursor from "react-animated-cursor";
import logo from "./assets/logo.svg";

import icon7 from "./assets/icon7.svg";

import icon21 from "./assets/icon21.svg";

import be from "./assets/be.svg";
import fb from "./assets/fb.svg";
import inst from "./assets/inst.svg";
import ln from "./assets/in.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import ThankYou from "./page/ThankYou";
import maps from "./assets/maps.svg";
import { usePopup } from "./PopupContext";
const Header = ({ popupRef }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.height = "100vh";
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.height = "";
			document.body.style.overflowY = "";
		}
	}, [menuOpen]);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const openConsultation = () => {
		if (popupRef.current) {
			popupRef.current.openConsultationPopup();
		}
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header_container">
					<div className="logo">
						<img src={logo} alt="Logo" />
					</div>
					<nav className={`nav ${menuOpen ? "open" : ""}`}>
						<img src={logo} alt="Logo" className={`${menuOpen ? "visible" : "noVisible"}`} />
						<ul className={`${menuOpen ? "ulBar" : ""}`}>
							{menuOpen ? (
								<>
									<li onClick={toggleMenu}>
										<a href="/#Cases" title="Cases" aria-label="Cases" tabIndex={1}>
											Cases
										</a>
									</li>
									<li onClick={toggleMenu}>
										<a href="/#Contacts" title="Contacts" aria-label="Contacts" tabIndex={2}>
											Contacts
										</a>
									</li>
									<li onClick={toggleMenu}>
										<a href="/#Reviews" title="Reviews" aria-label="Reviews" tabIndex={3}>
											Reviews
										</a>
									</li>
									<li onClick={toggleMenu}>
										<button type="button" className="consultation_button" onClick={openConsultation} tabIndex={4} title="Free consultation" aria-label="Free consultation">
											Free consultation
										</button>
									</li>
								</>
							) : (
								<>
									<li>
										<a href="/#Cases" title="Cases" aria-label="Cases" tabIndex={1}>
											Cases
										</a>
									</li>
									<li>
										<a href="/#Contacts" title="Contacts" aria-label="Contacts" tabIndex={2}>
											Contacts
										</a>
									</li>
									<li>
										<a href="/#Reviews" title="Reviews" aria-label="Reviews" tabIndex={3}>
											Reviews
										</a>
									</li>
									<li>
										<button type="button" className="consultation_button" onClick={openConsultation} tabIndex={4} title="Free consultation" aria-label="Free consultation">
											Free consultation
										</button>
									</li>
								</>
							)}
						</ul>
					</nav>
					<div className={`burger ${menuOpen ? "fon" : ""}`} onClick={toggleMenu}>
						<div className={`burger_icon ${menuOpen ? "open" : ""}`}></div>
						<div className={`burger_icon ${menuOpen ? "open" : ""}`}></div>
						{!menuOpen && (
							<>
								<div className="burger_line"></div>
							</>
						)}
					</div>
				</div>
			</div>
			{menuOpen && <div className="menu_overlay" onClick={toggleMenu}></div>}
		</header>
	);
};

const ConsultationPopup = forwardRef((_, ref) => {
	const [isConsultationOpen, setIsConsultationOpen] = useState(false);
	const [isSuccessOpen, setIsSuccessOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		openConsultationPopup,
	}));

	const openConsultationPopup = () => {
		setIsConsultationOpen(true);
	};

	const closePopup = () => {
		setIsConsultationOpen(false);
		setIsSuccessOpen(false);
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		const name = formData.get("name");
		const phone = formData.get("phone");
		const email = formData.get("email");

		await sendToTelegram(name, phone, email).then(() => {
			setIsConsultationOpen(false);
			//setIsSuccessOpen(true);
			window.location.href = "/thank-you";
			event.target.reset();
		});
	};

	const sendToTelegram = async (name, phone, email) => {
		const TOKEN = "6785277391:AAFFJYQXtdNB2wC9MZSI3mTyhdvP80shWQs";
		const CHAT_ID = -1001993787686;
		const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

		const message = `<b>Consultation Request:</b>\n<b>Name:</b> ${name}\n<b>Phone:</b> ${phone}\n<b>Email:</b> ${email}`;

		try {
			const response = await fetch(URI_API, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					chat_id: CHAT_ID,
					parse_mode: "html",
					text: message,
				}),
			});

			if (!response.ok) {
				throw new Error(`Error ${response.status}`);
			}

			return response.json();
		} catch (e) {
			if (e instanceof Error) {
				console.error(`Error ${e.message}`);
			}
		}
	};

	return (
		<>
			{isConsultationOpen && (
				<div className="popup" id="consultation-popup">
					<div className="popup-content">
						<span className="close-button" onClick={closePopup}>
							&times;
						</span>
						<h2 className="pop_h2">
							Leave a<img src={icon7} alt="icon5" />
							<span className="highlight">request</span> for a{" "}
							<span className="highlight">
								consultation
								<img src={icon21} alt="icon5" />
							</span>
						</h2>
						<form id="consultation-form" onSubmit={handleFormSubmit}>
							<input type="text" name="name" placeholder="Name" required />
							<input type="tel" name="phone" placeholder="Phone" required />
							<input type="email" name="email" placeholder="Email" required />
							<button className="pop_btn" type="submit">
								Sign up for a consultation
							</button>
						</form>
						<p className="privacy-notice">By clicking on the button, you confirm that you have read the privacy policy and allow us to use your personal data.</p>
					</div>
				</div>
			)}

			{isSuccessOpen && (
				<div className="popup" id="success-popup">
					<div className="popup-success">
						<h2 className="success_h2">Your request has been sent successfully!</h2>
						<button id="return-button" onClick={closePopup}>
							Return to main page
						</button>
					</div>
				</div>
			)}
		</>
	);
});

const App = () => {
	const { openConsultation, popupRef } = usePopup();

	return (
		<>
			<div className="cursor">
				<AnimatedCursor
					color="112, 63, 255"
					innerScale={2}
					innerSize={20}
					outerAlpha={1}
					outerScale={0}
					outerSize={0}
					innerStyle={{
						mixBlendMode: "difference",
					}}
				/>
			</div>
			<Header popupRef={popupRef} />
			<ConsultationPopup ref={popupRef} />
			<Routes>
				<Route element={<Home />} path="/" />

				<Route element={<ThankYou />} path="/thank-you" />
			</Routes>
			<footer>
				<div className="container">
					<div className="bottom">
						<div className="left">
							<img alt="logo" src={logo} />
							<nav className="nav">
								<a href="/#Cases" title="Cases" aria-label="Cases" tabIndex={0}>
									Cases
								</a>
								<a href="/#Contacts" title="Contacts" aria-label="Contacts" tabIndex={1}>
									Contacts
								</a>
								<a href="/#Reviews" title="Reviews" aria-label="Reviews" tabIndex={2}>
									Reviews
								</a>
								<button type="button" title="Free consultation" aria-label="Free consultation" tabIndex={3} onClick={openConsultation}>
									Free consultation
								</button>
							</nav>
						</div>
						<div className="right">
							<h4>Follow us on our social networks</h4>
							<div className="social">
								<div className="links">
									<div className="link__wrapper">
										<Link target="_blank" to="https://www.facebook.com/offthegrid.99?mibextid=LQQJ4d">
											<img alt="go to facebook" className="link" src={fb} />
										</Link>
									</div>
									<div className="link__wrapper">
										<Link target="_blank" to="https://maps.app.goo.gl/yZiRiwtcvYnev1F66?g_st=ic">
											<img alt="go to google maps" className="link" src={maps} />
										</Link>
									</div>
									<div className="link__wrapper">
										<Link target="_blank" to="https://www.instagram.com/offthegrid_lab">
											<img alt="go to instagram" className="link" src={inst} />
										</Link>
									</div>
									<div className="link__wrapper">
										<Link target="_blank" to="/dfd">
											<img alt="go to linkedIn" className="in" src={ln} />
										</Link>
									</div>
									<div className="link__wrapper">
										<Link target="_blank" to="https://www.behance.net/offthegrid2">
											<img alt="go to behance" className="link linkeds" src={be} />
										</Link>
									</div>
								</div>
								<p>2024 OffTheGrid</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default App;
