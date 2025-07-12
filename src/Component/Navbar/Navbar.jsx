import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../../assets/logo.png";
import Swal from "sweetalert2";
import BASE_URL from "../../Api BaseUrl/BaseUrl";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);

  const menuItems = [
    {
      label: "About us",
      link: "/aboutus",
      submenu: [
        { label: "Award and Achievements", link: "/mission" },
        { label: "Our Leadrship Team", link: "/team" },
        { label: "Testimonials", link: "/testimonials" },
      ],
    },
    {
      label: "Destination",
      link: "/destination",
      submenu: [
        { label: "Study in UK", link: "/uk" },
        { label: "Study in Canada", link: "/canada" },
        { label: "Study in Australia", link: "/australia" },
        { label: "Study in USA", link: "/usa" },
        { label: "Study in Europe", link: "/europe" },
        { label: "Study in New Zealand", link: "/new-zealand" },
        { label: "Study in Japan", link: "/japan" },
      ],
    },
    {
      label: "Our Services",
      link: "/ourservices",
      submenu: [
        { label: "Admission Support", link: "/admission-support" },
        { label: "Health insurance", link: "/health-insurance" },
        // { label: "Student Accommodation", link: "/studennts-accom" },
        { label: "Visa Services", link: "/visa-service" },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "Blogs", link: "/blogs" },
        { label: "Courses", link: "/courses" },
      ],
    },
    {
      label: "Scholarships",
      submenu: [
        { label: "Scholarships in Australia", link: "/scholarships" },
        { label: "Scholarships in UK", link: "/scolarshipinuk" },
      ],
    },
    { label: "Contact Us", submenu: null, link: "/contactus" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Form state and handlers
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    nearestOffice: "",
    studyDestination: "",
    englishTestStatus: "",
    fundingPlan: "",
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      Swal.fire({
        title: "Required",
        text: "You must agree to Privacy Policy and Terms & Conditions.",
        icon: "warning",
        confirmButtonColor: "#f16f22",
      });
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${BASE_URL}/registration`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          nearestOffice: formData.nearestOffice,
          studyDestination: formData.studyDestination,
          englishTestStatus: formData.englishTestStatus,
          fundingPlan: formData.fundingPlan,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to submit");
      }

      Swal.fire({
        title: "Success!",
        text: "Registration submitted successfully!",
        icon: "success",
        confirmButtonColor: "#f16f22",
        confirmButtonText: "OK",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        nearestOffice: "",
        studyDestination: "",
        englishTestStatus: "",
        fundingPlan: "",
        agreeTerms: false,
      });

      setShowForm(false);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#f16f22",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="w-full bg-white shadow-sm px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src={userImage}
                className="h-10 w-auto object-contain cursor-pointer"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex items-center space-x-6 text-sm text-gray-700"
            ref={dropdownRef}
          >
            {menuItems.map((item, i) => (
              <div key={i} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      to={item.link}
                      className="flex items-center gap-1 cursor-pointer font-bold hover:text-[#f16f22]"
                    >
                      {item.label}
                      <span>▼</span>
                    </Link>

                    <div className="absolute top-full left-0 mt-2 bg-white shadow-md border border-gray-200 rounded-md py-2 min-w-[12rem] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.link}
                          className="block px-4 py-2 hover:bg-gray-100 text-gray-800 font-semibold whitespace-nowrap"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className="cursor-pointer font-bold hover:text-[#f16f22]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Register Now Button */}
          <div className="hidden md:block">
            <button
              onClick={handleToggleForm}
              className="bg-[#f16f22] hover:bg-[#252364] text-white text-base font-medium rounded-full px-6 py-2 transition duration-300 "
            >
              Register Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleToggleForm}
              className="bg-[#f16f22] hover:bg-[#252364] text-white text-sm font-medium rounded-full px-4 py-2"
            >
              Register
            </button>
            <button
              onClick={handleMenuToggle}
              className="text-2xl text-gray-700"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown Accordion) */}
      {menuOpen && (
        <div className="md:hidden mt-4" ref={dropdownRef}>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200">
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center py-2 font-semibold text-gray-800 cursor-pointer px-2"
                >
                  <Link
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="flex-1"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <span className="text-xl">
                      {openIndex === index ? "▲" : "▼"}
                    </span>
                  )}
                </div>
                {item.submenu && openIndex === index && (
                  <ul className="pl-4 pb-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.link}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1 text-sm text-gray-700 hover:text-[#f16f22]"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleToggleForm}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
              aria-label="Close form"
            >
              &times;
            </button>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
              Register with Us to Take the Next Step
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="grid grid-cols-[80px_1fr] gap-2">
                <input
                  type="text"
                  value="+880"
                  readOnly
                  className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
                />
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                name="nearestOffice"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.nearestOffice}
                onChange={handleChange}
                required
              >
                <option value="">Your Nearest Global Routways Office</option>
                <option value="Global Routways Office">
                  Global Routways Office
                </option>
              </select>
              <select
                name="studyDestination"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.studyDestination}
                onChange={handleChange}
                required
              >
                <option value="">Your Preferred Study Destination</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                {/* Add more options as needed */}
              </select>
              <select
                name="englishTestStatus"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.englishTestStatus}
                onChange={handleChange}
                required
              >
                <option value="">English Language Test Status</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
              </select>
              <input
                type="text"
                name="fundingPlan"
                placeholder="How do you plan to fund your studies"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.fundingPlan}
                onChange={handleChange}
                required
              />
              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
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
                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {message && (
              <p
                className={`mt-4 text-center font-semibold ${
                  message.startsWith("Error") ? "text-black" : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
