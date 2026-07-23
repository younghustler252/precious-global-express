import type { Metadata } from "next";
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

	metadataBase: new URL(company.website),


	alternates: {
		canonical: "/",
	},

	creator: company.name,

	authors: [
		{
			name: company.name,
		},
	],

	applicationName: company.name,

	category: "Logistics",

	robots: {
		index: true,
		follow: true,
	},

	icons: {
		icon: company.branding.favicon,
		apple: company.branding.appleTouchIcon,
	},

	openGraph: {
		type: "website",
		locale: "en_NG",
		siteName: company.name,
		title: `${company.name} | ${company.slogan}`,
		description: company.description,
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
		title: company.name,
		description: company.description,
		images: [
			company.branding.logo,
		],
	},
};

export type SEO = typeof seo;
