import type { Metadata } from "next";
import "../static/css/globals.scss";
import { inter } from "../utils/fonts";
import { Footer } from "../components/partials/footer";
import Navbar from "../components/partials/navbar";

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
