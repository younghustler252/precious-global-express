"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { motion } from "framer-motion";
import RouteAnimation from "../ui/route-animation";
import { company } from "@/config/company";

const stats = [
	["100+", "Countries"],
	["1k", "Shipments"],
	["5+", "Years"],
	["99.7%", "On-time"],
];

export default function Hero() {
	return (
		<section id="top" className="relative min-h-screen overflow-hidden">
			<Image
				src="/images/hero.jpg"
				alt="Global logistics cargo aircraft, ships and containers"
				fill
				priority
				className="object-cover"
			/>

			<div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy-deep/70 to-navy-dark/95" />
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.78_0.13_85/0.15),transparent_60%)]" />
            <RouteAnimation />
			<div className="relative z-10 container-page min-h-screen flex flex-col justify-center pt-32 pb-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-gold backdrop-blur-md"
				>
					<span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
					Global Freight · Est. {company.founded}
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[88px]"
				>
					Delivering the World with{" "}
					<span className="bg-gradient-to-r from-gold-bright via-gold to-gold-bright bg-clip-text italic text-transparent">
						Speed, Security
					</span>{" "}
					& Excellence.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
				>
					{company.description}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="mt-10 flex flex-col gap-4 sm:flex-row"
				>
					<a
						href="#quote"
						className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-bright px-8 py-4 text-sm font-semibold text-navy shadow-gold transition-transform hover:scale-[1.02]"
					>
						Get a Quote
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>

					<a
						href="#track"
						className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-md hover:bg-white/10"
					>
						<Search className="h-4 w-4" />
						Track Shipment
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.9 }}
					className="mt-16 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl md:grid-cols-4"
				>
					{stats.map(([value, label]) => (
						<div
							key={label}
							className="border-white/10 bg-navy-deep/40 px-6 py-5"
						>
							<div className="font-display text-2xl font-semibold text-gold md:text-3xl">
								{value}
							</div>
							<div className="mt-1 text-xs uppercase tracking-widest text-white/60">
								{label}
							</div>
						</div>
					))}
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60"
			>
				Scroll
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.8, repeat: Infinity }}
				>
					<ChevronDown className="h-4 w-4" />
				</motion.div>
			</motion.div>
		</section>
	);
}
