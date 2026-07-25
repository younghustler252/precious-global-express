"use client";

import { MessageCircle } from "lucide-react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { company } from "@/config/company";

export default function MarketingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />

			<main className="flex-1">
				{children}
			</main>

			<a
				href={company.socials.whatsapp}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chat with us on WhatsApp"
				className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
			>
				<MessageCircle className="h-7 w-7" />
			</a>

			<Footer />
		</div>
	);
}