import { Metadata } from "next"; 
import { company } from "./company";

export const seo: Metadata = {
	title: {
		default: `${company.name} | ${company.slogan}`,
		template: `%s | ${company.shortName}`,
	},

	description: company.description,

	keywords: [
		"Precious Global Express",
		"PGE logistics",
		"logistics company Nigeria",
		"freight forwarding Nigeria",
		"international shipping",
		"air freight services",
		"sea freight services",
		"cargo shipping Nigeria",
		"global logistics partner",
		"express delivery Nigeria",
	],

	// ✅ Correct Next.js property implementation
	metadataBase: new URL("https://preciousglobalexpress.com"),
	alternates: {
		canonical: "/",
	},

	creator: company.name,

	authors: [{ name: company.name }],

	openGraph: {
		type: "website",
		locale: "en_NG",
		siteName: company.name,
		images: [
			{
				url: company.branding.logo,
				width: 1200,
				height: 630,
				alt: company.name,
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		images: [company.branding.logo],
	},
};

export type SEO = typeof seo;
