import React from "react";
import userImage from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={userImage}
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Menu */}
      <div className="flex items-center space-x-6 text-sm text-gray-700">
        <div className="relative group cursor-pointer">
          <span>About us</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="relative group cursor-pointer">
          <span>Destination</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="relative group cursor-pointer">
          <span>Our Services</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="relative group cursor-pointer">
          <span>Resources</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="relative group cursor-pointer">
          <span>Scholarships</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="cursor-pointer">
          <span>Contact us</span>
        </div>
      </div>

      {/* Register Now Button */}
      <div>
        <button className="bg-[#f16f22] hover:bg-red-600 text-white text-base font-medium rounded-full px-6 py-2">
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
