import React from "react";

import app from "../assets/project/app.svg";

import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import icon8 from "../assets/icon8.svg";
import icon9 from "../assets/icon9.svg";
import icon10 from "../assets/icon10.svg";
import icon11 from "../assets/icon11.svg";
import icon12 from "../assets/icon12.svg";
import icon13 from "../assets/icon13.svg";
import icon14 from "../assets/icon14.svg";
import icon15 from "../assets/icon15.svg";
import icon16 from "../assets/icon16.svg";
import icon17 from "../assets/icon17.svg";
import icon18 from "../assets/icon18.svg";
import icon19 from "../assets/icon19.svg";
import icon20 from "../assets/icon20.svg";
import image_0 from "../assets/project/Image.png";
import image_1 from "../assets/project/Image-1.png";
import image_2 from "../assets/project/Image-2.png";
import image_3 from "../assets/project/Image-3.png";

import image_5 from "../assets/project/Image-5.png";
import image_6 from "../assets/project/Image-6.png";
import image_7 from "../assets/project/Image-7.png";
import image_8 from "../assets/project/Image-8.png";
import image_9 from "../assets/project/Image-9.png";
import image_10 from "../assets/project/image_10.png";
import image_11 from "../assets/project/image-11.png";
import image_12 from "../assets/project/image-12.png";
import image_13 from "../assets/project/image-13.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import maks from "../assets/maksim.jpg";
import image from "../assets/image.png";
import image2 from "../assets/image2.png";

import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import { Link } from "react-router-dom";
import { usePopup } from "../PopupContext";
import icon7 from "../assets/icon7.svg";
const projectData = [
	{
		title: "Digital assistant",
		description: "for economic management in a public hospital",
		backgroundColor: "greenBack",
		imageSrc: image_0,
		showIcon: false,
	},
	{
		title: "Summarizer",
		description: "Convert audio and video into text and process the result using AI",
		backgroundColor: "orangeBack",
		imageSrc: image_1,
		showIcon: true,
		iconSrc: app,
	},
	{
		title: "Your Warehouse",
		description: "Automation system for renting and contract management",
		backgroundColor: "fiolBack",
		imageSrc: image_2,
		showIcon: false,
	},
	{
		title: "Pulse Tracker",
		description: "Health monitoring by measuring pulse, blood pressure and oxygen",
		backgroundColor: "pirpleBack",
		imageSrc: image_3,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/us/app/blood-sugar-master/id6444045640",
	},
	{
		title: "Currency Converter",
		description: "Tracking exchange rates of currencies and cryptocurrencies in real time",
		backgroundColor: "greenBack",
		imageSrc: image_9,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/us/app/currency-converter-app/id6447543461",
	},
	{
		title: "Screen Recorder",
		description: "Screen recording with video and audio comments",
		backgroundColor: "orangeBack",
		imageSrc: image_10,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/us/app/screen-recorder-hq/id6448443588",
	},
	{
		title: "Fasting Tracker",
		description: "Intermittent Fasting Tracker",
		backgroundColor: "fiolBack",
		imageSrc: image_5,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/ru/app/intermittent-fasting-tracker/id1641543445",
	},

	{
		title: "LG TV Remote",
		description: "TV Remote Control App",
		backgroundColor: "pirpleBack",
		imageSrc: image_6,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/ng/app/tv-remote-for-lg-hq/id6449392305",
	},

	{
		title: "Compass",
		description: "Navigation and altitude measurement tool",
		backgroundColor: "greenBack",
		imageSrc: image_7,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/ng/app/compass-and-altimeter-hq/id6450252263",
	},

	{
		title: "Ring Sizer",
		description: "The application helps to determine the exact ring size",
		backgroundColor: "orangeBack",
		imageSrc: image_8,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/us/app/ring-sizer-hq/id6450901379",
	},

	{
		title: "BatteryHub",
		description: "The guide to the world of power bank sharing",
		backgroundColor: "fiolBack",
		imageSrc: image_11,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/us/app/batteryhub-charge-to-go/id6739724509",
	},
	{
		title: "CryptoWallet",
		description: "Non-custodial crypto wallet",
		backgroundColor: "pirpleBack",
		imageSrc: image_12,
		showIcon: true,
		iconSrc: app,
	},
	{
		title: "ChargeMate",
		description: "The ChargeMate app gives you instant access to EV charging networks in India.",
		backgroundColor: "greenBack",
		imageSrc: image_13,
		showIcon: true,
		iconSrc: app,
		href: "https://apps.apple.com/ru/app/chargemate-us/id6468920265?l=en-GB",
	},
];

