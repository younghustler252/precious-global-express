"use client";

import { motion } from "framer-motion";

const paths = [0, 1, 2];

export default function RouteAnimation() {
	return (
		<svg
			className="absolute inset-0 h-full w-full opacity-30"
			viewBox="0 0 1200 800"
			preserveAspectRatio="none"
		>
			<defs>
				<linearGradient id="route-gradient" x1="0" x2="1">
					<stop offset="0%" stopColor="oklch(0.78 0.13 85)" stopOpacity="0" />
					<stop offset="50%" stopColor="oklch(0.85 0.15 85)" stopOpacity="1" />
					<stop offset="100%" stopColor="oklch(0.78 0.13 85)" stopOpacity="0" />
				</linearGradient>
			</defs>

			{paths.map((i) => (
				<motion.path
					key={i}
					d={`M ${-200 + i * 40} ${200 + i * 150} Q 600 ${
						100 + i * 100
					}, 1400 ${300 + i * 100}`}
					stroke="url(#route-gradient)"
					strokeWidth="1"
					fill="none"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={{ pathLength: 1, opacity: 1 }}
					transition={{
						duration: 3,
						delay: i * 0.5,
						repeat: Infinity,
						repeatDelay: 1,
					}}
				/>
			))}
		</svg>
	);
}
