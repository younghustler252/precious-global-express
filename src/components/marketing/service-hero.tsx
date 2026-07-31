"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesHero() {
	return (
		<section className="relative h-[55vh] min-h-[420px] overflow-hidden">
			<Image
				src="/images/sea.jpg"
				alt="International logistics and cargo services"
				fill
				priority
				className="object-cover"
			/>

			{/* Overlay */}
			{/* <div className="absolute inset-0 bg-navy/65" /> */}

			{/* Gradient */}
			{/* <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/60 to-transparent" /> */}

			<div className="container-page relative z-10 flex h-full items-center">
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="max-w-3xl"
				>
					<p className="text-xs uppercase tracking-[0.35em] text-gold">
						Our Services
					</p>

					<h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-white md:text-6xl">
						Complete Logistics
						<br />
						Solutions You Can Trust
					</h1>

					<p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
						From air and sea freight to road transport, frozen cargo,
						and express delivery, we provide reliable shipping
						solutions tailored to businesses and individuals across
						the globe.
					</p>
				</motion.div>
			</div>
		</section>
	);
}