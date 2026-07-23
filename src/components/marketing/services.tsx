"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


import ServiceIcon from "@/components/ui/service-icon";

const fadeUp: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
	},

	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};


const services = [
	{
		type: "air",
		label: "Fast Delivery",
		title: "Air Cargo",
		description:
			"Fast and efficient air freight solutions for time-sensitive shipments worldwide with premium handling.",
		items: [
			"Express delivery options",
			"Real-time tracking",
			"Customs clearance",
			"Door-to-door service",
		],
	},
	{
		type: "sea",
		label: "Cost Effective",
		title: "Sea Cargo",
		description:
			"Cost-effective ocean freight solutions for large-scale international shipments with reliable scheduling.",
		items: [
			"Full container load (FCL)",
			"Less than container load (LCL)",
			"Port-to-port delivery",
			"Cargo insurance",
		],
	},
	{
		type: "frozen",
		label: "Specialized",
		title: "Frozen Shipment",
		description:
			"Temperature-controlled logistics for perishable and frozen goods with precision monitoring.",
		items: [
			"Cold chain management",
			"Temperature monitoring",
			"Specialized packaging",
			"Quality assurance",
		],
	},
	{
		type: "dhl",
		label: "Express Partner",
		title: "DHL Express",
		description:
			"Premium DHL express delivery for fast and secure international shipping with reliable timelines.",
		items: [
			"Express worldwide delivery",
			"Real-time tracking",
			"Customs clearance",
			"Priority handling",
		],
	},
	{
		type: "fedex",
		label: "Express Partner",
		title: "FedEx Express",
		description:
			"Reliable FedEx shipping for time-critical and high-value shipments with signature confirmation.",
		items: [
			"Overnight delivery",
			"Package tracking",
			"International express",
			"Signature confirmation",
		],
	},
];

export default function Services() {
	return (
		<section id="services" className="section bg-surface">
			<div className="container-page">
				<div className="max-w-3xl">
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Our Services
					</p>

					<h2 className="mt-4 text-4xl text-navy md:text-5xl">
						Global logistics solutions built for every shipment.
					</h2>

					<p className="mt-5 text-muted leading-relaxed">
						From air and ocean freight to specialized cargo solutions,
						we deliver secure and reliable transportation worldwide.
					</p>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true, margin: "-80px" }}
							variants={fadeUp}
							transition={{ delay: index * 0.08 }}
							className="
								group
								relative
								overflow-hidden
								rounded-brand
								border-default
								bg-white
								p-8
								transition-all
								duration-500
								hover:-translate-y-2
								hover:border-gold/40
								hover:shadow-luxe
							"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-navy-deep to-navy opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

							<div className="relative z-10">
								<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold ring-1 ring-gold/30 transition-all duration-500 group-hover:bg-white/10 group-hover:ring-gold/60">
									<ServiceIcon type={service.type as any} />
								</div>

								<p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">
									{service.label}
								</p>

								<h3 className="mt-2 font-display text-2xl text-navy transition-colors duration-500 group-hover:text-white">
									{service.title}
								</h3>

								<p className="mt-4 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/70">
									{service.description}
								</p>

								<ul className="mt-6 space-y-2 text-sm text-navy-deep transition-colors duration-500 group-hover:text-white/80">
									{service.items.map((item) => (
										<li key={item}>
											<span className="text-gold">✓</span> {item}
										</li>
									))}
								</ul>

								<div className="mt-6 text-xs uppercase tracking-widest text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
									Explore Service →
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
