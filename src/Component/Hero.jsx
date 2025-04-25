"use client";
import dynamic from "next/dynamic";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const AnimatedShinyText = dynamic(
  () =>
    import("@/components/magicui/animated-shiny-text").then(
      (mod) => mod.AnimatedShinyText
    ),
  {
    ssr: false,
  }
);

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          We Build Code
        </h1>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-indigo-400 mt-2">
          With Class
        </h2>
        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Empowering businesses and creators with fast, modern, and affordable
          websites built with clean code and thoughtful design to make the web
          smarter and more impactful.
        </p>
        <div className="mt-10">
          <Link href="/about" className="bg-white rounded-full px-7 py-3">
            <AnimatedShinyText>Learn more</AnimatedShinyText>
          </Link>
        </div>
      </div>
    </section>
  );
}
