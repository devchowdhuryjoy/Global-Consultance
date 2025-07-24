import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import userImage from "../../assets/logo.png";

const EducationService = () => {
  return (
    <div className="bg-[#f7f7f7] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 text-sm text-gray-800">
        {/* Column 1-2: Logo + About */}
        <div className="sm:col-span-2">
          <img src={userImage} alt="Logo" className="h-12 w-auto mb-4" />
          <p className="leading-relaxed text-gray-700">
            Since the establishment of Global Routeways in 2006, we have been
            offering higher education consultancy services to students who are
            dreaming of a quality life abroad.
          </p>
          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebook className="text-[#3b5998] hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="text-[#00acee] hover:text-sky-500 cursor-pointer" />
            <FaInstagram className="text-[#C13584] hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Column 3 - Student Services */}
        <div>
          <h4 className="text-[#252364] font-semibold mb-3">
            Student Services
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li>Admission Support</li>
            <li>Visa Services</li>
            <li>Student Accommodation</li>
          </ul>
        </div>

        {/* Column 4 - Study Destinations */}
        <div>
          <h4 className="text-[#252364] font-semibold mb-3">
            Study Destinations
          </h4>
          <ul className="space-y-2 text-gray-700">
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

        {/* Column 5 - Courses */}
        <div>
          <h4 className="text-[#252364] font-semibold mb-3">Courses</h4>
          <ul className="space-y-2 text-gray-700">
            <li>Nursing</li>
            <li>Accounting</li>
            <li>Engineering</li>
            <li>Business Studies</li>
            <li>Food & Hospitality Management</li>
          </ul>
        </div>

        {/* Column 6 - About */}
        <div>
          <h4 className="text-[#252364] font-semibold mb-3">
            About Global Routeways
          </h4>
          <ul className="space-y-2 text-gray-700">
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
