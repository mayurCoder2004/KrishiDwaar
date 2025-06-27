import React from 'react';
import FarmerSidebar from '../../components/farmer/FarmerSidebar';
import FarmerTopbar from '../../components/farmer/FarmerTopbar';
import { FaUserEdit, FaSignOutAlt } from 'react-icons/fa';

const Profile = () => {
  // Sample profile data (can come from backend later)
  const farmer = {
    name: 'Mayur Pawar',
    email: 'mayur@example.com',
    phone: '+91 9876543210',
    location: 'Maharashtra, India',
    profilePic: 'https://avatars.githubusercontent.com/u/placeholder', // you can use a real image URL or local one
  };

  return (
    <div className="flex min-h-screen">
      <FarmerSidebar />

      <div className="flex-1 flex flex-col">
        <FarmerTopbar />

        <main className="p-6 bg-gray-100 flex-1">
          <h1 className="text-2xl font-bold mb-6">My Profile</h1>

          <div className="bg-white p-6 rounded shadow max-w-xl">
            <div className="flex items-center gap-4">
              <img
                src={farmer.profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border"
              />
              <div>
                <h2 className="text-xl font-semibold">{farmer.name}</h2>
                <p className="text-sm text-gray-600">{farmer.location}</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-gray-800">
              <p><strong>Email:</strong> {farmer.email}</p>
              <p><strong>Phone:</strong> {farmer.phone}</p>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <FaUserEdit /> Edit Profile
              </button>
              <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
