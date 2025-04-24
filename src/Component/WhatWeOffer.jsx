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
    icon: <FaCode className="h-8 w-8 text-indigo-400" />,
    title: "Web Development",
    desc: "Custom websites built with modern technologies like Next.js and React.",
  },
  {
    icon: <FaPalette className="h-8 w-8 text-indigo-400" />,
    title: "UI/UX Design",
    desc: "Beautiful and intuitive interfaces that enhance user experience.",
  },
  {
    icon: <FaMobile className="h-8 w-8 text-indigo-400" />,
    title: "Mobile Responsive",
    desc: "Websites that look great on all devices and screen sizes.",
  },
  {
    icon: <FaSearch className="h-8 w-8 text-indigo-400" />,
    title: "SEO Optimization",
    desc: "Improved search engine rankings and online visibility.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">What We Offer</h2>
        <p className="text-gray-400 mb-12">
          Comprehensive web solutions tailored to your needs.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-gray-800 p-6 rounded-2xl shadow-sm transition duration-300 group"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{service.desc}</p>

              {/* Hover border animation */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 rounded-full transition-all duration-300 group-hover:w-full" />
              <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-indigo-400 rounded-full transition-all duration-300 group-hover:h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
