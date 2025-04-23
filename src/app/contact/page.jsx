import React from 'react';
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-gray-100 px-6 py-20">
      {/* Header Section */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Contact</h1>
        <p className="text-lg md:text-xl text-gray-400">
          Have a project in mind or just want to say hello? We’d love to hear from you.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-800 shadow-xl rounded-3xl p-10">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <MapPin className="text-blue-400" />
            <div>
              <h4 className="font-semibold text-blue-300 mb-1">Dev Cabin HQ</h4>
              <p className="text-gray-300">123 Tech Avenue, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="text-blue-400" />
            <p className="text-gray-300">contact@devcabin.com</p>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="text-blue-400" />
            <div className="space-y-1 text-gray-300">
              <p>01304186131</p>
              <p>01851516736</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-100 mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-600"><Facebook size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><Linkedin size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
