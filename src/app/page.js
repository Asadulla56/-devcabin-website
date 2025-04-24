import Image from "next/image";
import Navber from "@/Component/Navber";
import Hero from "@/Component/Hero";
import WhyDevCabin from "@/Component/WhyDevCabin";
import WhatWeOffer from "@/Component/WhatWeOffer";
import OurProcess from "@/Component/OurProcess";
import CalltoAction from "@/Component/CalltoAction";
export default function Home() {
  return (
    <>
      <section className="bg-black mb-10">
      <Navber />
      <Hero />
      <WhyDevCabin />
      <WhatWeOffer />
      <OurProcess />
      <CalltoAction/>
      </section>
    </>
  );
}
