import Hero from "@/components/marketing/hero";
import ShippingSolutions from "@/components/marketing/shipping-solutions";
import About from "@/components/marketing/about";
import HowItWorks from "@/components/marketing/how-it-works";
import Partners from "@/components/marketing/partners";
import WhyChooseUs from "@/components/marketing/why-choose-us";
import GetQuote from "@/components/marketing/get-quote";

export default function Home() {
	return (
		<>
			<Hero />
			<ShippingSolutions />
			<About />
			<HowItWorks />
			<Partners />
			<WhyChooseUs />
			<GetQuote />
		</>
	);
}
