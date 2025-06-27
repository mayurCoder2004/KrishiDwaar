import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// General pages
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import Login from "./pages/Login"; // Optional

// Farmer pages
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import MyProducts from "./pages/farmer/MyProducts";
import AddProduct from "./pages/farmer/AddProduct";
import Orders from "./pages/farmer/Orders";
import Prices from "./pages/farmer/Prices";
import Earnings from "./pages/farmer/Earnings";
import Profile from "./pages/farmer/Profile";

// Buyer pages (example)
import BuyerDashboard from "./pages/BuyerDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Dashboard />} />

        {/* Authentication Page */}
        <Route path="/auth" element={<AuthPage />} />

        {/* Role-based login (optional) */}
        {/* <Route path="/login/:role" element={<Login />} /> */}

        {/* Farmer Routes */}
        <Route path="/farmer/dashboard" element={<FarmerDashboard />}>
          <Route index element={<MyProducts />} />
          <Route path="products" element={<MyProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="prices" element={<Prices />} />
          <Route path="earnings" element={<Earnings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Buyer Routes */}
        <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
