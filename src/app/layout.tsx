import type { Metadata } from "next";
import "../components/static/css/globals.scss";
import { inter } from "../utils/fonts";
import { Footer } from "../components/partial/footer";
import Navbar from "../components/partial/navbar";

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
				<Navbar />

				{children}

				<Footer />
			</body>
		</html>
	);
}
