/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImage from "../assets/images/login.png";
import { useAuth } from "../hooks/useAuths.ts";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>(""); //save error
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      toast.error("Please fill in all fields correctly!");
      return;
    }

    try {
      await login(formData.email, formData.password);
      toast.success("Login successful!");
      navigate("/books");
    } catch (err: any) {
      toast.error(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-purple-700 to-gray-900">
          <img
            src={LoginImage}
            alt="Library Background"
            className="rounded-lg w-4/5 shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
            <p className="text-gray-500 mb-6">Welcome back to Book Breeze</p>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="text-right">
                <a
                  href="/forgot-password"
                  className="text-sm text-purple-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800"
              >
                Login
              </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-purple-600 hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
