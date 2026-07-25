"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

import Logo from "@/components/ui/logo";

const links = [
	["Services", "/#services"],
	["About", "/#about"],
	["How It Works", "/#how-it-works"],
	["Why Choose Us", "/#why-us"],
	["Contact", "/contact"],
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
				scrolled
					? "glass shadow-luxe py-3"
					: "bg-transparent py-5"
			}`}
		>
			<div className="container-page flex items-center justify-between">
				<Link href="/">
					<Logo />
				</Link>

				<nav className="hidden items-center gap-8 lg:flex">
					{links.map(([label, href]) => (
						<Link
							key={href}
							href={href}
							className="group relative text-sm text-navy-deep transition-colors hover:text-navy"
						>
							{label}

							<span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
						</Link>
					))}
				</nav>

				<div className="hidden lg:block">
					<Link
						href="/quote"
						className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-6 py-3 text-sm font-medium text-white shadow-luxe"
					>
						<span className="absolute inset-0 translate-y-full bg-gold transition-transform duration-500 group-hover:translate-y-0" />

						<span className="relative z-10">
							Get a Quote
						</span>

						<ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
				</div>

				<button
					onClick={() => setOpen(!open)}
					className="text-navy lg:hidden"
					aria-label="Toggle menu"
				>
					{open ? <X /> : <Menu />}
				</button>
			</div>

			{open && (
				<div className="mt-4 border-t border-default bg-white px-6 py-6 shadow-luxe lg:hidden">
					<div className="space-y-5">
						{links.map(([label, href]) => (
							<Link
								key={href}
								href={href}
								onClick={() => setOpen(false)}
								className="block text-navy-deep transition-colors hover:text-gold"
							>
								{label}
							</Link>
						))}

						<Link
							href="/quote"
							onClick={() => setOpen(false)}
							className="block rounded-full bg-navy py-3 text-center text-white"
						>
							Get a Quote
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}