const ProjectCard = ({ title, description, backgroundColor, imageSrc, showIcon, iconSrc, href }) => {
	return (
		<>
			{href ? (
				<Link to={`${href}`} target="_blank" title={title} aria-label={title}>
					<div className={`project_item ${backgroundColor}`}>
						<div className="project_item_title">
							<div className="project_item_heder">
								<h1>{title}</h1>
								<p>{description}</p>
							</div>
							{showIcon && iconSrc && <img src={iconSrc} alt="app icon" />}
						</div>
						<img className="project_img" src={imageSrc} alt="project" />
					</div>
				</Link>
			) : (
				<div className={`project_item ${backgroundColor}`}>
					<div className="project_item_title">
						<div className="project_item_heder">
							<h1>{title}</h1>
							<p>{description}</p>
						</div>
						{showIcon && iconSrc && <img src={iconSrc} alt="app icon" />}
					</div>
					<img className="project_img" src={imageSrc} alt="project" />
				</div>
			)}
		</>
	);
};
const ProjectSlider = () => {
	return (
		<section className="project">
			<div className="container">
				<h1 className="project_h1">
					Our <span className="pirple">Projects</span>
				</h1>
				<p className="project_p">We believe in our customers' projects and trust the people we work with!</p>
				<Splide
					options={{
						type: "loop",
						perPage: window.innerWidth < 768 ? 1 : 2,
						perMove: 1,
						autoplay: true,
						interval: 2000,
						arrows: true,
						pagination: false,
					}}
				>
					{projectData.map((project, index) => (
						<SplideSlide key={index}>
							<ProjectCard {...project} />
						</SplideSlide>
					))}
				</Splide>
			</div>
		</section>
	);
};
const Home = () => {
	const { openConsultation } = usePopup();

	return (
		<>
			{" "}
			<section className="title">
				<div className="container">
					<h1 className="title_h1">Product development studio</h1>
					<h2 className="about_title">
						<span className="about_description__green">We</span>
						<img alt="icon Fire" src={icon1} />
						<span>help launch IT startups.</span>
						<img alt="icon Arrow" src={icon2} />
						<span className="about_description__orange">From idea to the right</span>
						<img alt="icon Heart" src={icon3} />
						<span>MVP</span>
						<img alt="icon Heart" src={icon4} />
						<span>in a month.</span>
					</h2>

					<button className="about_h1" onClick={openConsultation}>
						Sign up for a consultation
					</button>
				</div>
			</section>
			<section className="our">
				<div className="container">
					<h1 className="our_h1">
						Our <span className="green">values</span>
					</h1>
					<div className="our_container">
						<div className="our_item">
							<img src={icon5} alt="icon5" />
							<h1>Detailed analytics</h1>
							<p>From the very start, we gather as much data as possible about user behavior in order to make effective decisions and not waste money.</p>
						</div>

						<div className="our_item">
							<img src={icon6} alt="icon5" />
							<h1>Frequent updates</h1>
							<p>We release updates every week thanks to proper priorities and processes in the team. We get feedback faster and test hypotheses.</p>
						</div>

						<div className="our_item">
							<img src={icon7} alt="icon5" />
							<h1>Quick Start</h1>
							<p>Within a month, we release a product that solves the target audience’s problem and generates revenue.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="cool">
				<div className="container">
					<h1 className="cool_h1">
						We do it <span className="orange">cool</span>
					</h1>
					<div className="cool_container">
						<div className="cool_item">
							<h1>
								Web services,
								<br /> ERP systems
							</h1>
							<img src={image} alt="image" />
						</div>
						<div className="cool_item">
							<h1>
								Mobile applications, <br />
								including those using AI
							</h1>
							<img src={image2} alt="image" />
						</div>
					</div>
				</div>
			</section>
			<section className="consult">
				<div className="container">
					<div className="consult_container">
						<div className="consult_title">
							<h1>
								Consulting <br />
								for founders
							</h1>
							<button onClick={openConsultation}>Sign up for a consultation</button>
						</div>

						<div className="consult_info">
							<div className="consult_info_item">
								<h1>Who it’s for</h1>
								<div className="consult_info_list">
									<div className="consult_info_item_list">
										<img src={icon8} alt="icon" />
										<h2>There is an idea, but no plan</h2>
									</div>
									<div className="consult_info_item_list">
										<img src={icon8} alt="icon" />
										<h2>The startup is moving slowly </h2>
									</div>
									<div className="consult_info_item_list">
										<img src={icon8} alt="icon" />
										<h2>You invest money without results</h2>
									</div>
								</div>
							</div>

							<div className="consult_info_item">
								<h1>What will you get?</h1>
								<div className="consult_info_list">
									<div className="consult_info_item_list">
										<img src={icon8} alt="icon" />
										<h2>Honest feedback from our team</h2>
									</div>
									<div className="consult_info_item_list">
										<img src={icon8} alt="icon" />
										<h2>Startup launch and development plan </h2>
									</div>
									<div className="consult_info_item_list">
										<img src={icon8} alt="icon" />
										<h2>Financial and team assessment for plan implementation</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<a name="Cases"></a>
			<ProjectSlider />
			<section className="about">
				<div className="container">
					<h1 className="about_header">
						What our clients
						<br /> <span className="green">say about us</span>
					</h1>
					<a name="Reviews"></a>
					<div className="about_container">
						{window.innerWidth < 768 ? (
							<Splide
								options={{
									type: "loop",
									perPage: 1,
									perMove: 1,
									autoplay: true,
									interval: 2000,
									arrows: false,
									pagination: false,
									// padding: '-5rem',
									gap: "-6rem",
								}}
							>
								<SplideSlide>
									<div className="about_item">
										<div className="about_item_container">
											<div className="about_item_title">
												<img src={image4} alt="image" />
												<div className="about_item_flex">
													<h1>Jacob Johnson</h1>
													<p>IT Entrepreneur</p>
												</div>
											</div>
											<p className="about_item_p">
												I was looking for a studio that could start working quickly and take full product management off my hands. For me, as an entrepreneur, it was important
												to save time and energy and to be more of a product owner in the project.
											</p>
										</div>
										<div className="about_item_down">
											<h2>Read more</h2>
											<img src={icon9} alt="icon" />
										</div>
									</div>
								</SplideSlide>
								<SplideSlide>
									<div className="about_item">
										<div className="about_item_container">
											<div className="about_item_title">
												<img src={image5} alt="image" />
												<div className="about_item_flex">
													<h1>Charley Williams</h1>
													<p>Founder and CEO of "Your Warehouse"</p>
												</div>
											</div>
											<p className="about_item_p">
												I collaborated with a great team, and I'm really satisfied with them. Why? First off, they provide clear and transparent numbers. We work in a
												micro-contract format, so you know exactly what will be done, in what timeframe, and for what cost.
											</p>
										</div>
										<div className="about_item_down">
											<h2>Read more</h2>
											<img src={icon9} alt="icon" />
										</div>
									</div>
								</SplideSlide>
								<SplideSlide>
									<div className="about_item">
										<div className="about_item_container">
											<div className="about_item_title">
												<img src={image6} alt="image" />
												<div className="about_item_flex">
													<h1>Thomas Wilson</h1>
													<p>IT Entrepreneur</p>
												</div>
											</div>
											<p className="about_item_p">
												When choosing a development studio, it was important for us to find a team that not only does their job professionally but also truly understands and
												shares our goals and vision for the product. The Along team helped develop a product for a friend of mine, and he was thrilled with their approach.
											</p>
										</div>
										<div className="about_item_down">
											<h2>Read more</h2>
											<img src={icon9} alt="icon" />
										</div>
									</div>
								</SplideSlide>
							</Splide>
						) : (
							<>
								<div className="about_item">
									<div className="about_item_container">
										<div className="about_item_title">
											<img src={image4} alt="image" />
											<div className="about_item_flex">
												<h1>Jacob Johnson</h1>
												<p>IT Entrepreneur</p>
											</div>
										</div>
										<p className="about_item_p">
											I was looking for a studio that could start working quickly and take full product management off my hands. For me, as an entrepreneur, it was important to
											save time and energy and to be more of a product owner in the project.
										</p>
									</div>
									<div className="about_item_down">
										<h2>Read more</h2>
										<img src={icon9} alt="icon" />
									</div>
								</div>

								<div className="about_item">
									<div className="about_item_container">
										<div className="about_item_title">
											<img src={image5} alt="image" />
											<div className="about_item_flex">
												<h1>Charley Williams</h1>
												<p>Founder and CEO of "Your Warehouse"</p>
											</div>
										</div>
										<p className="about_item_p">
											I collaborated with a great team, and I'm really satisfied with them. Why? First off, they provide clear and transparent numbers. We work in a
											micro-contract format, so you know exactly what will be done, in what timeframe, and for what cost.
										</p>
									</div>
									<div className="about_item_down">
										<h2>Read more</h2>
										<img src={icon9} alt="icon" />
									</div>
								</div>

								<div className="about_item">
									<div className="about_item_container">
										<div className="about_item_title">
											<img src={image6} alt="image" />
											<div className="about_item_flex">
												<h1>Thomas Wilson</h1>
												<p>IT Entrepreneur</p>
											</div>
										</div>
										<p className="about_item_p">
											When choosing a development studio, it was important for us to find a team that not only does their job professionally but also truly understands and shares
											our goals and vision for the product. The Along team helped develop a product for a friend of mine, and he was thrilled with their approach.
										</p>
									</div>
									<div className="about_item_down">
										<h2>Read more</h2>
										<img src={icon9} alt="icon" />
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</section>
			<section className="quick">
				<div className="container">
					<div className="quick_container">
						<div className="quick_main">
							<h1>Quick MVP Launch in 1 month</h1>
							<p>
								A ready product that generates revenue. Right after publishing, you can start buying ads for the app. We respond quickly to initial traffic tests, releasing updates
								several times a week.
							</p>
							<div className="quick_flex">
								<div className="quick_item">
									<h2>Development start-up costs</h2>
									<h1>from $8000</h1>
								</div>
								<div className="quick_item">
									<h2>Development time starting</h2>
									<h1>from 4 weeks</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="process">
				<div className="container">
					<div className="process_container">
						<div className="process_left">
							<div className="process_left_container">
								<p>Business process</p>
								<h2>Our goal is to launch an MVP in a month that solves just one real problem, gather feedback from the market, and achieve our first sales</h2>
							</div>
							<img src={icon10} alt="icon" />
						</div>

						<div className="process_right">
							<div className="process_right_item orangeBack">
								<h1>Research</h1>
								<p>First, we analyze the competition and decide on a minimal set of features.</p>
							</div>
							<div className="process_right_item greenBack">
								<h1>Design</h1>
								<p>In the design, we use proven elements to speed up development and initial sales.</p>
							</div>
							<div className="process_right_item pirpleBack">
								<h1>Development</h1>
								<p>In development, we work iteratively, updating the app frequently. The app can be tested after each update. We conduct a review of the work done once a week.</p>
							</div>
							<div className="process_right_item orangeBack">
								<h1>Publishing</h1>
								<p>We prepare promotional materials and content for search optimization (ASO). We help navigate the App Store and Play Market moderators to publish the app.</p>
							</div>
							<div className="process_right_item greenBack">
								<h1>Growth</h1>
								<p>Together with the product manager and product analyst, we build regular product improvements based on data, using HADI cycles.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="integration">
				<div className="container">
					<h1 className="integration_h1">Integrations</h1>
					<p className="integration_p">We create integrations with services to gather analytics and expand the app's core functionality.</p>
					<div className="integration_container">
						<div className="integration_item">
							<img src={icon11} alt="icon" />
							<h1>OpenAI APIs</h1>
						</div>

						<div className="integration_item">
							<img src={icon12} alt="icon" />
							<h1>AppMetrica</h1>
						</div>

						<div className="integration_item">
							<img src={icon13} alt="icon" />
							<h1>AppHud</h1>
						</div>

						<div className="integration_item">
							<img src={icon14} alt="icon" />
							<h1>Apple APIs</h1>
						</div>

						<div className="integration_item">
							<img src={icon15} alt="icon" />
							<h1>AppsFlyer</h1>
						</div>

						<div className="integration_item">
							<img src={icon16} alt="icon" />
							<h1>Antropic</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="tech">
				<div className="container">
					<h1 className="tech_h1">Tech stack</h1>
					<p className="tech_p">
						We develop mobile and web applications for Android and iOS using Flutter, a cross-platform framework. This technology allows us to quickly create IT products without writing
						different code for different systems.
					</p>
					<div className="tech_container">
						<div className="tech_item">
							<img src={icon17} alt="icon" />
							<h1>Web</h1>
						</div>
						<div className="tech_item">
							<img src={icon18} alt="icon" />
							<h1>Android</h1>
						</div>
						<div className="tech_item">
							<img src={icon19} alt="icon" />
							<h1>iOS</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="team">
				<div className="container">
					<div className="team_container">
						<div className="team_left">
							<h1>Team:</h1>
							<p>Mobile, Frontend, Backend, UX/UI Design, DevOps, Product Analytics, Project Management, Business Analytics, Product Management, Testing, ASO, Prompt Engineering.</p>
						</div>
						<div className="team_right">
							<div className="team_right_item">
								<h1>Backend:</h1>
								<p>Python</p>
							</div>
							<div className="team_right_item">
								<h1>Frontend:</h1>
								<p>Vue, React</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="maks">
				<div className="container">
					<div className="max_container">
						<div className="maks_info">
							<h1>Hi, I'm Maksim, CEO of Off The Grid! You can write me to learn about:</h1>

							<div className="maks_info_list">
								<a name="Contacts"></a>
								<div className="maks_info_item_list">
									<img src={icon20} alt="icon" />
									<h2>A launch plan that will lead to quick results - a product that you can sell</h2>
								</div>
								<div className="maks_info_item_list">
									<img src={icon20} alt="icon" />
									<h2>A financial assessment of this plan - for yourself or for investors</h2>
								</div>
								<div className="maks_info_item_list">
									<img src={icon20} alt="icon" />
									<h2>The optimal team composition needed to launch an IT startup</h2>
								</div>
							</div>
							<button onClick={openConsultation}>Sign up for a consultation</button>
						</div>

						<img className="maks_img" src={maks} alt="maks" />
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
