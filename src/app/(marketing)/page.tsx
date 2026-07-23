import Hero from "@/components/marketing/hero";
import Services from "@/components/marketing/services";
import About from "@/components/marketing/about";
import HowItWorks from "@/components/marketing/how-it-works";
import Partners from "@/components/marketing/partners";
import WhyChooseUs from "@/components/marketing/why-choose-us";
import GetQuote from "@/components/marketing/get-quote";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<About />
			<HowItWorks />
			<Partners />
			<WhyChooseUs />
			<GetQuote />
		</>
	);
}
