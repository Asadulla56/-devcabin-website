import Image from "next/image";

import Hero from "@/Component/Hero";
import WhyDevCabin from "@/Component/WhyDevCabin";
import WhatWeOffer from "@/Component/WhatWeOffer";
import OurProcess from "@/Component/OurProcess";
import CalltoAction from "@/Component/CalltoAction";
export default function Home() {
  return (
    <>
      <section className="bg-black mb-10">
      
      <Hero />
      <WhyDevCabin />
      <WhatWeOffer />
      <OurProcess />
      <CalltoAction/>
      </section>
    </>
  );
}
