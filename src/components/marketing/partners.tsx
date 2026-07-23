"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const partners = [
	"DHL",
	"FedEx",
	"Maersk",
	"UPS",
	"Emirates SkyCargo",
];

// Duplicate for seamless infinite marquee
const partnerList = [...partners, ...partners];

const reveal: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function Partners() {
	return (
		<section className="section-sm bg-white">
			<div className="container-page">
				<div className="text-center">
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Trusted Partners
					</p>

					<h2 className="mt-4 font-display text-3xl text-navy md:text-4xl">
						Connected with global logistics leaders.
					</h2>

					<p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted">
						Through trusted partnerships and worldwide networks,
						we provide reliable solutions across borders.
					</p>
				</div>

				{/* Mobile Infinite Marquee */}
				<div className="relative mt-12 overflow-hidden md:hidden">
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />

					<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

					<motion.div
						className="flex w-max gap-4"
						animate={{
							x: ["0%", "-50%"],
						}}
						transition={{
							duration: 18,
							ease: "linear",
							repeat: Infinity,
						}}
					>
						{partnerList.map((partner, index) => (
							<div
								key={`${partner}-${index}`}
								className="
									group
									flex
									h-24
									w-44
									shrink-0
									items-center
									justify-center
									rounded-brand
									border-default
									bg-surface
									transition-all
									duration-300
								"
							>
								<p className="font-display text-xl font-semibold text-navy/60">
									{partner}
								</p>
							</div>
						))}
					</motion.div>
				</div>

				{/* Desktop Grid */}
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={{
						show: {
							transition: {
								staggerChildren: 0.12,
							},
						},
					}}
					className="
						hidden
						mt-12
						grid
						grid-cols-5
						items-center
						gap-6
						md:grid
					"
				>
					{partners.map((partner) => (
						<motion.div
							key={partner}
							variants={reveal}
							className="
								group
								relative
								flex
								h-24
								items-center
								justify-center
								overflow-hidden
								rounded-brand
								border-default
								bg-surface
								transition-all
								duration-500
								hover:-translate-y-1
								hover:border-gold/40
								hover:shadow-luxe
							"
						>
							<span
								className="
									absolute
									inset-x-0
									bottom-0
									h-1
									origin-left
									scale-x-0
									bg-gold
									transition-transform
									duration-500
									group-hover:scale-x-100
								"
							/>

							<p
								className="
									font-display
									text-xl
									font-semibold
									text-navy/60
									transition-all
									duration-500
									group-hover:text-navy
								"
							>
								{partner}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
