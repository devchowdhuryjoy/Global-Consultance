import React, { useState } from "react";
// import { FaCrown } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SimpleSteps from "../Simple Steps/SimpleSteps";
import SuccessStories from "../SuccessStories/SuccessStories";
const countries = ["Bangladesh", "Australia", "USA", "UK"];

const ContactUs = () => {

  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

  return (
    // <div className="bg-gray-100 py-10 px-4 md:px-16 ">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    //     {/* Left Section */}
    //     <div className="space-y-6 text-center md:text-left">
    //       <h2 className="text-2xl font-semibold">Contact Us</h2>
    //       <div className="flex items-center gap-4">
    //         <div className="bg-white p-2 rounded-full">
    //           <FaCrown className="text-red-500 text-lg" />
    //         </div>
    //         <p className="text-lg font-medium">Free* End-to-End Assistance</p>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <div className="bg-white p-2 rounded-full">
    //           <FaCrown className="text-red-500 text-lg" />
    //         </div>
    //         <p className="text-lg font-medium">Trusted by 22,000+ Students</p>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <div className="bg-white p-2 rounded-full">
    //           <FaCrown className="text-red-500 text-lg" />
    //         </div>
    //         <p className="text-lg font-medium">550+ Partner Institutions</p>
    //       </div>
    //     </div>

    //     {/* Right Section - Form */}
    //     <div className="bg-white p-6 rounded-2xl shadow-md w-full">
    //       <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
    //         Register with Us to Take the Next Step
    //       </h3>
    //       <form className="space-y-4">
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //           <input
    //             type="text"
    //             placeholder="First Name"
    //             className="border border-black rounded-lg px-4 py-2 w-full"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Last Name"
    //             className="border border-black  rounded-lg px-4 py-2 w-full"
    //           />
    //         </div>
    //         <input
    //           type="email"
    //           placeholder="Email"
    //           className="border border-black rounded-lg px-4 py-2 w-full"
    //         />
    //         <div className="grid grid-cols-[80px_1fr] gap-2">
    //           <input
    //             type="text"
    //             value="+880"
    //             readOnly
    //             className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
    //           />
    //           <input
    //             type="text"
    //             placeholder="Mobile Number"
    //             className="border border-black rounded-lg px-4 py-2 w-full"
    //           />
    //         </div>
    //         <select className="border border-black  rounded-lg px-4 py-2 w-full">
    //           <option>Your Nearest Global Routways Office</option>
    //           <option>Global Routways Office</option>
    //         </select>
    //         <select className="border border-black rounded-lg px-4 py-2 w-full">
    //           <option>Your Preferred Study Destination</option>
    //           <option>Destination</option>
    //         </select>
    //         <select className="border border-black rounded-lg px-4 py-2 w-full">
    //           <option>English Language Test Status</option>
    //           <option>English Language</option>
    //         </select>
    //         <input
    //           type="text"
    //           placeholder="How do you plan to fund your studies"
    //           className="border border-blackrounded-lg px-4 py-2 w-full"
    //         />

    //         {/* Terms and checkbox */}
    //         <div className="flex items-start gap-2 text-sm">
    //           <input type="checkbox" defaultChecked className="mt-1" />
    //           <p>
    //             By clicking, you agree to our{" "}
    //             <a href="#" className="text-blue-600 underline">
    //               Privacy Policy
    //             </a>{" "}
    //             and{" "}
    //             <a href="#" className="text-blue-600 underline">
    //               Terms & Conditions
    //             </a>
    //           </p>
    //         </div>
    //         <div className="flex justify-center">
    //           <button className="mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300">
    //             Submit
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

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
        {/* <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto mb-8">
          Whether you want to meet us virtually or in-person, we got you
          covered. Here’s what you need to do:
        </p> */}
        <p className="text-gray-500 text-base md:text-lg max-w-3xl w-full md:w-4/5 lg:w-3/4 mx-auto mb-8 text-center">
          Whether you want to meet us virtually or in-person, we’ve got you
          covered. Here’s what you need:
        </p>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-left max-w-5xl mx-auto mb-12">
          <div className="md:w-1/3 px-4">
            <p>
              <span className="font-semibold">Step 1:</span> Select your <br />{" "}
              Nearest Global Routeway Office
            </p>
          </div>
          <div className="md:w-1/3 px-4">
            <p>
              <span className="font-semibold">Step 2:</span> Choose the
              preferred <br /> mode, date and time slot
            </p>
          </div>
          <div className="md:w-1/3 px-4">
            <p>
              <span className="font-semibold">Step 3:</span> Fill the requested
              details. Your <br /> Appointment is scheduled. See you there!
            </p>
          </div>
        </div>
      </div>
      {/* 2nd section */}

      {/* 3rd section */}
      {/* <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-12 text-center">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Our Services can be Availed in 4 Countries
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Pick a country and get the details to connect with our team located
          near you:
        </p>

        
        <div className="flex justify-center items-center flex-wrap gap-4 mb-10">
          {Object.keys(data).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCountry === country
                  ? "bg-indigo-900 text-white shadow-md"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data[selectedCountry]?.length ? (
            data[selectedCountry].map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 text-left hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-indigo-900 mb-2">
                  {location.title}
                </h3>
                <p className="text-gray-700 mb-3 flex items-start">
                  <FaMapMarkerAlt className="text-red-500 mt-1 mr-2" />
                  {location.address}
                </p>
                <p className="text-gray-700 mb-4 flex items-center">
                  <FaPhoneAlt className="text-red-500 mr-2" />
                  {location.phone}
                </p>
                <button className="bg-[#f16f22] hover:bg-[#252364] text-white px-4 py-2 rounded-md w-full font-semibold">
                  Schedule a Virtual Meeting
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-500">
              No locations available in {selectedCountry} yet.
            </p>
          )}
        </div>
      </div> */}

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
                <span className="inline-block text-[#f16f22] mr-1">📍</span>
                N Islam Tower, Block-F, Ring Road, Shamoly, Mohammadpur, 
                Dhaka 1207, Bangladesh
              </p>
              <p className="text-sm text-gray-700 mb-4">
                <span className="inline-block text-[#f16f22] mr-1">📞</span>
                +880 9609 80 07 00
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
