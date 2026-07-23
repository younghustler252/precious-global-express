export const company = {
    // ==========================================
    // Company Identity
    // ==========================================
    name: "Precious Global Express",

    shortName: "PGE",

    legalName: "Precious Global Express Limited",

    tagline: "Delivering the World with Speed, Security & Excellence.",

    slogan: "Your Trusted Global Logistics Partner",

    description:
        "Precious Global Express is an international logistics and freight forwarding company providing secure, reliable, and cost-effective shipping solutions across air, sea, road, express, frozen, and dry cargo services.",

    founded: "2020",

    // ==========================================
    // Branding
    // ==========================================
    branding: {
        logo: "/images/logo.png",

        logoLight: "/logo-light.png",

        logoDark: "/logo-dark.png",

        icon: "/images/logo.png",

        favicon: "/favicon.ico",

        appleTouchIcon: "/apple-touch-icon.png",

        manifest: "/site.webmanifest",
    },

    // ==========================================
    // Contact Information
    // ==========================================
    contact: {
        phone: "+234 XXX XXX XXXX",

        whatsapp: "+234 XXX XXX XXXX",

        email: "info@preciousglobalexpress.com",

        supportEmail: "support@preciousglobalexpress.com",

        salesEmail: "sales@preciousglobalexpress.com",

        careersEmail: "careers@preciousglobalexpress.com",
    },

    // ==========================================
    // Office Address
    // ==========================================
    address: {
        street: "Your Office Address",

        city: "Lagos",

        state: "Lagos State",

        postalCode: "",

        country: "Nigeria",

        full: "Your Office Address, Lagos, Lagos State, Nigeria",
    },

    // ==========================================
    // Business Hours
    // ==========================================
    businessHours: {
        monday: "08:00 AM - 06:00 PM",

        tuesday: "08:00 AM - 06:00 PM",

        wednesday: "08:00 AM - 06:00 PM",

        thursday: "08:00 AM - 06:00 PM",

        friday: "08:00 AM - 06:00 PM",

        saturday: "09:00 AM - 03:00 PM",

        sunday: "Closed",
    },

    // ==========================================
    // Social Media
    // ==========================================
    socials: {
        facebook: "https://facebook.com/",

        instagram: "https://instagram.com/",

        x: "https://x.com/",

        linkedin: "https://linkedin.com/company/",

        youtube: "https://youtube.com/",

        tiktok: "https://tiktok.com/",

        whatsapp: "https://wa.me/234XXXXXXXXXX",
    },

    // ==========================================
    // Theme
    // ==========================================
    theme: {
        primary: "#0A2E6D",

        secondary: "#D4AF37",

        accent: "#C0C0C0",

        dark: "#0B0F17",

        light: "#FFFFFF",
    },

    // ==========================================
    // Tracking
    // ==========================================
    tracking: {
        prefix: "PGE",

        example: "PGE2400001",
    },
} as const;

export type Company = typeof company;