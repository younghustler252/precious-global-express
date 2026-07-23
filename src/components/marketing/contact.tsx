"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
	ArrowRight,
	Clock,
	Mail,
	MapPin,
	MessageCircle,
	Phone,
} from "lucide-react";

import { company } from "@/config/company";

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

const contactInfo = [
	{
		icon: Phone,
		title: "Phone",
		value: company.contact.phone,
	},
	{
		icon: Mail,
		title: "Email",
		value: company.contact.email,
	},
	{
		icon: MapPin,
		title: "Office",
		value: company.address.full,
	},
	{
		icon: Clock,
		title: "Business Hours",
		value: "Mon - Fri: 08:00 AM - 06:00 PM",
	},
];

export default function Contact() {
	return (
		<section id="contact" className="section bg-surface">
			<div className="container-page">
				{/* Heading */}
				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-80px" }}
					variants={fadeUp}
					className="mx-auto max-w-3xl text-center"
				>
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Contact Us
					</p>

					<h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">
						Let&apos;s move your cargo worldwide.
					</h2>

					<p className="mt-5 leading-relaxed text-muted">
						Have questions about shipping, freight forwarding,
						or logistics solutions? Our team is ready to assist
						you with reliable global delivery services.
					</p>
				</motion.div>


				<div className="mt-14 grid gap-8 lg:grid-cols-5">
					{/* Contact Form */}
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-80px" }}
						variants={fadeUp}
						className="
							lg:col-span-3
							rounded-brand
							border-default
							bg-white
							p-8
							shadow-luxe
						"
					>
						<h3 className="font-display text-2xl text-navy">
							Send us a message
						</h3>

						<p className="mt-2 text-sm text-muted">
							Fill in your details and our logistics team will
							get back to you.
						</p>

						<form className="mt-8 space-y-5">
							<div className="grid gap-5 md:grid-cols-2">
								<input
									type="text"
									placeholder="Full Name"
									className="
										h-12
										w-full
										rounded-xl
										border-default
										bg-surface
										px-4
										text-sm
										outline-none
										transition
										focus:border-gold
									"
								/>

								<input
									type="email"
									placeholder="Email Address"
									className="
										h-12
										w-full
										rounded-xl
										border-default
										bg-surface
										px-4
										text-sm
										outline-none
										transition
										focus:border-gold
									"
								/>
							</div>

							<input
								type="text"
								placeholder="Phone Number"
								className="
									h-12
									w-full
									rounded-xl
									border-default
									bg-surface
									px-4
									text-sm
									outline-none
									transition
									focus:border-gold
								"
							/>

							<input
								type="text"
								placeholder="Subject"
								className="
									h-12
									w-full
									rounded-xl
									border-default
									bg-surface
									px-4
									text-sm
									outline-none
									transition
									focus:border-gold
								"
							/>

							<textarea
								rows={5}
								placeholder="Your message..."
								className="
									w-full
									resize-none
									rounded-xl
									border-default
									bg-surface
									p-4
									text-sm
									outline-none
									transition
									focus:border-gold
								"
							/>

							<button
								type="button"
								className="
									group
									inline-flex
									items-center
									gap-2
									rounded-full
									bg-navy
									px-7
									py-3.5
									text-sm
									font-medium
									text-white
									transition-all
									hover:shadow-gold
								"
							>
								Send Message

								<ArrowRight
									className="
										h-4
										w-4
										transition-transform
										group-hover:translate-x-1
									"
								/>
							</button>
						</form>
					</motion.div>


					{/* Contact Details */}
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-80px" }}
						variants={fadeUp}
						className="lg:col-span-2 space-y-5"
					>
						{contactInfo.map((item) => {
							const Icon = item.icon;

							return (
								<div
									key={item.title}
									className="
										flex
										gap-4
										rounded-brand
										border-default
										bg-white
										p-5
										transition-all
										hover:border-gold/40
										hover:shadow-luxe
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
										"
									>
										<Icon className="h-5 w-5 text-gold" />
									</div>

									<div>
										<p className="text-xs uppercase tracking-widest text-gold">
											{item.title}
										</p>

										<p className="mt-1 text-sm text-navy-deep">
											{item.value}
										</p>
									</div>
								</div>
							);
						})}


						<a
							href={company.socials.whatsapp}
							className="
								flex
								items-center
								justify-center
								gap-2
								rounded-full
								bg-gold
								px-6
								py-4
								text-sm
								font-semibold
								text-navy
								transition-all
								hover:shadow-gold
							"
						>
							<MessageCircle className="h-5 w-5" />

							Chat on WhatsApp
						</a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
