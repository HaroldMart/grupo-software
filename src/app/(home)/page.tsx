"use client";

import { Footer } from "@/components/partials/footer";
import Headline from "@/components/headline";
import { Section } from "@/components/partials/section";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

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
                 <img src="https://photo-cdn2.icons8.com/MOziXBnxcD2A-5b_ExuZ-E71qT0NbTpi9ANFhLd_AYw/rs:fit:1054:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L2VkaXRvci9tb2Rl/bC8zMDYvNzE4ODVi/NGMtZDQ1YS00MTFl/LTg4NGMtZDMwOTk0/Y2Y1OTAzLnBuZw.png" alt="" />
             </div>
         </div>

			<Section>
				<div id="about"></div>
				<Headline
					tagline="About us"
					title="Travelling as a discovery and progress."
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda hic minima quam officiis, nam nobis incidunt. Modi nam, necessitatibus accusamus esse officia ratione provident enim eum ipsa! Consectetur, eos officia."
				/>
				<div>
					<p>Contenido de la sección...</p>
				</div>
				
			</Section>

			<Section>
				<h1>Heading</h1>
				<h2>Heading</h2>
				<h3>Heading</h3>
				<h4>Heading</h4>
				<h5>Heading</h5>
				<h6>Heading</h6>
			</Section>
		</main>
	);
}
