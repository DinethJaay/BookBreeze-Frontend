/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterImage from "../assets/images/lms.png";
import { useAuth } from "../hooks/useAuths.ts";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

const passwordValidationPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false); //loading state
  const navigate = useNavigate();

  const { register } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = { email: "", password: "", confirmPassword: "" };
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!passwordValidationPattern.test(formData.password)) {
      errors.password =
        "Password must be at least 6 characters long, include one uppercase, one lowercase, one digit, and one special character.";
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true); // Start loading

    try {
      await register(formData.email, formData.password);

      toast.success("Registration successful! Redirecting...");
      navigate("/login");
    } catch (error) {
      setIsLoading(false);
      // @ts-ignore
      toast.error(
        error.message || "Registration failed. Please try again later."
      );
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left Side */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-purple-700 to-gray-900">
          <img
            src={RegisterImage}
            alt="Library Background"
            className="rounded-lg w-4/5 shadow-lg"
          />
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Register</h1>
            <p className="text-gray-500 mb-6">Get started with Book Breeze</p>

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
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
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
                {formErrors.password && (
                  <p className="text-red-500 text-sm">{formErrors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {formErrors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="text-sm text-gray-500">
                Password must contain:
                <ul className="list-disc ml-5 mt-1">
                  <li>At least 6 characters long</li>
                  <li>At least one uppercase character</li>
                  <li>At least one lowercase character</li>
                  <li>At least one digit</li>
                  <li>At least one non-alphanumeric character</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800"
                disabled={isLoading} // Disable the btn whn process
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </form>

            <p className="text-sm text-center mt-4 text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-purple-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
