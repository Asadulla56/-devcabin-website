// components/WhyDevCabin.tsx

import { FaRocket, FaCogs, FaHandshake, FaLightbulb } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="h-8 w-8 text-indigo-400" />,
    title: 'Fast Delivery',
    desc: 'We work fast without compromising on quality.',
  },
  {
    icon: <FaCogs className="h-8 w-8 text-indigo-400" />,
    title: 'Modern Tech Stack',
    desc: 'We use cutting-edge tools like Next.js & Tailwind.',
  },
  {
    icon: <FaHandshake className="h-8 w-8 text-indigo-400" />,
    title: 'Collaborative Process',
    desc: 'We work with you, not just for you.',
  },
  {
    icon: <FaLightbulb className="h-8 w-8 text-indigo-400" />,
    title: 'Strategy-Driven UX',
    desc: 'Every pixel is backed by intent and function.',
  },
];

export default function WhyDevCabin() {
  return (
    <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Why DevCabin?
        </h2>
        <p className="text-gray-400 mb-12">
          Here’s what makes us different from the rest.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
