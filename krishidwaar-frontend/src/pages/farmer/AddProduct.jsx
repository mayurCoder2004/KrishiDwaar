import React, { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [form, setForm] = useState({
    cropName: "",
    quantity: "",
    pricePerKg: "",
    location: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/products", form);
      alert("✅ Product added successfully");
      navigate("/farmer/my-products");
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert("Something went wrong while adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3EFEA] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="cropName"
            placeholder="Crop Name"
            value={form.cropName}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded w-full"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity (kg)"
            value={form.quantity}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded w-full"
          />
          <input
            type="number"
            name="pricePerKg"
            placeholder="Price per kg (₹)"
            value={form.pricePerKg}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded w-full"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (optional)"
            value={form.imageUrl}
            onChange={handleChange}
            className="border px-4 py-2 rounded w-full"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 transition"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
