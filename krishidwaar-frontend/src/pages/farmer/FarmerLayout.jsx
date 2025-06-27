import React from 'react';
import FarmerSidebar from '../../components/farmer/FarmerSidebar';
import FarmerTopbar from '../../components/farmer/FarmerTopbar';

const FarmerLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <FarmerSidebar />
      <div className="flex-1 flex flex-col">
        <FarmerTopbar />
        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default FarmerLayout;
