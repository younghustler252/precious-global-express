export const company = {
	name: "Precious Global Express",
	shortName: "PGE",
	legalName: "Precious Global Express Limited",
	website: "https://preciousglobalexpress.netlify.app",

	tagline: "Delivering the World with Speed, Security & Excellence.",
	slogan: "Your Trusted Global Logistics Partner",

	description:
		"Precious Global Express is an international logistics and freight forwarding company providing secure, reliable, and cost-effective shipping solutions across air, sea, road, express, frozen, and dry cargo services.",

	founded: "2020",

	branding: {
		logo: "/images/logo.png",
		icon: "/images/logo.png",
		favicon: "/favicon.ico",
		appleTouchIcon: "/apple-touch-icon.png",
		manifest: "/site.webmanifest",
	},

	contact: {
		phone: "+234 701 606 3223",
		whatsapp: "+234 701 606 3223",
		email: "schocolee978@gmail.com",
		supportEmail: "",
		salesEmail: "",
		careersEmail: "",
	},

	address: {
		street: "3 Colossus Close, Etal Avenue, Beside NNPC Filling Station",
		city: "Oregun",
		state: "Lagos",
		postalCode: "",
		country: "Nigeria",
		full: "3 Etal Avenue, Beside NNPC Filling Station, Off Kudirat Abiola Way, Oregun, Lagos, Nigeria",
	},

	businessHours: {
		monday: "08:00 AM - 06:00 PM",
		tuesday: "08:00 AM - 06:00 PM",
		wednesday: "08:00 AM - 06:00 PM",
		thursday: "08:00 AM - 06:00 PM",
		friday: "08:00 AM - 06:00 PM",
		saturday: "09:00 AM - 03:00 PM",
		sunday: "Closed",
	},

	socials: {
		facebook: "https://facebook.com/PreciousGlobalExpress",
		instagram: "https://instagram.com/p.cargoconnect",
		x: "https://x.com/pcargoconnect",
		linkedin: "",
		youtube: "",
		tiktok: "https://tiktok.com/@p.connects",
		whatsapp: "https://wa.me/2347016063223",
	},

	theme: {
		primary: "#0A2E6D",
		secondary: "#D4AF37",
		accent: "#C0C0C0",
		dark: "#0B0F17",
		light: "#FFFFFF",
	},

	tracking: {
		prefix: "PGE",
		example: "PGE2400001",
	},
} as const;

export type Company = typeof company;