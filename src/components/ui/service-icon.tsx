type IconProps = {
	type: "air" | "sea" | "frozen" | "dhl" | "fedex";
};

export default function ServiceIcon({ type }: IconProps) {
	const icons = {
		air: (
			<>
				<path d="M2 12h20" />
				<path d="M12 2l4 10-4 10-4-10 4-10z" />
			</>
		),

		sea: (
			<>
				<path d="M3 17c3 3 6 3 9 0 3 3 6 3 9 0" />
				<path d="M6 13h12l-2-7H8l-2 7z" />
				<path d="M9 6V3h6v3" />
			</>
		),

		frozen: (
			<>
				<path d="M12 2v20" />
				<path d="M2 12h20" />
				<path d="M4.9 4.9l14.2 14.2" />
				<path d="M19.1 4.9L4.9 19.1" />
			</>
		),

		dhl: (
			<>
				<rect x="3" y="6" width="18" height="12" rx="2" />
				<path d="M7 10h10" />
				<path d="M7 14h6" />
			</>
		),

		fedex: (
			<>
				<path d="M4 7h16v10H4z" />
				<path d="M8 11h8" />
				<path d="M8 15h5" />
			</>
		),
	};

	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-8 w-8"
		>
			{icons[type]}
		</svg>
	);
}
