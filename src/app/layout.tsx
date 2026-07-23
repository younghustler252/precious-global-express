import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

import { seo } from "@/config/seo";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-display",
});

export const metadata: Metadata = {
	title: seo.title,
	description: seo.description,
	keywords: seo.keywords,
	metadataBase: seo.metadataBase,
	creator: seo.creator,
	authors: seo.authors,
	openGraph: seo.openGraph,
	twitter: seo.twitter,
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${playfair.variable} h-full antialiased`}
		>
			<body className="min-h-screen flex flex-col">{children}</body>
		</html>
	);
}
