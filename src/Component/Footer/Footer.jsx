import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] pt-5 pb-4 px-4 sm:px-8 md:px-16 lg:px-24">
     
      {/* Footer */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-black font-semibold">
        Copyright © 2025{" "}
        <span className="font-medium text-[#f16f22]">Global Routeway Consultants</span> |
        Powered by <span className="font-medium text-[#f16f22]">Global Routways</span>
      </div>
    </div>
  );
};

export default Footer;
