import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

// const offices = [
//   {
//     name: "Mohammadpur",
//     address: `N Islam Tower, 19/C/F Block-F, Ring Road, Shamoly, Mohammadpur, Dhaka 1207, Bangladesh`,
//     phone: "01618-858541-9",
//   },
// ];

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] pt-5 pb-4 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Title */}
      {/* <div className="border-t">
        <h2 className="text-xl sm:text-2xl font-semibold text-[#e63946] mt-4">
          Global Routways Office in Bangladesh
        </h2>
      </div> */}

      {/* Office Card - Start Aligned (not centered) */}
      {/* <div className="grid grid-cols-1 text-sm text-gray-800">
        {offices.map((office, idx) => (
          <div key={idx} className=" p-6  w-full md:max-w-xl">
            <h3 className="text-[#e63946] font-semibold text-lg mb-2">
              {office.name}
            </h3>
            <p className="flex items-start gap-2 text-sm mb-2">
              <span className="text-[#e63946] mt-1">📍</span>
              {office.address}
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-[#e63946]" /> {office.phone}
            </p>
          </div>
        ))}
      </div> */}

      {/* Footer */}
      <div className="mt-10 border-t pt-4 text-center text-sm text-black font-semibold">
        Copyright © 2025{" "}
        <span className="font-medium text-[#f16f22]">Global Routways Bangladesh</span> |
        Powered by <span className="font-medium">Global Routways</span>
      </div>
    </div>
  );
};

export default Footer;
