// src/components/farmer/FarmerSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const FarmerSidebar = () => {
  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-6">KrishiDwaar</h2>
      <nav className="space-y-4">
        <NavLink to="products" className="block hover:text-green-200">
          My Products
        </NavLink>
        <NavLink to="add-product" className="block hover:text-green-200">
          Add Product
        </NavLink>
        <NavLink to="orders" className="block hover:text-green-200">
          Orders
        </NavLink>
        <NavLink to="prices" className="block hover:text-green-200">
          Market Prices
        </NavLink>
        <NavLink to="earnings" className="block hover:text-green-200">
          Earnings
        </NavLink>
        <NavLink to="profile" className="block hover:text-green-200">
          Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default FarmerSidebar;
