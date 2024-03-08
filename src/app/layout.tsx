import type { Metadata } from "next";
import "../components/static/css/globals.scss";
import { inter } from "../utils/fonts";
import { Footer } from "../components/partials/footer";
import Navbar from "../components/partials/navbar";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


export const metadata: Metadata = {
	title: "Grupo Software",
	description: "StarUp GrupoSoftware website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="top-navigation">
					<p className="adress">Al. Brucknera Aleksandra 63, Wrocław 51-410</p>
					<div className="phone-mail">
						<div className="phone"><FaPhone className="icon" /> <p>+1 809 678 1819</p></div>
						<div className="mail"><IoMdMail className="icon" /> <p>gruposoftware@gmail.com</p></div>
					</div>
				</div>
				<Navbar />

				{children}

				<Footer />
			</body>
		</html>
	);
}
