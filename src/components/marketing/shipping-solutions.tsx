"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

const solutions = [
	{
		title: "Air Freight",
		eyebrow: "Fast Delivery",
		description:
			"Fast and secure international air freight for urgent shipments with reliable transit times.",
		image: "/images/air.jpg",
		href: "/services/air",
	},
	{
		title: "Sea Freight",
		eyebrow: "Global Shipping",
		description:
			"Affordable ocean freight solutions for commercial, bulk and international cargo.",
		image: "/images/sea.jpg",
		href: "/services/sea",
	},
	{
		title: "Road Logistics",
		eyebrow: "Door-to-Door",
		description:
			"Reliable ground transportation connecting ports, warehouses and final destinations.",
		image: "/images/truck.jpg",
		href: "/services/truck",
	},
];

export default function ShippingSolutions() {
	return (
		<section className="section bg-white">
			<div className="container-page">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Shipping Solutions
					</p>

					<h2 className="mt-4 text-4xl text-navy md:text-5xl">
						Reliable logistics across air, sea and road.
					</h2>

					<p className="mt-6 leading-relaxed text-muted">
						From urgent air freight to large-scale ocean cargo and
						door-to-door transportation, we connect your shipments to
						destinations worldwide through our trusted logistics network.
					</p>
				</div>

				<div className="mt-16 grid gap-8 lg:grid-cols-3">
					{solutions.map((solution, index) => (
						<motion.div
							key={solution.title}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-100px" }}
							variants={fadeUp}
							transition={{ delay: index * 0.12 }}
						>
							<Link
								href={solution.href}
								className="group relative block overflow-hidden rounded-brand"
							>
								<div className="relative aspect-[4/5] overflow-hidden">
									<Image
										src={solution.image}
										alt={solution.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-110"
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/40 to-transparent" />
								</div>

								<div className="absolute inset-x-0 bottom-0 p-8">
									<p className="text-xs uppercase tracking-[0.3em] text-gold">
										{solution.eyebrow}
									</p>

									<h3 className="mt-3 font-display text-3xl text-white">
										{solution.title}
									</h3>

									<p className="mt-4 max-w-sm leading-relaxed text-white/80">
										{solution.description}
									</p>

									<div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold transition-all duration-300 group-hover:translate-x-2">
										Explore Service
										<ArrowRight className="h-4 w-4" />
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>

				<div className="mt-16 text-center">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-navy"
					>
						View All Services
						<ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}