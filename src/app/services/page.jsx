import React from "react";

const services = [
  {
    title: "Website Design & Development",
    icon: "🖥️",
    description: "Beautiful, responsive, and lightning-fast websites",
    bullets: [
      "Custom Website Design",
      "Landing Pages",
      "Business Portfolio Sites",
      "Blog & News Platforms",
    ],
    note: "Perfect for small businesses, creators, and local services."
  },
  {
    title: "E-commerce Solutions",
    icon: "🛒",
    description: "Sell smarter with scalable online stores",
    bullets: [
      "Custom Online Store Setup",
      "Shopify/WooCommerce Development",
      "Payment Gateway Integration",
      "Product Management Systems",
    ],
    note: "Ideal for physical or digital product sellers."
  },
  {
    title: "Web App Development",
    icon: "⚙️",
    description: "Powerful apps that solve real problems",
    bullets: [
      "Admin Dashboards",
      "Internal Tools",
      "MVPs for Startups",
      "SaaS Product Development",
    ],
    note: "For startups and businesses building custom platforms."
  },
  {
    title: "Performance Optimization",
    icon: "🚀",
    description: "Speed, SEO, and accessibility matter",
    bullets: [
      "Page Speed Optimization",
      "Technical SEO Setup",
      "Mobile Optimization",
      "Core Web Vitals Fix",
    ],
    note: "Boost rankings and user experience."
  },
  {
    title: "Maintenance & Support",
    icon: "🔧",
    description: "Stay up-to-date and secure",
    bullets: [
      "Regular Backups",
      "Bug Fixes",
      "Feature Updates",
      "Tech Support",
    ],
    note: "We help you stay stress-free post-launch."
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
      <p className="text-center text-lg text-gray-300 mb-12">
        We Build Code With Class — Tailored For Startups & Small Businesses
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-md p-6 border border-gray-800 hover:shadow-lg transition-all bg-gray-800"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {service.icon} {service.title}
            </h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {service.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">💡 {service.note}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-lg">Not sure what you need?</p>
        <a
          href="#"
          className="inline-block mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Contact Us for a Free Consultation
        </a>
      </div>
    </div>
  );
}
