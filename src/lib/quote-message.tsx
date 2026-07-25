import { company } from "@/config/company";

interface QuoteData {
	name: string;
	companyName?: string;
	phone: string;
	email?: string;
	service: string;
	origin: string;
	destination: string;
	weight: string;
	cargo: string;
	date?: string;
	details?: string;
}

export function buildQuoteMessage(data: QuoteData) {
	return `
Hello ${company.name},

I would like to request a shipping quote.

Name: ${data.name}
Company: ${data.companyName || "N/A"}
Phone: ${data.phone}
Email: ${data.email || "N/A"}

Service: ${data.service}

Origin: ${data.origin}
Destination: ${data.destination}

Cargo Type: ${data.cargo}
Weight: ${data.weight}

Preferred Shipping Date: ${data.date || "Not specified"}

Additional Details:
${data.details || "None"}

Thank you.
	`.trim();
}