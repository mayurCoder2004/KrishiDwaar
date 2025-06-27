// src/pages/farmer/FarmerDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import FarmerSidebar from "../../components/farmer/FarmerSidebar";

const FarmerDashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      <FarmerSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default FarmerDashboard;
