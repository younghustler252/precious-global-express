"use client";

import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export default function RouteTracker() {
	return (
		<div className="pointer-events-none absolute inset-y-0 left-6 hidden w-20 md:block">

			<svg
				className="absolute left-5 top-0 h-full w-10"
				viewBox="0 0 40 800"
				fill="none"
				preserveAspectRatio="none"
			>
				<path
					d="M20 20 C20 180 20 250 20 400 C20 550 20 650 20 780"
					stroke="rgba(255,255,255,0.12)"
					strokeWidth="2"
					fill="none"
				/>

				<motion.path
					d="M20 20 C20 180 20 250 20 400 C20 550 20 650 20 780"
					stroke="oklch(0.78 0.13 85)"
					strokeWidth="2"
					strokeDasharray="8 12"
					fill="none"
					initial={{
						strokeDashoffset: 200,
					}}
					animate={{
						strokeDashoffset: 0,
					}}
					transition={{
						duration: 5,
						repeat: Infinity,
						ease: "linear",
					}}
				/>
			</svg>


			<motion.div
				className="
					absolute
					left-0
					text-gold
				"
				animate={{
					y: [0, 700],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				<div className="
					flex
					h-10
					w-10
					items-center
					justify-center
					rounded-full
					border
					border-gold/40
					bg-navy
					shadow-gold
				">
					<Truck className="h-5 w-5" />
				</div>
			</motion.div>


		</div>
	);
}
