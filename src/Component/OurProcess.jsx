"use client";
import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";
import laptoplottie from "../../public/Animation - 1745403539000.json"
import Lottie from "lottie-react";
const steps = [
  {
    icon: <FaSearch className="w-6 h-6 text-indigo-500" />,
    title: "Discovery",
    desc: "We dive into your idea, goals, and audience to define the roadmap.",
  },
  {
    icon: <FaPencilRuler className="w-6 h-6 text-green-400" />,
    title: "Design",
    desc: "We sketch wireframes and create UI mockups for review.",
  },
  {
    icon: <FaCode className="w-6 h-6 text-blue-400" />,
    title: "Development",
    desc: "We build fast, responsive, and scalable web applications.",
  },
  {
    icon: <FaRocket className="w-6 h-6 text-yellow-400" />,
    title: "Launch & Support",
    desc: "We go live, optimize performance, and offer ongoing help.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-black text-white py-20 grid md:grid-cols-2  grid-cols-1">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Process
        </motion.h2>

        <div className="relative border-l border-gray-700 ml-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group mb-10 ml-6 relative"
            >
              <div className="absolute -left-5 top-1.5 w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100">
                {step.icon}
              </div>
              <div className="ml-7">
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
      <Lottie animationData={laptoplottie}></Lottie>
      </div>
    </section>
  );
}
