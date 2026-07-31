"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { Variants } from "framer-motion";

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

const services = [
	{
		title: "Air Freight",
		label: "Fast Delivery",
		image: "/images/air.jpg",
		description:
			"Fast and secure international air freight for urgent shipments with dependable transit times.",
		items: [
			"Express delivery",
			"Real-time tracking",
			"Customs clearance",
			"Door-to-door service",
		],
	},
	{
		title: "Sea Freight",
		label: "Global Shipping",
		image: "/images/sea.jpg",
		description:
			"Cost-effective ocean freight solutions for commercial and large-volume international cargo.",
		items: [
			"FCL & LCL shipping",
			"Cargo insurance",
			"Port-to-port delivery",
			"Global coverage",
		],
	},
	{
		title: "Road Logistics",
		label: "Ground Transport",
		image: "/images/truck.jpg",
		description:
			"Reliable road transportation connecting ports, warehouses and final destinations.",
		items: [
			"Door-to-door delivery",
			"Scheduled pickups",
			"Last-mile logistics",
			"Secure handling",
		],
	},
	{
		title: "Frozen Shipment",
		label: "Temperature Controlled",
		image: "/images/frozen.png",
		description:
			"Cold-chain logistics designed for frozen and temperature-sensitive cargo.",
		items: [
			"Cold-chain monitoring",
			"Specialized packaging",
			"Safe handling",
			"Quality assurance",
		],
	},
];

export default function Services() {
	return (
		<section className="section bg-white">
			<div className="container-page">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						What We Offer
					</p>

					<h2 className="mt-4 text-4xl text-navy md:text-5xl">
						Logistics services built around your shipping needs.
					</h2>

					<p className="mt-6 leading-8 text-muted">
						Whether your shipment is urgent, oversized, temperature
						sensitive or commercial, we provide dependable logistics
						solutions tailored to your requirements.
					</p>
				</div>

				<div className="mt-20 space-y-24">
					{services.map((service, index) => {
						const reverse = index % 2 === 1;

						return (
							<motion.div
								key={service.title}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, margin: "-100px" }}
								variants={fadeUp}
								className={`grid items-center gap-12 lg:grid-cols-2 ${
									reverse ? "lg:[&>*:first-child]:order-2" : ""
								}`}
							>
								<div className="relative overflow-hidden rounded-brand aspect-[4/3]">
									<Image
										src={service.image}
										alt={service.title}
										fill
										className="object-cover transition duration-700 hover:scale-105"
									/>
								</div>

								<div>
									<p className="text-xs uppercase tracking-[0.3em] text-gold">
										{service.label}
									</p>

									<h3 className="mt-4 font-display text-4xl text-navy">
										{service.title}
									</h3>

									<p className="mt-6 leading-8 text-muted">
										{service.description}
									</p>

									<ul className="mt-8 grid gap-4">
										{service.items.map((item) => (
											<li
												key={item}
												className="flex items-center gap-3"
											>
												<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">
													<Check className="h-4 w-4" />
												</div>

												<span className="text-navy">
													{item}
												</span>
											</li>
										))}
									</ul>

									<Link
										href="/quote"
										className="mt-10 inline-flex items-center gap-2 font-medium text-navy transition hover:text-gold"
									>
										Request a Quote

										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}