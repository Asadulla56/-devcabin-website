import React from 'react';

const CalltoAction = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-violet-100 to-indigo-200 text-gray-900 w-11/12 mx-auto rounded-3xl shadow-xl">
      <div className="container mx-auto flex flex-col justify-center p-6 space-y-10 md:p-10 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-16">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get Smart Updates from <span className="text-indigo-700">DevCabin</span>
          </h1>
          <p className="text-gray-700 text-lg">
            Join our inner circle for dev insights, launch drops, and clean code vibes. No spam. Ever.
          </p>
        </div>

        {/* Input Field */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row bg-white rounded-full overflow-hidden shadow-md border border-indigo-200">
            <input
              type="email"
              placeholder="you@devmail.com"
              className="flex-grow px-6 py-4 text-gray-800 outline-none"
            />
            <button
              type="button"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 font-semibold transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
