"use client";

import dynamic from "next/dynamic";
import Hero from "@/Component/Hero";

const WhyDevCabin = dynamic(() => import("@/Component/WhyDevCabin"), {
  ssr: false,
});

const WhatWeOffer = dynamic(() => import("@/Component/WhatWeOffer"), {
  ssr: false,
});

const OurProcess = dynamic(() => import("@/Component/OurProcess"), {
  ssr: false,
});

const CalltoAction = dynamic(() => import("@/Component/CalltoAction"), {
  ssr: false,
});

export default function HomeContent() {
  return (
    <section className="bg-black mb-10">
      <Hero />
      <WhyDevCabin />
      <WhatWeOffer />
      <OurProcess />
      <CalltoAction />
    </section>
  );
}
