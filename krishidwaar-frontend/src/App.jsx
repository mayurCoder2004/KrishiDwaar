// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login'; // You can remove this if it's now handled by AuthPage
import AuthPage from './pages/AuthPage'; // ✅ New import
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
// Add more pages as needed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Dashboard />} />

        {/* Combined Login/Register page */}
        <Route path="/auth" element={<AuthPage />} /> {/* ✅ New route */}

        {/* Role-based login page (optional: if kept) */}
        {/* <Route path="/login/:role" element={<Login />} /> */}

        {/* Dashboards */}
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />

        {/* TODO: Add product listing, order pages, etc */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
