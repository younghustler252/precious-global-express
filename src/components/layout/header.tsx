"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
	ArrowLeft,
	ArrowRight,
	Menu,
	X,
	ChevronRight,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import Logo from "@/components/ui/logo";

const links = [
	{
		label: "Services",
		href: "/services",
	},
	{
		label: "About",
		href: "/#about",
	},
	{
		label: "Why Choose Us",
		href: "/#why-us",
	},
	{
		label: "Contact",
		href: "/contact",
	},
];

export default function Header() {
	const pathname = usePathname();
	const router = useRouter();

	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	const isHome = pathname === "/";

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	const goBack = () => {
		if (window.history.length > 1) {
			router.back();
		} else {
			router.push("/");
		}
	};

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
				isHome && !scrolled
					? "bg-transparent py-5"
					: "glass py-3 shadow-luxe"
			}`}
		>
			<div className="container-page flex items-center justify-between">
				{/* Left */}
				<div className="flex items-center gap-3">
					{!isHome && (
						<button
							onClick={goBack}
							className="flex h-10 w-10 items-center justify-center rounded-full border-default bg-white/80 text-navy transition-all hover:border-gold hover:text-gold lg:hidden"
							aria-label="Go Back"
						>
							<ArrowLeft className="h-5 w-5" />
						</button>
					)}

					<Link href="/">
						<Logo />
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-8 lg:flex">
					{links.map((link) => {
						const active =
							link.href === "/services"
								? pathname.startsWith("/services")
								: pathname === link.href;

						return (
							<Link
								key={link.href}
								href={link.href}
								className={`group relative text-sm font-medium transition-colors ${
									active
										? "text-gold"
										: "text-navy-deep hover:text-navy"
								}`}
							>
								{link.label}

								<span
									className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
										active
											? "w-full"
											: "w-0 group-hover:w-full"
									}`}
								/>
							</Link>
						);
					})}
				</nav>

				{/* Desktop CTA */}
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

				{/* Mobile Menu */}
				<button
					onClick={() => setOpen(!open)}
					className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-navy transition-all hover:bg-white lg:hidden"
					aria-label="Toggle Menu"
				>
					{open ? (
						<X className="h-5 w-5" />
					) : (
						<Menu className="h-5 w-5" />
					)}
				</button>
			</div>

			{/* Mobile Navigation */}
			<div
				className={`overflow-hidden border-t border-default bg-white transition-all duration-300 lg:hidden ${
					open
						? "max-h-[500px] opacity-100"
						: "max-h-0 opacity-0 border-transparent"
				}`}
			>
				<div className="container-page py-6">
					<div className="space-y-2">
						{links.map((link) => {
							const active =
								link.href === "/services"
									? pathname.startsWith("/services")
									: pathname === link.href;

							return (
								<Link
									key={link.href}
									href={link.href}
									className={`flex items-center justify-between rounded-xl px-4 py-4 transition-all ${
										active
											? "bg-gold/10 text-gold"
											: "hover:bg-surface text-navy"
									}`}
								>
									<span className="font-medium">
										{link.label}
									</span>

									<ChevronRight className="h-4 w-4" />
								</Link>
							);
						})}
					</div>

					<div className="mt-6">
						<Link
							href="/quote"
							className="flex items-center justify-center gap-2 rounded-full bg-navy py-3.5 font-medium text-white transition-all hover:bg-gold hover:text-navy"
						>
							Get a Quote

							<ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}