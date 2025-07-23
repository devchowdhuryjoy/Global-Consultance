import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import userImage from "../../assets/logo.png";

const EducationService = () => {
  return (
    <div className="bg-[#f7f7f7] py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-sm text-gray-800">
        {/* Left Column - Logo and About */}
        <div className="sm:col-span-2">
          <img src={userImage} className="h-10 w-auto object-contain" />
          <p className="mb-4">
            Since the establishment of Global Routways in 2006, we have been
            offering higher education consultancy services to students who are
            dreaming of a quality life abroad.
          </p>
          <div className="flex gap-3 mt-4 text-xl text-[#3b5998]">
            <FaFacebook className="hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="text-[#00acee] hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-[#C13584] hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Column 2 - Student Services */}
        <div>
          <h4 className="text-black font-semibold mb-2">Student Services</h4>
          <ul className="space-y-1">
            <li>Admission Support</li>
            <li>Visa Services</li>
            {/* <li>Health Insurance</li> */}
            <li>Student Accommodation</li>
          </ul>
        </div>

        {/* Column 3 - Study Destinations */}
        <div>
          <h4 className="text-black font-semibold mb-2">Study Destinations</h4>
          <ul className="space-y-1">
            <li>UK</li>
            <li>USA</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>Denmark</li>
            <li>Finland</li>
            <li>Sweden</li>
            <li>Dubai</li>
            <li>Malaysia</li>
            <li>Europe</li>
          </ul>
        </div>

        {/* Column 4 - Courses */}
        <div>
          <h4 className="text-black font-semibold mb-2">Courses</h4>
          <ul className="space-y-1">
            <li>Nursing</li>
            <li>Accounting</li>
            <li>Engineering</li>
            <li>Business Studies</li>
            <li>Food and Hospitality Management</li>
          </ul>
        </div>

        {/* Column 6 - About Global Routways */}
        <div>
          <h4 className="text-black font-semibold mb-2">
            About Global Routways
          </h4>
          <ul className="space-y-1">
            <li>About Global Routeway</li>
            <li>Our Leadership</li>
            <li>Awards & Achievements</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationService;
