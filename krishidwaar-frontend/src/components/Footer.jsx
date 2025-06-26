import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FDF9F3] text-green-800 py-10 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Description */}
        <div>
          <h3 className="text-2xl font-bold mb-2">KrishiDwaar</h3>
          <p className="text-sm text-gray-700">
            Connecting farmers and retailers for a transparent, fair, and sustainable future in agriculture.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-green-600 transition">Home</Link></li>
            <li><Link to="/auth?mode=register" className="hover:text-green-600 transition">Register</Link></li>
            <li><Link to="/auth?mode=login" className="hover:text-green-600 transition">Login</Link></li>
            <li><Link to="/contact" className="hover:text-green-600 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm text-gray-700">support@krishidwaar.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-green-700 hover:text-green-900 transition"><FaFacebookF /></a>
            <a href="#" className="text-green-700 hover:text-green-900 transition"><FaInstagram /></a>
            <a href="#" className="text-green-700 hover:text-green-900 transition"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} KrishiDwaar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
