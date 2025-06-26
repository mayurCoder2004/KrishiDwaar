import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#FDF9F3] shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="KrishiDwaar Logo"
            className="h-10 w-10 object-contain"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      {/* <nav className="flex space-x-6 text-green-700 font-medium">
        <Link to="/" className="hover:text-green-900 transition">Home</Link>
        <Link to="/marketplace" className="hover:text-green-900 transition">Marketplace</Link>
        <Link to="/about" className="hover:text-green-900 transition">About</Link>
        <Link to="/contact" className="hover:text-green-900 transition">Contact</Link>
      </nav> */}

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/auth"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Register
        </Link>
        <Link
          to="/auth"
          className="px-4 py-2 border border-green-600 text-green-700 rounded hover:bg-green-100 transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
