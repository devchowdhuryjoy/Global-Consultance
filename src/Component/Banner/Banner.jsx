import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-black to-black py-20 text-center text-white relative overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-bold">
        Your Study Abroad Dream
        <br />
        <span className="text-[#f16f22]">is our only Priority.</span>
      </h1>
      <p className="mt-4 text-lg text-white/80">
        From education to visas, we’ve got your back.
      </p>
      <button className="mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold py-2 px-6 rounded-full transition-all">
        Book a FREE Consultation
      </button>

      {/* Floating Countries and Icons */}
      {/* <div className="relative mt-20 flex justify-center">
        <div className="absolute w-full h-full top-0 left-0 flex flex-wrap justify-center items-center gap-6 text-red-500">
          {[
            { country: "UK", flag: "/uk.png" },
            { country: "USA", flag: "/usa.png" },
            { country: "Canada", flag: "/ca.png" },
            { country: "Hungary", flag: "/hu.png" },
            { country: "Denmark", flag: "/de.png" },
            { country: "Finland", flag: "/fi.png" },
            { country: "Sweden", flag: "/se.png" },
            { country: "Dubai", flag: "/ae.png" },
            { country: "Malaysia", flag: "/my.png" },
            { country: "Europe", flag: "/eu.png" },
            
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white text-black px-3 py-1 rounded-full shadow-md text-sm flex items-center gap-2"
            >
              <img
                src={item.flag}
                alt={item.country}
                className="w-5 h-4 object-cover"
              />
              <span>{item.country}</span>
            </div>
          ))}
        </div>
      </div> */}

      <div className="mt-20 px-4 md:px-0">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {[
            { country: "UK", flag: "/uk.png" },
            { country: "USA", flag: "/usa.png" },
            { country: "Canada", flag: "/ca.png" },
            { country: "Hungary", flag: "/hu.png" },
            { country: "Denmark", flag: "/de.png" },
            { country: "Finland", flag: "/fi.png" },
            { country: "Sweden", flag: "/se.png" },
            { country: "Dubai", flag: "/ae.png" },
            { country: "Malaysia", flag: "/my.png" },
            { country: "Europe", flag: "/eu.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white text-black px-3 py-1 rounded-full shadow-md text-sm flex items-center gap-2"
            >
              <img
                src={item.flag}
                alt={item.country}
                className="w-5 h-4 object-cover"
              />
              <span className="whitespace-nowrap">{item.country}</span>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};
export default Banner;
