import React, { useState } from "react";
// import { FaCrown } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SimpleSteps from "../Simple Steps/SimpleSteps";
import SuccessStories from "../SuccessStories/SuccessStories";
const countries = ["Bangladesh", "Australia", "USA", "UK"];

const ContactUs = () => {
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

  return (
    <>
      {/* 1st section */}
      <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="mb-10 lg:mb-0 lg:w-1/2">
            <button className="bg-red-100 text-red-600 px-4 py-1 rounded mb-4">
              Contact us
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Reach out to us and get started on <br />
              your <span className="text-blue-900">Study Abroad Dreams</span>
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Our team of experts are waiting to assist you further. You can get
              in touch by:
            </p>
          </div>

          {/* Right Section (Images) */}
          <div className="lg:w-1/2 flex justify-center relative">
            <img
              src="university.jpg" // Replace with real graduate image or upload yours
              alt="Graduate"
              className="w-[280px] md:w-[300px] z-10 relative"
            />
          </div>
        </div>
      </div>
      {/* 1st section */}

      {/* 2nd section */}
      <div className="bg-white text-center py-12 px-4 sm:px-6 lg:px-12">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Schedule an Appointment <br /> with your nearest Global Routeway
          Office
        </h2>

        {/* Subheading */}
        <p className="text-gray-500 text-base md:text-lg max-w-3xl w-full md:w-4/5 lg:w-3/4 mx-auto mb-8 text-center">
          Whether you want to meet us virtually or in-person, we’ve got you
          covered. Here’s what you need:
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-left max-w-5xl mx-auto mb-12">
          <div className="md:w-1/3 px-4 border-[2px] border-black p-4 rounded-md shadow-sm">
            <p>
              <span className="font-semibold">Step 1:</span> Select your <br />{" "}
              Nearest Global Routeway Office
            </p>
          </div>
          <div className="md:w-1/3 px-4 border-[2px] border-black p-4 rounded-md shadow-sm">
            <p>
              <span className="font-semibold">Step 2:</span> Choose the
              preferred <br /> mode, date and time slot
            </p>
          </div>
          <div className="md:w-1/3 px-4 border-[2px] border-black p-4 rounded-md shadow-sm">
            <p>
              <span className="font-semibold">Step 3:</span> Fill the requested
              details. Your <br /> Appointment is scheduled. See you there!
            </p>
          </div>
        </div>
      </div>
      {/* 2nd section */}

      {/* 3rd section */}

      <div className="bg-blue-50 p-4 md:p-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Our Services can be Availed in{" "}
            <span className="text-[#f16f22]">4 Countries</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Pick a country and get the details to connect with our team located
            near you:
          </p>

          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-5 py-2 rounded-full border transition-all ${
                  selectedCountry === country
                    ? "bg-[#f16f22] text-white shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50"
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          {selectedCountry === "Bangladesh" && (
            <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Mohammadpur
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                <span className="inline-block text-[#f16f22] mr-1">📍</span>N
                Islam Tower, 19/C/F Block-F, Ring Road, Shamoly, Mohammadpur,
                Dhaka 1207, Bangladesh
              </p>
              <p className="text-sm text-gray-700 mb-4">
                <span className="inline-block text-[#f16f22] mr-1">📞</span>
                01618-858541-9
              </p>
              <button className="w-full bg-[#f16f22] hover:bg-[#252364] text-white py-2 rounded-lg font-semibold">
                Schedule a Virtual Meeting
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3rd section */}

      {/* 4rd section */}
      <SimpleSteps />
      {/* 4rd section */}

      {/* 5rd section */}
      <SuccessStories />
      {/* 5rd section */}
    </>
  );
};

export default ContactUs;
