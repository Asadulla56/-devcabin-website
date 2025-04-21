"use client";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo & Tagline */}
        <div className="text-center mb-10">
          <div className="bg-white p-2 inline-block rounded">
            <img src="/logo.png" alt="Logo" className="w-24 h-auto mx-auto" />
          </div>
          <p className="text-blue-500 text-sm">
            Building Web Experiences That{" "}
            <span className="text-pink-400 font-semibold">Work</span>
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm mb-10">
          {/* Company */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  CMS (Wix/WordPress)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-blue-400">
                FB
              </a>
              <a href="#" className="hover:text-blue-400">
                X
              </a>
              <a href="#" className="hover:text-blue-400">
                IN
              </a>
            </div>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-black rounded mb-2"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Extra Info or Tagline */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">Why Choose Us?</h4>
            <p className="text-gray-400 leading-relaxed">
              At <span className="text-white font-bold">Dev cabin</span>, we mix
              creativity and tech to build modern, fast, and user-friendly
              websites.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-5 text-center text-xs text-gray-400">
          <p>
            © <span className="text-yellow-400">2025</span>{" "}
            <span className="text-blue-500 font-semibold">codeBari</span>.{" "}
            <span className="text-pink-400">All</span> rights reserved.
          </p>
          <p className="mt-2">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className="text-purple-400 hover:text-white">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
