import { FaRocket, FaCogs, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';

const features = [
  {
    icon: <FaRocket className="h-10 w-10 text-indigo-500 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Fast Delivery',
    desc: 'Lightning-fast execution without sacrificing quality.',
  },
  {
    icon: <FaCogs className="h-10 w-10 text-indigo-500 group-hover:rotate-12 transition-transform duration-300" />,
    title: 'Modern Tech Stack',
    desc: 'We leverage Next.js, Tailwind, and more to build scalable solutions.',
  },
  {
    icon: <FaHandshake className="h-10 w-10 text-indigo-500 group-hover:scale-105 transition-transform duration-300" />,
    title: 'Collaborative Process',
    desc: 'From ideation to deployment — we’re your tech partner.',
  },
  {
    icon: <FaLightbulb className="h-10 w-10 text-indigo-500 group-hover:rotate-6 transition-transform duration-300" />,
    title: 'Strategy-Driven UX',
    desc: 'Designs rooted in user behavior and data-backed strategy.',
  },
];

export default function WhyDevCabin() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Features Section */}
        <div>
          <div className="text-left mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Why Choose DevCabin?</h2>
            <p className="text-lg text-gray-400 max-w-xl">
              Discover the DevCabin difference — where technology meets creativity and strategy.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-center text-sm">{feature.desc}</p>
                <div className="absolute inset-0 border border-transparent group-hover:border-indigo-500 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/dev-agency-concept.png"
            alt="Web development illustration"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
