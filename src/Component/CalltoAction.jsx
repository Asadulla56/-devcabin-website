import React from 'react';

const CalltoAction = () => {
    return (
        <div>
            <section className="py-6 dark:bg-black dark:text-white">
  <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
    <div className="flex flex-col space-y-4 text-center lg:text-left">
      <h1 className="text-5xl font-bold leading-none">Get Smart Updates from DevCabin</h1>
      <p className="text-lg text-gray-400">
        Join our insider list for sneak peeks, dev tips, and launch updates. No spam — just clean code and fresh ideas.
      </p>
    </div>
    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
      <div className="flex flex-row">
        <input
          type="text"
          placeholder="you@devmail.com"
          className="w-3/5 p-3 rounded-l-lg sm:w-2/3 dark:bg-gray-900 dark:text-white"
        />
        <button
          type="button"
          className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-indigo-600 dark:text-white hover:bg-indigo-500 transition"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</section>

            
        </div>
    );
};

export default CalltoAction;