import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const offices = [
  // {
  //   name: "Shamoly",
  //   address: `SIMA Blossom (5th Floor) Plot 390 (Old), 03 (New), Road-27 (Old) 16, New, Dhaka 1209, Bangladesh`,
  //   phone: "+880 9609 80 03 00",
  // },
  {
    name: "Mohammadpur",
    address: `N Islam Tower, Block-F, Ring Road, Shamoly, Mohammadpur, Dhaka 1207, Bangladesh`,
    phone: "+880 9609 80 07 00",
  },
  // {
  //   name: "Chattogram",
  //   address: `5th floor, Equity Centrum, O R Nizam Road,\nGEC Circle, Chattogram`,
  //   phone: "+880 9609 80 04 00",
  // },
  // {
  //   name: "Uttara",
  //   address: `Level 8, RM Plaza, 20 Sonargaon Jonopath Road,\nSector 11, Dhaka 1230`,
  //   phone: "+880 9609 80 05 00",
  // },
];

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] pt-10 pb-4 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-xl sm:text-2xl font-semibold text-black mb-8">
        Global Routways Offices in Bangladesh
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-800">
        {offices.map((office, idx) => (
          <div key={idx}>
            <h3 className="text-black font-semibold text-lg mb-2">
              {office.name}
            </h3>
            <p className="flex items-start gap-2 text-sm mb-2 whitespace-pre-line">
              <FaMapMarkerAlt className="text-black mt-1" /> {office.address}
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-black" /> {office.phone}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-4 text-center text-sm text-black font-bold">
        Copyright © 2025{" "}
        <span className="font-medium">Global Routways Bangladesh</span> |
        Powered by <span className="font-medium">Global Routways</span>
      </div>
    </div>
  );
};

export default Footer;
