"use client";

// components/WhatWeOffer.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaShoppingCart,
  FaPaintBrush,
  FaTools,
  FaPalette,
  FaMobile,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="h-12 w-12 text-indigo-400" />,
    title: "Web Development",
    desc: "Custom websites built with modern technologies like Next.js and React.",
  },
  {
    icon: <FaPalette className="h-12 w-12 text-indigo-400" />,
    title: "UI/UX Design",
    desc: "Beautiful and intuitive interfaces that enhance user experience.",
  },
  {
    icon: <FaMobile className="h-12 w-12 text-indigo-400" />,
    title: "Mobile Responsive",
    desc: "Websites that look great on all devices and screen sizes.",
  },
  {
    icon: <FaSearch className="h-12 w-12 text-indigo-400" />,
    title: "SEO Optimization",
    desc: "Improved search engine rankings and online visibility.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">What We Offer</h2>
        <p className="text-lg text-gray-400 mb-14">
          Comprehensive web solutions tailored to your needs.
        </p>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-tr from-gray-800 to-gray-700 border border-gray-700 p-10 rounded-xl shadow-xl hover:shadow-indigo-500/30 transition duration-300 overflow-hidden"
            >
              <div className="flex justify-center items-center mb-6 w-20 h-20 mx-auto rounded-full bg-indigo-900/30 backdrop-blur-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-base text-gray-400">
                {service.desc}
              </p>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
