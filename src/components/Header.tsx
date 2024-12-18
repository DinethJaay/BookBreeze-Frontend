import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="text-center bg-gray-100 py-20">
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-blue-950">WELCOME TO THE</span>
        <span className="text-blue-500"> BOOK BREEZE</span>
      </h1>
      <p className="text-xl text-gray-600">
        Manage, Search, and Borrow Books with Ease.
      </p>
      <button
        onClick={handleNavigateToRegister}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Header;
