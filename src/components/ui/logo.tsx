import Image from "next/image";
import { useState } from "react";
import { Package } from "lucide-react";

import { company } from "@/config/company";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
	className?: string;
	showName?: boolean;
	size?: "sm" | "md" | "lg";
}

const sizes = {
	sm: 32,
	md: 44,
	lg: 64,
};

export default function Logo({
	className,
	showName = true,
	size = "md",
}: LogoProps) {
	const [error, setError] = useState(false);

	const imageSize = sizes[size];

	return (
		<div className={cn("flex items-center gap-3", className)}>
			{error ? (
				<div
					className="flex items-center justify-center rounded-xl bg-navy"
					style={{
						width: imageSize,
						height: imageSize,
					}}
				>
					{company.branding.icon ? (
						<Image
							src={company.branding.icon}
							width={imageSize}
							height={imageSize}
							alt={company.name}
							className="object-contain"
						/>
					) : (
						<Package
							size={imageSize * 0.6}
							className="text-gold"
						/>
					)}
				</div>
			) : (
				<Image
				src={company.branding.logo}
				alt={company.name}
				width={imageSize}
				height={imageSize}
				className="h-11 w-11 object-contain shrink-0"
				priority
				unoptimized
				/>
			)}

			{showName && (
				<div>
					<p className="font-display font-bold leading-none text-navy">
						Precious Global <span className="text-gold">Express</span>
					</p>
				</div>
			)}

		</div>
	);
}
