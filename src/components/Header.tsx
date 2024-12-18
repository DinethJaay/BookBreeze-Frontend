import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div
      className="text-center bg-gray-100 py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 py-20">
        <h1 className="text-5xl font-bold mb-4 text-white">
          <span className="text-blue-300">WELCOME TO THE</span>
          <span className="text-blue-500"> BOOK BREEZE</span>
        </h1>
        <p className="text-xl text-gray-200">
          Manage, Search, and Borrow Books with Ease.
        </p>
        <button
          onClick={handleNavigateToRegister}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
