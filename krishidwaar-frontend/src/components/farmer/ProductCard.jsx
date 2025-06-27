import React from 'react';

const ProductCard = ({ name, image, quantity, price, status }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-all">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-3 text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">Qty: {quantity} kg</p>
      <p className="text-sm text-gray-600">Price: ₹{price}/kg</p>
      <p className={`text-sm font-medium mt-1 ${status === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
        {status}
      </p>
      <div className="flex gap-2 mt-3">
        <button className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Edit</button>
        <button className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
