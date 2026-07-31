"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
	Boxes,
	FileText,
	Snowflake,
	Building2,
	ShoppingBag,
	Cog,
} from "lucide-react";

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

const items = [
	{
		icon: Boxes,
		title: "General Cargo",
		description: "Everyday commercial and personal shipments.",
	},
	{
		icon: Snowflake,
		title: "Frozen Goods",
		description: "Temperature-controlled and perishable cargo.",
	},
	{
		icon: FileText,
		title: "Documents",
		description: "Secure delivery of important documents.",
	},
	{
		icon: Building2,
		title: "Commercial Freight",
		description: "Bulk and business logistics solutions.",
	},
	{
		icon: ShoppingBag,
		title: "E-commerce",
		description: "Reliable fulfilment for online businesses.",
	},
	{
		icon: Cog,
		title: "Industrial Equipment",
		description: "Machinery, parts and specialized cargo.",
	},
];

export default function WhatWeHandle() {
	return (
		<section className="section bg-surface">
			<div className="container-page">
				<div className="mx-auto max-w-3xl text-center">
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						What We Handle
					</p>

					<h2 className="mt-4 text-4xl text-navy md:text-5xl">
						Trusted with every kind of shipment.
					</h2>

					<p className="mt-6 leading-8 text-muted">
						Whether you're sending personal packages or managing
						large commercial freight, our logistics solutions are
						designed to move your cargo safely and efficiently.
					</p>
				</div>

				<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{items.map((item, index) => {
						const Icon = item.icon;

						return (
							<motion.div
								key={item.title}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								variants={fadeUp}
								transition={{ delay: index * 0.08 }}
								className="group rounded-brand border-default bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-luxe"
							>
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-white">
									<Icon className="h-8 w-8" />
								</div>

								<h3 className="mt-6 text-2xl font-display text-navy">
									{item.title}
								</h3>

								<p className="mt-4 leading-7 text-muted">
									{item.description}
								</p>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}