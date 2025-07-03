import React from "react";
import { FaCrown } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full">
              <FaCrown className="text-red-500 text-lg" />
            </div>
            <p className="text-lg font-medium">Free* End-to-End Assistance</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full">
              <FaCrown className="text-red-500 text-lg" />
            </div>
            <p className="text-lg font-medium">Trusted by 22,000+ Students</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full">
              <FaCrown className="text-red-500 text-lg" />
            </div>
            <p className="text-lg font-medium">550+ Partner Institutions</p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md w-full">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
            Register with Us to Take the Next Step
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-black rounded-lg px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-black  rounded-lg px-4 py-2 w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border border-black rounded-lg px-4 py-2 w-full"
            />
            <div className="grid grid-cols-[80px_1fr] gap-2">
              <input
                type="text"
                value="+880"
                readOnly
                className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="border border-black rounded-lg px-4 py-2 w-full"
              />
            </div>
            <select className="border border-black  rounded-lg px-4 py-2 w-full">
              <option>Your Nearest Global Routways Office</option>
            </select>
            <select className="border border-black rounded-lg px-4 py-2 w-full">
              <option>Your Preferred Study Destination</option>
            </select>
            <select className="border border-black rounded-lg px-4 py-2 w-full">
              <option>English Language Test Status</option>
            </select>
            <input
              type="text"
              placeholder="How do you plan to fund your studies"
              className="border border-blackrounded-lg px-4 py-2 w-full"
            />

            {/* Terms and checkbox */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" defaultChecked className="mt-1" />
              <p>
                By clicking, you agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>
              </p>
            </div>
            <div className="flex justify-center">
              <button className="mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
