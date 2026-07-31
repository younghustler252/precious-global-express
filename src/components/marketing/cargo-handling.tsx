"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Check } from "lucide-react";

const fadeUp: Variants = {
	hidden: {
		opacity: 0,
		y: 30,
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

const features = [
	"Secure container loading & unloading",
	"Professional warehouse handling",
	"Safe palletized cargo preparation",
	"Reliable worldwide distribution",
	"Temperature-sensitive cargo support",
	"Real-time shipment coordination",
];

export default function CargoHandling() {
	return (
		<section className="section bg-white">
			<div className="container-page">
				<div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
					{/* Content */}
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={fadeUp}
					>
						<p className="text-xs uppercase tracking-[0.3em] text-gold">
							Cargo Handling
						</p>

						<h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">
							Handled With Care
							<br />
							From Pickup to Delivery.
						</h2>

						<p className="mt-6 leading-8 text-muted">
							Every shipment is managed with precision throughout
							the logistics journey. From warehouse preparation and
							container loading to final delivery, our experienced
							team ensures your cargo is handled securely and
							efficiently every step of the way.
						</p>

						<div className="mt-10 grid gap-5">
							{features.map((feature) => (
								<div
									key={feature}
									className="flex items-start gap-4"
								>
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
										<Check className="h-5 w-5" />
									</div>

									<div>
										<p className="font-medium text-navy">
											{feature}
										</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<div className="relative overflow-hidden rounded-brand">
							<Image
								src="/images/cargo-handling.png"
								alt="Cargo handling and warehouse logistics"
								width={900}
								height={700}
								className="h-[550px] w-full object-cover transition duration-700 hover:scale-105"
							/>
						</div>

						{/* Floating Badge */}
						<div className="absolute -bottom-8 left-8 rounded-brand border-default bg-white px-8 py-6 shadow-luxe">
							<p className="text-xs uppercase tracking-[0.25em] text-gold">
								Trusted Logistics
							</p>

							<div className="mt-2 text-3xl font-semibold text-navy">
								End-to-End
							</div>

							<p className="mt-2 text-sm text-muted">
								Secure handling for every shipment.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}