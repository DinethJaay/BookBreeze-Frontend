import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">BOOK BREEZE</h1>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Register Button */}
          <a
            href="/register"
            className="flex items-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
          >
            <i className="fas fa-user-plus mr-2"></i>
            Register
          </a>

          {/* Login Button */}
          <a
            href="/login"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
