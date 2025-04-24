"use client";
import Hero from "@/Component/Hero";

import aboutlottie from "../../../public/Animation - 1745506161787.json"
import aboutlottie2 from "../../../public/Animation - 1745505464078.json"

import Lottie from "lottie-react";
export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen ">
      {/* Hero */}
      <Hero/>

      <section className="grid grid-cols-2">

     
      <div>
      <section className="mb-20 relative">
        <h2
          className="text-3xl font-semibold mb-4 text-indigo-400  "
         
        >
          <i className="fas fa-bullseye"></i>Our Mission
        </h2>
        
        <p className="text-gray-300 leading-relaxed relative z-10 max-w-2xl mx-auto">
          To empower small businesses, startups, and individuals in Bangladesh
          and beyond with fast, modern, and affordable websites — built with
          clean code, thoughtful design, and a mission to make the web smarter,
          simpler, and more impactful for everyone.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-20 relative">
      <h2
          className="text-3xl font-semibold mb-4 text-indigo-400  "
         
        >
          <i className="fas fa-bullseye"></i>Our Vision
        </h2>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/path/to/vision-image.jpg')` }}></div>
        <p className="text-gray-300 leading-relaxed relative z-10 mb-4 max-w-2xl mx-auto">
          To grow from a passionate agency into a trusted tech company — 
          delivering modern, elegant, and scalable web solutions from Bangladesh
          to the world.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 pl-2 relative z-10">
          <li>Become a recognized digital brand within 1–2 years</li>
          <li>Offer full-service web development</li>
          <li>Serve global clients with clean, scalable code</li>
        </ul>
      </section>
      </div>
      <div className="">
      <Lottie animationData={aboutlottie}></Lottie>
       
      </div>

      </section>
      {/* Mission */}
      
      {/* About DevCabin with Image */}
     <section className="grid grid-cols-2">
        <div>
        <Lottie animationData={aboutlottie2}></Lottie>
       
        </div>
     <div className="mb-20 relative">
     <h2
          className="text-3xl font-semibold mb-4 text-indigo-400  "
         
        >
          <i className="fas fa-bullseye"></i>About DevCabin
        </h2>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/path/to/about-image.jpg')` }}></div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="text-gray-300 leading-relaxed">
            DevCabin is a Bangladesh-based web development agency dedicated to
            helping small businesses, startups, and creators build their digital
            presence through modern, fast, and clean websites.
          </p>
          <p className="text-gray-400 mt-4">
            We believe every brand — no matter how small — deserves a strong,
            professional online identity. Whether it’s a portfolio, business site,
            or landing page, we design and build with care, creativity, and
            performance in mind.
          </p>
          <blockquote className="italic text-gray-500 mt-4 border-l-4 pl-4 border-indigo-500">
            “Make high-quality websites accessible and affordable for everyone in
            Bangladesh.”
          </blockquote>
        </div>
      </div>
     </section>

      
      
      {/* Our Team */}
      <section className="mb-20 relative">
        <h2
          className="text-3xl font-semibold mb-6 text-blue-400 flex items-center justify-center gap-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-users"></i>  Our Team
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img src="/path/to/bappi-image.jpg" alt="Bappi" className="rounded-full w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-white">Bappi</h3>
            <p className="text-gray-400">Founder & Full Stack Developer</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <img src="/path/to/asadullah-image.jpg" alt="Asadullah" className="rounded-full w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-white">Asadullah</h3>
            <p className="text-gray-400">Co-Founder & Front-End Developer</p>
          </div>
        </div>
      </section>

      {/* Final Note */}
      
    </main>
  );
}
