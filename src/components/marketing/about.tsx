"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

import { company } from "@/config/company";

const points = [
	"International air, sea and road freight",
	"Secure cargo handling and tracking",
	"Reliable global logistics partnerships",
	"Professional customs clearance support",
];

const fadeLeft: Variants = {
	hidden: {
		opacity: 0,
		x: -40,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

const fadeRight: Variants = {
	hidden: {
		opacity: 0,
		x: 40,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

export default function About() {
	return (
		<section id="about" className="section bg-white">
			<div className="container-page grid items-center gap-14 lg:grid-cols-2">
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
					variants={fadeLeft}
					className="relative"
				>
					<div className="relative overflow-hidden rounded-brand">
						<Image
							src="/images/warehouse.jpg"
							alt="Precious Global Express warehouse facility"
							width={700}
							height={700}
							className="h-[520px] w-full object-cover"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 to-transparent" />
					</div>

					<div className="absolute -bottom-6 -right-6 rounded-2xl bg-navy p-6 text-white shadow-luxe">
						<p className="font-display text-4xl text-gold">
							{company.founded}
						</p>

						<p className="mt-1 text-xs uppercase tracking-widest text-white/60">
							Established
						</p>
					</div>

					<div className="absolute -left-6 top-12 hidden rounded-xl border border-gold/30 bg-white p-5 shadow-luxe md:block">
						<p className="font-display text-3xl text-navy">
							120+
						</p>

						<p className="text-xs uppercase tracking-widest text-muted">
							Countries Served
						</p>
					</div>
				</motion.div>


				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
					variants={fadeRight}
				>
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						About PGE
					</p>

					<h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">
						Your trusted partner in global logistics.
					</h2>

					<p className="mt-6 leading-relaxed text-muted">
						{company.description}
					</p>

					<div className="mt-8 space-y-4">
						{points.map((point) => (
							<div
								key={point}
								className="flex items-center gap-3 text-sm text-navy-deep"
							>
								<CheckCircle className="h-5 w-5 text-gold" />
								{point}
							</div>
						))}
					</div>

					<a
						href="#contact"
						className="group mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-white transition-all hover:shadow-gold"
					>
						Learn More

						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</a>
				</motion.div>
			</div>
		</section>
	);
}
