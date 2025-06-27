import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const FarmerTopbar = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      {/* Left: Page Title or Logo */}
      <h1 className="text-xl font-semibold text-green-700">Farmer Dashboard</h1>

      {/* Right: Greeting, Icons */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700 hidden sm:block">Hello, Mayur 👋</span>

        {/* Notification Bell */}
        <button className="relative text-gray-600 hover:text-green-600">
          <FaBell size={18} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </button>

        {/* Profile Icon */}
        <button className="text-gray-600 hover:text-green-600">
          <FaUserCircle size={24} />
        </button>
      </div>
    </header>
  );
};

export default FarmerTopbar;
