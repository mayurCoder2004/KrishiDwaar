import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "farmer",
    location: "",
  });

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const isRegister = mode === "register";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser = async (userData) => {
    return API.post("/auth/register", userData);
  };

  const loginUser = async (loginData) => {
    return API.post("/auth/login", loginData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegister) {
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }

        const { name, email, password, location, role } = formData;
        const res = await registerUser({
          name,
          email,
          password,
          location,
          role,
        });
        toast.success(res.data.message);
        navigate("/auth?mode=login"); // Switch to login after registration
      } else {
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);

        toast.success("Login successful");

        setTimeout(() => {
          if (res.data.user.role === "farmer") {
            navigate("/farmer/dashboard");
          } else {
            navigate("/buyer/dashboard");
          }
        }, 1000);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF9F3] flex items-center justify-center p-6">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              />
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded"
                required
              >
                <option value="farmer">Farmer</option>
                <option value="buyer">Retailer</option>
              </select>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />

          {isRegister && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <a
            href={`/auth?mode=${isRegister ? "login" : "register"}`}
            className="text-green-600 underline"
          >
            {isRegister ? "Login" : "Register"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
