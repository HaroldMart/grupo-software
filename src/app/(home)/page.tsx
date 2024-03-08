"use client";

import Headline from "@/components/headline";
import { Section } from "@/components/partials/section";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { BiStoreAlt } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";

import AboutImagen from '../../../public/images/about-image.png'
import GroupSvg from '../../../public/images/undraw_programming_re_kg9v.svg'


export default function Page() {
	return (
		<main>
			<div className="hero-section">
				<div className="hero-description">
					<div className="hero-tagline">
					<span>Turning</span> Visionary Ideas into Powerful Solutions
					</div>
					<h1>Welcome to <span>GrupoSoftware</span></h1>
					<p>Your hub for digital solutions 👋</p>

					<div className="hero-buttons">
						<a href="#" className="filled">get started</a>
						<a href="#"><FaPlayCircle fill="#843dff" size={28} />play video</a>
					</div>
				</div>
				<div className="imagen">
					<Image src={GroupSvg} alt="Grupo software hero" />
					{/* <img src="https://photo-cdn2.icons8.com/MOziXBnxcD2A-5b_ExuZ-E71qT0NbTpi9ANFhLd_AYw/rs:fit:1054:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L2VkaXRvci9tb2Rl/bC8zMDYvNzE4ODVi/NGMtZDQ1YS00MTFl/LTg4NGMtZDMwOTk0/Y2Y1OTAzLnBuZw.png" alt="" /> */}
				</div>
			</div>

			<Section>
				<div className="side-content">
					<div>
						<Image src={AboutImagen} alt="Imagen de about" />
					</div>

					<div className="content">
						<Headline
							tagline="About us"
							title="Creating exceptional digital experiences"
						/>
						<div>
							<p>We are a digital agency focused on creating exceptional digital experiences for our clients. We specialize in web, mobile and desktop development, delivering innovative and high-quality solutions.</p>
							<h5>Our approach </h5>
							<p>Our approach is based on understanding each client's unique needs and delivering customized solutions that drive their online success. We strive to exceed our customers' expectations on every project, focusing on quality, innovation, and customer satisfaction</p>
						</div>
					</div>

				</div>


			</Section>

			<div className="portfolio-cta">
				<Headline title="Ready to get started?" 
					description="Contact us today and find out how we can help you take your digital presence to the next level."
					alignment="center" 
				/>
				<a href="#" className="btn filled">Get Started</a>
			</div>

			<Section>
				<Headline
					tagline="Services"
					title="Discover Our Comprehensive Range of Exceptional Services"
					description="At GrupoSoftware, we offer a wide range of services to meet all your digital needs. Our team of experts is here to help you achieve your business goals and take your ideas to the next level. Whether you need web development, mobile app design, or technology consulting, we've got you covered."
				/>
				<ul className="content services-cont">
					<li className="item">
						<div className="item-content">
							<div className="icon-cont primary">
								<BsBook className="icon" size={28} fill="#9E64FF" />
							</div>
							<h4>Web Design Solutions</h4>
							<p>Our design team creates stunning and functional websites that cater to the needs of your business.</p>
						</div>
						<a className="btn" href="#">Learn More <FaArrowRight /></a>
					</li>
					<li className="item">
						<div className="item-content">
							<div className="icon-cont secondary">
								<BsBarChart className="icon" size={28} fill="#9E64FF" />
							</div>
							<h4>Mobile App Development</h4>
							<p>We develop custom mobile applications for iOS and Android that deliver an exceptional experience for your users.</p>
						</div>
						<a className="btn" href="#">Learn More <FaArrowRight /></a>
					</li>
					<li className="item">
						<div className="item-content">
							<div className="icon-cont tertiary">
								<BsBoxSeam className="icon" size={28} fill="#9E64FF" />
							</div>
							<h4>Desktop Programming</h4>
							<p>We offer robust and scalable desktop software solutions to meet the unique needs of your enterprise.</p>
						</div>
						<a className="btn" href="#">Learn More <FaArrowRight fill="#69686E" /></a>
					</li>
				</ul>
			</Section>

			<div className="services-cta">
				<div className="content">
					<Headline
						title="Discover Our Diverse Portfolio of Innovative Projects"
						description="Discover our latest projects and see how we've helped businesses like yours succeed."
					/>
					<a href="#" className="btn filled">View Portfolio</a>
				</div>
				<div className="image">
					<img src="/images/project-image.png" alt="macbook image" />
				</div>
			</div>

			<Section>
				<Headline
					tagline="Testimonials"
					title="What Our Clients Say"
					description="Explore the feedback from our valued clients and discover how our services have made a positive impact on their businesses. We take pride in delivering exceptional results and building long-lasting relationships with our clients."
				/>
				<ul className="testimonials-list">
					<li className="item">
						<div className="t-card-head">
							<div className="person-info">
								<img src="/images/contributors/jonathan pic.png" alt="jonathan picture" />
								<div>
									<h5>Jonathan Montero</h5>
									<p>Founder, ABC Corporation</p>
								</div>
							</div>
							<div className="rate-date">
								<p>This week</p>
								<p className="rate">⭐⭐⭐⭐⭐</p>
							</div>
						</div>

						<div className="t-card-body">
							<ImQuotesLeft size={32}  fill="#393644"/>
							<div className="testimonial">
								<p>GrupoSoftware delivered exactly what we needed for our project. Their expertise and professionalism were evident throughout the entire process. Highly recommended!</p>
							</div>
						</div>
					</li>
					<li className="item">
						<div className="t-card-head">
							<div className="person-info">
								<img src="/images/contributors/isael pic.png" alt="jonathan picture" />
								<div>
									<h5>Isael Diroche</h5>
									<p>CEO, Example Company</p>
								</div>
							</div>
							<div className="rate-date">
								<p>This week</p>
								<p className="rate">⭐⭐⭐⭐⭐</p>
							</div>
						</div>

						<div className="t-card-body">
							<ImQuotesLeft size={32} fill="#393644"/>
							<div className="testimonial">
								<p>Working with GrupoSoftware has been a game-changer for our business. Their team went above and beyond to ensure our satisfaction and the results speak for themselves.</p>
							</div>
						</div>
					</li>
				</ul>
			</Section>

		</main>
	);
}
