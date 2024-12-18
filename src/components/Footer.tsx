import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-4">
        {/* Social Media Icons */}
        <a href="#" className="hover:text-purple-400" aria-label="Facebook">
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a href="#" className="hover:text-purple-400" aria-label="Twitter">
          <i className="fab fa-twitter text-lg"></i>
        </a>
        <a href="#" className="hover:text-purple-400" aria-label="Instagram">
          <i className="fab fa-instagram text-lg"></i>
        </a>
        <a href="#" className="hover:text-purple-400" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in text-lg"></i>
        </a>
      </div>
      <div className="text-center text-sm text-gray-400 mt-2">
        &copy; {new Date().getFullYear()} BookBreeze. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
