import ServicesHero from "@/components/marketing/service-hero";
import Services from "@/components/marketing/services";
import CargoHandling from "@/components/marketing/cargo-handling";
import WhatWeHandle from "@/components/marketing/what-we-handle";

export default function servicePage() {
    return (
        <div>
            <ServicesHero />
            <Services />
            <WhatWeHandle />
            <CargoHandling />
        </div>
    )
}