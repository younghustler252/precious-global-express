import type { MetadataRoute } from "next";

import { company } from "@/config/company";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: company.website,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},

		{
			url: `${company.website}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},

		{
			url: `${company.website}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},

		{
			url: `${company.website}/quote`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];
}
