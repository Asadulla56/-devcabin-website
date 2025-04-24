"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen py-16 px-6 md:px-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We Build Code With Class
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Born in Bangladesh. Built for the world.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-indigo-400 flex items-center justify-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-bullseye"></i> 🧭 Our Mission
        </motion.h2>
        <p className="text-gray-300 leading-relaxed">
          To empower small businesses, startups, and individuals in Bangladesh
          and beyond with fast, modern, and affordable websites — built with
          clean code, thoughtful design, and a mission to make the web smarter,
          simpler, and more impactful for everyone.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-green-400 flex items-center justify-center gap-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-eye"></i> 🌟 Our Vision
        </motion.h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          To grow from a passionate agency into a trusted tech company — 
          delivering modern, elegant, and scalable web solutions from Bangladesh
          to the world.
        </p>
        <ul className="list-disc list-inside text-gray-400 space-y-2 pl-2">
          <li>Become a recognized digital brand within 1–2 years</li>
          <li>Offer full-service web development</li>
          <li>Serve global clients with clean, scalable code</li>
        </ul>
      </section>

      {/* About DevCabin with Image */}
      <section className="mb-20 relative">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-yellow-400 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-building"></i> 🏠 About DevCabin
        </motion.h2>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('/mnt/data/FireShot Capture 026 - Create Next App - [localhost].png')` }}></div>
        <div className="relative z-10">
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
      </section>

      {/* What We're Doing */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-pink-400 flex items-center justify-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-cogs"></i> 🛠 What We’re Doing Now
        </motion.h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2 pl-2">
          <li>Building internal tools and smart workflows</li>
          <li>Creating demo projects and case studies</li>
          <li>Laying down solid systems for faster delivery</li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="mb-20">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-blue-400 flex items-center justify-center gap-3"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-users"></i> 👥 Our Team
        </motion.h2>
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
      <section className="text-center border-t border-gray-700 pt-10">
        <p className="text-sm text-gray-500">
          DevCabin — Launched April 16, 2025 | Made with 💻 in Bangladesh
        </p>
      </section>
    </main>
  );
}
