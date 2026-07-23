"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { faqs } from "@/config/faqs";

export default function FAQ() {
	const [active, setActive] = useState<number | null>(null);

	return (
		<section className="section bg-white">
			<div className="container-page">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-80px" }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-3xl text-center"
				>
					<p className="text-xs uppercase tracking-[0.3em] text-gold">
						Frequently Asked Questions
					</p>

					<h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">
						Everything you need to know about shipping.
					</h2>

					<p className="mt-5 leading-relaxed text-muted">
						Find answers to common questions about our freight,
						delivery, tracking, and logistics services.
					</p>
				</motion.div>

				<div className="mx-auto mt-12 max-w-4xl space-y-4">
					{faqs.map((faq) => {
						const isOpen = active === faq.id;

						return (
							<motion.div
								key={faq.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.4 }}
								className="overflow-hidden rounded-brand border-default bg-surface"
							>
								<button
									onClick={() => setActive(isOpen ? null : faq.id)}
									className="flex w-full items-center justify-between gap-5 p-6 text-left"
								>
									<span className="font-display text-lg text-navy">
										{faq.question}
									</span>

									<span
										className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy transition-transform duration-300 ${
											isOpen ? "rotate-180" : ""
										}`}
									>
										<ChevronDown className="h-5 w-5 text-gold" />
									</span>
								</button>

								<AnimatePresence>
									{isOpen && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
										>
											<div className="border-t border-default px-6 pb-6 pt-4 text-sm leading-relaxed text-muted">
												{faq.answer}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
