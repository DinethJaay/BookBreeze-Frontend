// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="text-center bg-gray-100 py-20">
      <h1 className="text-5xl font-bold mb-4">Welcome to the Library</h1>
      <p className="text-xl text-gray-600">
        Manage, Search, and Borrow Books with Ease.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
};

export default Header;
