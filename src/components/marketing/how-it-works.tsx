"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
	FileText,
	PackageCheck,
	Ship,
	Globe2,
	Truck,
} from "lucide-react";

import RouteTracker from "./route-tracker";


const steps = [
	{
		number: "01",
		title: "Request a Quote",
		description:
			"Tell us your shipment details and receive a tailored logistics solution.",
		icon: FileText,
	},
	{
		number: "02",
		title: "Package Pickup",
		description:
			"We collect your cargo and prepare it for secure transportation.",
		icon: PackageCheck,
	},
	{
		number: "03",
		title: "Global Transit",
		description:
			"Your shipment moves through our trusted international network.",
		icon: Ship,
	},
	{
		number: "04",
		title: "Customs Clearance",
		description:
			"We manage documentation and customs procedures.",
		icon: Globe2,
	},
	{
		number: "05",
		title: "Final Delivery",
		description:
			"Your cargo arrives safely at its destination.",
		icon: Truck,
	},
];


const reveal: Variants = {
	hidden: {
		opacity: 0,
		x: 30,
	},

	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};


export default function HowItWorks() {
	return (
		<section className="section bg-navy-dark text-white overflow-hidden">
			<div className="container-page">

				<div className="max-w-3xl">
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						How It Works
					</p>

					<h2 className="mt-4 font-display text-4xl md:text-5xl">
						Every shipment follows a precise journey.
					</h2>

					<p className="mt-5 text-white/60">
						From pickup to delivery, PGE manages every checkpoint
						with security and transparency.
					</p>
				</div>


				<div className="relative mt-16">

					<RouteTracker />


					<div className="space-y-14">
						{steps.map((step) => {
							const Icon = step.icon;

							return (
								<motion.div
									key={step.number}
									initial="hidden"
									whileInView="show"
									viewport={{
										once: true,
										margin: "-80px",
									}}
									variants={reveal}
									className="relative flex gap-8 md:pl-20"
								>

									<div className="
										relative
										z-10
										flex
										h-12
										w-12
										shrink-0
										items-center
										justify-center
										rounded-full
										border
										border-gold/40
										bg-navy
										text-gold
									">
										<Icon className="h-5 w-5" />
									</div>


									<div className="
										group
										border-b
										border-white/10
										pb-10
										transition-all
										duration-500
										hover:border-gold/40
									">

										<div className="flex items-center gap-4">

											<span className="
												font-display
												text-3xl
												text-gold/40
											">
												{step.number}
											</span>

											<h3 className="
												font-display
												text-2xl
											">
												{step.title}
											</h3>

										</div>


										<p className="
											mt-4
											max-w-xl
											text-sm
											leading-relaxed
											text-white/60
											group-hover:text-white/80
											transition-colors
										">
											{step.description}
										</p>

									</div>

								</motion.div>
							);
						})}
					</div>

				</div>

			</div>
		</section>
	);
}
