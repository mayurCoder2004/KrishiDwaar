import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-[#FDF6E5] shadow-md py-4 px-8 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="KrishiDwaar Logo" className="h-10 w-10 object-contain" />
        </Link>
      </div>

      <nav className="flex space-x-4">
        <Link
          to="/"
          className="px-4 py-2 rounded-full text-green-700 font-medium transition duration-300 hover:bg-green-100"
        >
          Home
        </Link>
        <Link
          to="/login/farmer"
          className="px-4 py-2 rounded-full bg-green-600 text-white font-medium transition duration-300 hover:bg-green-700"
        >
          Farmer Login
        </Link>
        <Link
          to="/login/buyer"
          className="px-4 py-2 rounded-full bg-green-600 text-white font-medium transition duration-300 hover:bg-green-700"
        >
          Retailer Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
