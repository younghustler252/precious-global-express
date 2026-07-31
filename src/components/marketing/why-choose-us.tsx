"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
	ShieldCheck,
	Globe2,
	MapPinCheck,
	Headset,
} from "lucide-react";


const reasons = [
	{
		number: "01",
		title: "Secure Cargo Handling",
		text: "Your shipments are managed with professional processes designed for safety and reliability.",
		icon: ShieldCheck,
	},
	{
		number: "02",
		title: "Global Logistics Network",
		text: "Access reliable transportation solutions through trusted international partners.",
		icon: Globe2,
	},
	{
		number: "03",
		title: "Shipment Visibility",
		text: "Stay informed with tracking and updates throughout the delivery journey.",
		icon: MapPinCheck,
	},
	{
		number: "04",
		title: "Dedicated Support",
		text: "Our team provides assistance from quotation through final delivery.",
		icon: Headset,
	},
];


const reveal: Variants = {
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


export default function WhyChooseUs() {
	return (
		<section id="why-us" className="section bg-surface">
			<div className="container-page grid gap-14 lg:grid-cols-2">

				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={reveal}
				>
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Why Choose Us
					</p>

					<h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">
						Moving cargo with confidence and precision.
					</h2>

					<p className="mt-6 max-w-lg leading-relaxed text-muted">
						At Precious Global Express, we combine reliable logistics
						solutions, trusted partnerships, and professional support
						to deliver a seamless shipping experience.
					</p>


					<div className="mt-10 flex gap-8">
						<div>
							<p className="font-display text-4xl text-navy">
								99%
							</p>

							<p className="text-xs uppercase tracking-widest text-muted">
								Reliability
							</p>
						</div>

						<div>
							<p className="font-display text-4xl text-navy">
								24/7
							</p>

							<p className="text-xs uppercase tracking-widest text-muted">
								Support
							</p>
						</div>
					</div>
				</motion.div>


				<div className="space-y-6">
					{reasons.map((item, index) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={item.number}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								variants={reveal}
								transition={{
									delay: index * 0.1,
								}}
								className="
									group
									flex
									gap-5
									border-b
									border-default
									pb-6
								"
							>
								<div
									className="
										flex
										h-12
										w-12
										shrink-0
										items-center
										justify-center
										rounded-xl
										bg-navy
										text-gold
										transition-all
										duration-500
										group-hover:bg-gold
										group-hover:text-navy
									"
								>
									<Icon className="h-5 w-5" />
								</div>


								<div>
									<div className="flex items-center gap-3">
										<span className="text-sm text-gold">
											{item.number}
										</span>

										<h3 className="font-display text-xl text-navy">
											{item.title}
										</h3>
									</div>

									<p className="mt-2 text-sm leading-relaxed text-muted">
										{item.text}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>

			</div>
		</section>
	);
}
