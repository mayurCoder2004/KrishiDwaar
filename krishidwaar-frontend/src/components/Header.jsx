import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F3EFEA] shadow-lg border-b border-green-200 py-4 px-8 flex justify-between items-center">
      
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
      <nav className="hidden md:flex gap-6 text-green-800 font-medium">
        <Link to="/" className="hover:text-green-700 transition">
          Home
        </Link>
        <Link to="/marketplace" className="hover:text-green-700 transition">
          Marketplace
        </Link>
        <Link to="/orders" className="hover:text-green-700 transition">
          Orders
        </Link>
        <Link to="/pricing" className="hover:text-green-700 transition">
          Pricing
        </Link>
        <Link to="/profile" className="hover:text-green-700 transition">
          Profile
        </Link>
      </nav>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/auth?mode=register"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Register
        </Link>
        <Link
          to="/auth?mode=login"
          className="px-4 py-2 border border-green-600 text-green-700 rounded hover:bg-green-100 transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
