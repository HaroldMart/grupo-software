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

import AboutImagen from '../../../public/images/about-image.png'
import GroupSvg from '../../../public/images/undraw_programming_re_kg9v.svg'


export default function Page() {
	return (
		<main>
			<div className="hero-section">
				<div className="hero-description">
					<div className="hero-tagline">
						<span>New</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					<h1>Find your <span>course</span> & make sure goal.</h1>
					<p>Your dream Courses is waithing for you. 👋</p>

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
							title="Travelling as a discovery and progress."
						/>
						<div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nisi neque provident fuga voluptatum quo vel impedit cum, voluptas illo tempora! Aliquid ratione placeat vero esse. Minima nisi consequatur corrupti?</p>
							<h5>Nuestra mision</h5>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veniam doloremque eum, tempore numquam amet facilis aspernatur officia rem? Autem suscipit quod delectus repellat, fugit deserunt minima! Reprehenderit, iste molestiae!
							Rem soluta voluptatem hic odit facilis corrupti laborum incidunt eligendi cumque iusto quibusdam cupiditate voluptatum similique recusandae illo, architecto earum quam repellat impedit harum voluptas aliquid. Iure deserunt quisquam exercitationem!</p>
						</div>
					</div>

				</div>


			</Section>

			<div className="portfolio-cta">
				<Headline title="Travelling as a way of discovery and progress" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia." alignment="center" />
				<a href="#" className="btn filled">Get Started</a>
			</div>

			<Section>
				<Headline
					tagline="About us"
					title="Travelling as a discovery and progress."
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda hic minima quam officiis, nam nobis incidunt. Modi nam, necessitatibus accusamus esse officia ratione provident enim eum ipsa! Consectetur, eos officia."
				/>
				<div className="content services-cont">
					<ul className="items">
						<li className="item">
							<div className="item-content">
								<div className="icon-cont primary">
									<BsBook className="icon" size={28} fill="#9E64FF" />
								</div>
								<h4>How does writing influence your personal brand?</h4>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. doloremque odit quae totam ullam facere eveniet architecto!</p>
							</div>
							<a className="btn" href="#">Get started <FaArrowRight /></a>
						</li>
						<li className="item">
							<div className="item-content">
								<div className="icon-cont secondary">
									<BsBarChart className="icon" size={28} fill="#9E64FF" />
								</div>
								<h4>How does writing influence your personal brand?</h4>
								<p>Lorem Commodi dolorum sint iste nihil eos, expedita magni, doloremque odit quae totam ullam facere eveniet architecto!</p>
							</div>
							<a className="btn" href="#">Get started <FaArrowRight /></a>
						</li>
						<li className="item">
							<div className="item-content">
								<div className="icon-cont tertiary">
									<BsBoxSeam className="icon" size={28} fill="#9E64FF" />
								</div>
								<h4>How does writing influence your personal brand?</h4>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quia vero odio quo natus. </p>
							</div>
							<a className="btn" href="#">Get started <FaArrowRight fill="#69686E" /></a>
						</li>
					</ul>
				</div>
			</Section>
		</main>
	);
}
