// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
// Add more pages as needed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Dashboard />} />

        {/* Role-based login page */}
        <Route path="/login/:role" element={<Login />} />

        {/* After login, dashboards */}
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

        {/* TODO: Add product listing, order pages, etc */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
