"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Package, MapPin, Ship } from "lucide-react";


const reveal: Variants = {
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


export default function GetQuote() {
	return (
		<section
			id="quote"
			className="
				relative
				overflow-hidden
				bg-navy-dark
				section
				text-white
			"
		>

			<div
				className="
					absolute
					right-0
					top-0
					h-[500px]
					w-[500px]
					rounded-full
					bg-gold/10
					blur-[120px]
				"
			/>


			<div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">


				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={reveal}
				>

					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Start Your Shipment
					</p>


					<h2 className="
						mt-5
						font-display
						text-4xl
						md:text-5xl
					">
						Ready to move your cargo worldwide?
					</h2>


					<p className="
						mt-6
						max-w-lg
						leading-relaxed
						text-white/60
					">
						Get a customised logistics solution built around your
						cargo requirements, destination, and delivery timeline.
					</p>


					<a
						href="/quote"
						className="
							group
							mt-10
							inline-flex
							items-center
							gap-2
							rounded-full
							bg-gold
							px-8
							py-4
							text-sm
							font-semibold
							text-navy-dark
							transition-all
							hover:shadow-gold
						"
					>
						Request a Quote

						<ArrowRight
							className="
								h-4
								w-4
								transition-transform
								group-hover:translate-x-1
							"
						/>
					</a>

				</motion.div>



				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={reveal}
					className="
						relative
						rounded-3xl
						border
						border-white/10
						bg-white/5
						p-8
						backdrop-blur-xl
					"
				>

					<div className="space-y-6">


						<div className="flex items-center gap-4">
							<div className="
								flex
								h-12
								w-12
								items-center
								justify-center
								rounded-xl
								bg-gold/10
								text-gold
							">
								<Package className="h-5 w-5" />
							</div>

							<div>
								<p className="text-sm text-white/50">
									Cargo Type
								</p>

								<p className="font-medium">
									Air, Sea, Road & Express
								</p>
							</div>
						</div>



						<div className="flex items-center gap-4">
							<div className="
								flex
								h-12
								w-12
								items-center
								justify-center
								rounded-xl
								bg-gold/10
								text-gold
							">
								<MapPin className="h-5 w-5" />
							</div>

							<div>
								<p className="text-sm text-white/50">
									Destination
								</p>

								<p className="font-medium">
									Global Delivery Network
								</p>
							</div>
						</div>



						<div className="flex items-center gap-4">
							<div className="
								flex
								h-12
								w-12
								items-center
								justify-center
								rounded-xl
								bg-gold/10
								text-gold
							">
								<Ship className="h-5 w-5" />
							</div>

							<div>
								<p className="text-sm text-white/50">
									Solutions
								</p>

								<p className="font-medium">
									Secure Freight Management
								</p>
							</div>
						</div>


					</div>


					<div className="
						mt-8
						border-t
						border-white/10
						pt-6
						text-sm
						text-white/50
					">
						Our team will review your shipment details and provide
						the best logistics option.
					</div>

				</motion.div>


			</div>
		</section>
	);
}
