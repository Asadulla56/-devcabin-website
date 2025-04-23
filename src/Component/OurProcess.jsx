"use client";
import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaCode, FaRocket } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="w-8 h-8 text-indigo-500" />,
    title: "Discovery",
    desc: "We dive into your idea, goals, and audience to define the roadmap.",
  },
  {
    icon: <FaPencilRuler className="w-8 h-8 text-green-400" />,
    title: "Design",
    desc: "We sketch wireframes and create UI mockups for review.",
  },
  {
    icon: <FaCode className="w-8 h-8 text-blue-400" />,
    title: "Development",
    desc: "We build fast, responsive, and scalable web applications.",
  },
  {
    icon: <FaRocket className="w-8 h-8 text-yellow-400" />,
    title: "Launch & Support",
    desc: "We go live, optimize performance, and offer ongoing help.",
  },
];

export default function OurProcess() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Our Process
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          A step-by-step approach that ensures clarity, creativity, and clean
          code.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
