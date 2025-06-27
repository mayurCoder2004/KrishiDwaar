import React, { useEffect, useState } from 'react';
import API from '../../api/axios';

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyProducts = async () => {
      try {
        const res = await API.get('/products/my');
        setProducts(res.data.products);
      } catch (err) {
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMyProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF5EF] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">My Listed Products</h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-600">You haven't listed any products yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-6 border border-green-100 hover:shadow-lg transition"
              >
                <img
                  src={product.imageUrl || 'https://via.placeholder.com/300x200.png?text=No+Image'}
                  alt={product.cropName}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold text-green-800">{product.cropName}</h3>
                <p className="text-gray-700 mt-2">
                  <span className="font-medium">Quantity:</span> {product.quantity} kg
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Price:</span> ₹{product.pricePerKg}/kg
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Location:</span> {product.location}
                </p>
                <p className={`mt-2 font-semibold ${product.isAvailable ? 'text-green-600' : 'text-red-500'}`}>
                  {product.isAvailable ? 'Available' : 'Not Available'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
