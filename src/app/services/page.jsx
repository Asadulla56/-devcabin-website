"use client";
import dynamic from "next/dynamic";
import React from "react";
import {
  FaDesktop,
  FaShoppingCart,
  FaCog,
  FaRocket,
  FaWrench,
} from "react-icons/fa";
import thinkinglottie from "../../../public/Animation - 1745563689607.json";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const services = [
  {
    title: "Website Design & Development",
    icon: <FaDesktop />,
    description: "Beautiful, responsive, and lightning-fast websites",
    bullets: [
      "Custom Website Design",
      "Landing Pages",
      "Business Portfolio Sites",
      "Blog & News Platforms",
    ],
    note: "Perfect for small businesses, creators, and local services.",
  },
  {
    title: "E-commerce Solutions",
    icon: <FaShoppingCart />,
    description: "Sell smarter with scalable online stores",
    bullets: [
      "Custom Online Store Setup",
      "Shopify/WooCommerce Development",
      "Payment Gateway Integration",
      "Product Management Systems",
    ],
    note: "Ideal for physical or digital product sellers.",
  },
  {
    title: "Web App Development",
    icon: <FaCog />,
    description: "Powerful apps that solve real problems",
    bullets: [
      "Admin Dashboards",
      "Internal Tools",
      "MVPs for Startups",
      "SaaS Product Development",
    ],
    note: "For startups and businesses building custom platforms.",
  },
  {
    title: "Performance Optimization",
    icon: <FaRocket />,
    description: "Speed, SEO, and accessibility matter",
    bullets: [
      "Page Speed Optimization",
      "Technical SEO Setup",
      "Mobile Optimization",
      "Core Web Vitals Fix",
    ],
    note: "Boost rankings and user experience.",
  },
  {
    title: "Maintenance & Support",
    icon: <FaWrench />,
    description: "Stay up-to-date and secure",
    bullets: [
      "Regular Backups",
      "Bug Fixes",
      "Feature Updates",
      "Tech Support",
    ],
    note: "We help you stay stress-free post-launch.",
  },
];

export default function ServicesPage() {
  return (
    <div className=" mx-auto px-4 py-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-4 ">Our Services</h1>
      <p className="text-center text-lg text-gray-300 mb-12">
        We Build Code With Class<span className="text-blue-400"> — </span>
        Tailored For Startups & Small Businesses
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-6 border border-gray-800 hover:shadow-lg transition-all bg-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-2 flex gap-2 items-center">
              {service.icon} {service.title}
            </h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {service.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">
              💡 {service.note}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-blue-50  mt-6 pb-4 text-center rounded-lg shadow-sm">
        <div className="w-40 mx-auto">
          <Lottie animationData={thinkinglottie} />
        </div>
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium text-gray-700">
            Not sure what you need? Let us help you figure it out!
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Our team of experts will provide you with personalized
            recommendations to suit your needs. Contact us now for a free
            consultation and get started on your project today!
          </p>
          <Link
            href="contact"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200"
          >
            Contact Us for a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
