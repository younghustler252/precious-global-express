"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	CheckCircle,
	Globe,
	ShieldCheck,
	Truck,
} from "lucide-react";

import { company } from "@/config/company";

const services = [
	"Air Freight",
	"Sea Freight",
	"Road Freight",
	"Express Delivery",
	"Frozen Cargo",
	"Dry Cargo",
];

const benefits = [
	{
		icon: Globe,
		title: "Global Network",
		text: "Reliable international shipping solutions across multiple destinations.",
	},
	{
		icon: ShieldCheck,
		title: "Secure Handling",
		text: "Professional cargo handling with safety and tracking support.",
	},
	{
		icon: Truck,
		title: "Door-to-Door",
		text: "Convenient delivery solutions from pickup to final destination.",
	},
];

export default function QuoteForm() {
	return (
		<section className="section bg-surface">
			<div className="container-page">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-3xl text-center"
				>
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Request A Quote
					</p>

					<h1 className="mt-4 font-display text-4xl text-navy md:text-5xl">
						Get a customized shipping solution.
					</h1>

					<p className="mt-5 leading-relaxed text-muted">
						Tell us about your shipment requirements and our
						logistics team will prepare the best solution for you.
					</p>
				</motion.div>


				<div className="mt-14 grid gap-8 lg:grid-cols-5">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.6 }}
						className="lg:col-span-3 rounded-brand border-default bg-white p-8 shadow-luxe"
					>
						<h2 className="font-display text-2xl text-navy">
							Shipment Details
						</h2>

						<p className="mt-2 text-sm text-muted">
							Provide your cargo information and we will contact
							you with a quotation.
						</p>

						<form className="mt-8 space-y-5">
							<div className="grid gap-5 md:grid-cols-2">
								<input
									type="text"
									placeholder="Full Name"
									className="h-12 rounded-xl border-default bg-surface px-4 text-sm outline-none focus:border-gold"
								/>

								<input
									type="email"
									placeholder="Email Address"
									className="h-12 rounded-xl border-default bg-surface px-4 text-sm outline-none focus:border-gold"
								/>
							</div>

							<input
								type="tel"
								placeholder="Phone / WhatsApp Number"
								className="h-12 w-full rounded-xl border-default bg-surface px-4 text-sm outline-none focus:border-gold"
							/>

							<select className="h-12 w-full rounded-xl border-default bg-surface px-4 text-sm text-muted outline-none focus:border-gold">
								<option>Select Shipping Service</option>

								{services.map((service) => (
									<option key={service}>
										{service}
									</option>
								))}
							</select>

							<div className="grid gap-5 md:grid-cols-2">
								<input
									type="text"
									placeholder="Origin Country"
									className="h-12 rounded-xl border-default bg-surface px-4 text-sm outline-none focus:border-gold"
								/>

								<input
									type="text"
									placeholder="Destination Country"
									className="h-12 rounded-xl border-default bg-surface px-4 text-sm outline-none focus:border-gold"
								/>
							</div>

							<div className="grid gap-5 md:grid-cols-2">
								<input
									type="text"
									placeholder="Cargo Weight / Quantity"
									className="h-12 rounded-xl border-default bg-surface px-4 text-sm outline-none focus:border-gold"
								/>

								<input
									type="text"
									placeholder="Cargo Type"
									className="h-12 rounded-xl border-default bg-surface px-4 text-sm outline-none focus:border-gold"
								/>
							</div>

							<textarea
								rows={5}
								placeholder="Additional shipment details..."
								className="w-full resize-none rounded-xl border-default bg-surface p-4 text-sm outline-none focus:border-gold"
							/>

							<button
								type="button"
								className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-white transition-all hover:shadow-gold"
							>
								Request Quote

								<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
							</button>
						</form>
					</motion.div>


					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.6 }}
						className="space-y-6 lg:col-span-2"
					>
						<div className="rounded-brand bg-navy p-8 text-white shadow-luxe">
							<p className="text-xs uppercase tracking-[0.3em] text-gold">
								{company.slogan}
							</p>

							<h3 className="mt-4 font-display text-3xl">
								{company.tagline}
							</h3>

							<p className="mt-5 text-sm leading-relaxed text-white/70">
								{company.description}
							</p>
						</div>


						<div className="space-y-4">
							{benefits.map((item) => {
								const Icon = item.icon;

								return (
									<div
										key={item.title}
										className="flex gap-4 rounded-brand border-default bg-white p-5"
									>
										<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy">
											<Icon className="h-5 w-5 text-gold" />
										</div>

										<div>
											<h4 className="font-display text-lg text-navy">
												{item.title}
											</h4>

											<p className="mt-1 text-sm text-muted">
												{item.text}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
