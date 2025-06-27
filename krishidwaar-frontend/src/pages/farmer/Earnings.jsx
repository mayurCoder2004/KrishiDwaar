import React, { useState } from 'react';
import FarmerSidebar from '../../components/farmer/FarmerSidebar';
import FarmerTopbar from '../../components/farmer/FarmerTopbar';

const Earnings = () => {
  const [data] = useState([
    { id: 1, product: 'Wheat', quantity: 20, price: 28, date: '2025-06-10' },
    { id: 2, product: 'Onion', quantity: 10, price: 25, date: '2025-06-15' },
    { id: 3, product: 'Tomato', quantity: 15, price: 20, date: '2025-06-20' },
  ]);

  const totalEarnings = data.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="flex min-h-screen">
      <FarmerSidebar />

      <div className="flex-1 flex flex-col">
        <FarmerTopbar />

        <main className="p-6 bg-gray-100 flex-1 overflow-x-auto">
          <h1 className="text-2xl font-bold mb-4">Earnings Summary</h1>

          <div className="bg-white p-4 rounded shadow mb-6 max-w-sm">
            <p className="text-gray-600">Total Earnings:</p>
            <h2 className="text-3xl font-semibold text-green-700 mt-2">₹{totalEarnings.toLocaleString()}</h2>
          </div>

          <h2 className="text-xl font-semibold mb-3">Earnings Breakdown</h2>

          <table className="min-w-full bg-white shadow rounded">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Quantity (kg)</th>
                <th className="py-2 px-4 text-left">Price (₹/kg)</th>
                <th className="py-2 px-4 text-left">Total (₹)</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{item.product}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">{item.price}</td>
                  <td className="py-2 px-4">{item.quantity * item.price}</td>
                  <td className="py-2 px-4">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Earnings;
