import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import userImage from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const EducationService = () => {
  const offices = [
    {
      name: "Mohammadpur",
      address: `N Islam Tower, 19/C/F Block-F, Ring Road, Shamoly, Mohammadpur, Dhaka 1207, Bangladesh`,
      phone: "01618-858541-9",
    },
  ];

  return (
    <div className="bg-[#f7f7f7] py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 text-sm text-gray-800">
        {/* Column 1-2: Logo + About */}
        <div className="sm:col-span-2">
          <img src={userImage} alt="Logo" className="h-12 w-auto mb-4" />
          <p className="leading-relaxed text-black-700">
            Since the establishment of Global Routeways in 2024, we have been
            offering higher education consultancy services to students who are
            dreaming of a quality life abroad.
          </p>

          <div className="grid grid-cols-1 text-sm text-black-800">
            {offices.map((office, idx) => (
              <div key={idx} className=" p-6  w-full md:max-w-xl">
                <h3 className="text-[#f16f22] font-semibold text-lg mb-2">
                  {office.name}
                </h3>
                <p className="flex items-start gap-2 text-sm mb-2">
                  <span className="text-[#f16f22] mt-1">📍</span>
                  {office.address}
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-[#f16f22]" /> {office.phone}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 text-xl">
            <FaFacebook className="text-[#3b5998] hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="text-[#00acee] hover:text-sky-500 cursor-pointer" />
            <FaInstagram className="text-[#C13584] hover:text-pink-500 cursor-pointer" />
          </div>
        </div>

        {/* Column 3 - Student Services */}
        <div>
          <h4 className="text-[#f16f22] font-semibold mb-3">
            Student Services
          </h4>
          <ul className="space-y-2 text-black-700">
            <li>
              <Link
                to="/admission-support"
                onClick={() => window.scrollTo(0, 0)}
              >
                Admission Support
              </Link>
            </li>
            <li>
              <Link to="/visa-service" onClick={() => window.scrollTo(0, 0)}>
                Visa Services
              </Link>
            </li>
            {/* <li>Student Accommodation</li> */}
          </ul>

          <h4 className="text-[#f16f22] font-semibold mt-5 mb-3">
            Scholarships
          </h4>
          <ul className="space-y-2 text-black-700">
            <li>
              <Link to="/scholarships" onClick={() => window.scrollTo(0, 0)}>
                Australia Scholarships
              </Link>
            </li>
            <li>
              <Link to="/scolarshipinuk" onClick={() => window.scrollTo(0, 0)}>
                UK Scholarships
              </Link>
            </li>
          </ul>

          <h4 className="text-[#f16f22] font-semibold mt-5 mb-3">Resources</h4>
          <ul className="space-y-2 text-black-700">
            <li>
              <Link to="/blogs" onClick={() => window.scrollTo(0, 0)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/courses" onClick={() => window.scrollTo(0, 0)}>
                Course
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Study Destinations */}
        <div>
          <h4 className="text-[#f16f22] font-semibold mb-3">
            Study Destinations
          </h4>
          <ul className="space-y-2 text-black-700">
            <li>
              <Link to="/uk" onClick={() => window.scrollTo(0, 0)}>
                UK
              </Link>
            </li>
            <li>
              <Link to="/usa" onClick={() => window.scrollTo(0, 0)}>
                USA
              </Link>
            </li>
            <li>
              <Link to="/Australia" onClick={() => window.scrollTo(0, 0)}>
                Australia
              </Link>
            </li>
            <li>
              <Link to="/canada" onClick={() => window.scrollTo(0, 0)}>
                Canada
              </Link>
            </li>
            {/* <li>Denmark</li> */}
            <li>
              <Link to="/japan" onClick={() => window.scrollTo(0, 0)}>
                Finland
              </Link>
            </li>

            <li>
              <Link to="/new-zealand" onClick={() => window.scrollTo(0, 0)}>
                Sweden
              </Link>
            </li>
            {/* <li>Dubai</li> */}
            {/* <li>Malaysia</li> */}
            <li>
              <Link to="/europe" onClick={() => window.scrollTo(0, 0)}>
                Europe
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5 - Courses */}
        <div>
          <h4 className="text-[#f16f22] font-semibold mb-3">Courses</h4>
          <ul className="space-y-2 text-black-700">
            <li>
              <Link to="/nursing" onClick={() => window.scrollTo(0, 0)}>
                Nursing
              </Link>
            </li>
            <li>
              <Link to="/accounting" onClick={() => window.scrollTo(0, 0)}>
                Accounting
              </Link>
            </li>
            <li>
              <Link to="/engineering" onClick={() => window.scrollTo(0, 0)}>
                Engineering
              </Link>
            </li>
            <li>
              <Link
                to="/business-studies"
                onClick={() => window.scrollTo(0, 0)}
              >
                Business Studies
              </Link>
            </li>
            <li>
              <Link to="/hospitality" onClick={() => window.scrollTo(0, 0)}>
                Food & Hospitality Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 6 - About */}
        <div>
          <h4 className="text-[#f16f22] font-semibold mb-3">
            About Global Routeways
          </h4>
          <ul className="space-y-2 text-black-700">
            {/* <li>About Global Routeway</li>
            <li>Our Leadership</li>
            <li>Awards & Achievements</li>
            <li>Testimonials</li>
            <li>Contact Us</li> */}
            <li>
              <Link to="/aboutus" onClick={() => window.scrollTo(0, 0)}>
                About Global Routeway
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => window.scrollTo(0, 0)}>
                Our Leadership
              </Link>
            </li>
            <li>
              <Link to="/mission" onClick={() => window.scrollTo(0, 0)}>
                Awards & Achievements
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={() => window.scrollTo(0, 0)}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={() => window.scrollTo(0, 0)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationService;
