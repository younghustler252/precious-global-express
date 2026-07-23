"use client"
import Logo from "@/components/ui/logo";
import { company } from "@/config/company";

const services = [
	"Air Freight",
	"Sea Freight",
	"Road Freight",
	"Express",
	"Customs",
	"Warehousing",
];

const companyLinks = [
	"About",
	"Careers",
	"Blog",
	"Sustainability",
	"Partners",
];

function FooterColumn({
	title,
	items,
}: {
	title: string;
	items: string[];
}) {
	return (
		<div>
			<h4 className="text-xs uppercase tracking-[0.3em] text-gold">
				{title}
			</h4>

			<ul className="mt-4 space-y-2.5 text-sm text-white/60">
				{items.map((item) => (
					<li key={item}>
						<a href="#" className="hover:text-white transition-colors">
							{item}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Footer() {
	// ✅ Explicit SVG components substituted here to fix missing Lucide brand icons
	const socials = [
		{
			link: company.socials.facebook,
			Svg: (props: React.SVGProps<SVGSVGElement>) => (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
					<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
				</svg>
			),
		},
		{
			link: company.socials.instagram,
			Svg: (props: React.SVGProps<SVGSVGElement>) => (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
					<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
				</svg>
			),
		},
		{
			link: company.socials.linkedin,
			Svg: (props: React.SVGProps<SVGSVGElement>) => (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
					<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
					<rect width="4" height="12" x="2" y="9" />
					<circle cx="4" cy="4" r="2" />
				</svg>
			),
		},
		{
			link: company.socials.x,
			Svg: (props: React.SVGProps<SVGSVGElement>) => (
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
					<path d="M4 4l11.733 16h4.267l-11.733 -16z" />
					<path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
				</svg>
			),
		},
	];

	return (
		<footer className="bg-navy-dark text-white border-t border-white/10">
			<div className="container-page section-lg grid gap-12 md:grid-cols-4">
				<div>
					<Logo />

					<p className="mt-6 text-sm leading-relaxed text-white/60">
						{company.description}
					</p>

					<div className="mt-6 flex gap-3">
						{socials.map(({ Svg, link }) => (
							<a
								key={link}
								href={link}
								target="_blank"
								rel="noreferrer"
								className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
							>
								<Svg className="h-4 w-4" />
							</a>
						))}
					</div>
				</div>

				<FooterColumn title="Services" items={services} />

				<FooterColumn title="Company" items={companyLinks} />

				<div>
					<h4 className="text-xs uppercase tracking-[0.3em] text-gold">
						Contact
					</h4>

					<div className="mt-4 space-y-3 text-sm text-white/60">
						<p>{company.contact.email}</p>
						<p>{company.contact.phone}</p>
						<p>{company.address.full}</p>
					</div>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="container-page flex flex-col gap-4 py-6 text-xs text-white/40 md:flex-row md:justify-between">
					<p>
						© {new Date().getFullYear()} {company.name}. All rights reserved.
					</p>

					<div className="flex gap-6">
						<a href="#" className="hover:text-white">
							Privacy Policy
						</a>

						<a href="#" className="hover:text-white">
							Terms
						</a>

						<a href="#" className="hover:text-white">
							Cookies
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
