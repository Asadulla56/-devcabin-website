'use client';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          🔥 DevCabin
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-indigo-400 font-medium">
          We Build Code With Class
        </p>
        <p className="mt-4 text-gray-300 text-lg">
          Founded on April 16, 2025 by <span className="font-semibold">Mubashir Bappi</span><br />
          Co-Founded with Front-End Developer <span className="font-semibold">Asad Mahmud</span>
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
