// import React, { useState, useRef, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import userImage from "../../assets/logo.png";

// const Navbar = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleToggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const [openDropdown, setOpenDropdown] = useState(null);
//   const dropdownRef = useRef(null);

//   const menuItems = [
//     { label: "About us", submenu: ["Mission", "Team"] },
//     { label: "Destination", submenu: ["Canada", "UK"] },
//     { label: "Our Services", submenu: ["Visa Help", "Counseling"] },
//     { label: "Resources", submenu: ["Blogs", "Guides"] },
//     { label: "Scholarships", submenu: ["Partial", "Full Funded"] },
//     { label: "Contact us", submenu: null },
//   ];

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="w-full bg-white shadow-sm px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img src={userImage} className="h-10 w-auto object-contain" />
//           </div>

//           {/* Desktop Menu */}

//           <div
//             className="hidden md:flex items-center space-x-6 text-sm text-gray-700"
//             ref={dropdownRef}
//           >
//             {menuItems.map((item, i) => (
//               <div key={i} className="relative">
//                 <button
//                   onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
//                   className="flex items-center gap-1 cursor-pointer"
//                 >
//                   {item.label}
//                   {item.submenu && <span>▼</span>}
//                 </button>

//                 {/* Dropdown Items */}
//                 {openDropdown === i && item.submenu && (
//                   <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md py-2 w-40 z-50">
//                     {item.submenu.map((subItem, index) => (
//                       <div
//                         key={index}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       >
//                         {subItem}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Register Now Button (Desktop) */}
//           <div className="hidden md:block">
//             <button
//               onClick={handleToggleForm}
//               className="bg-[#f16f22] hover:bg-[#252364] text-white text-base font-medium rounded-full px-6 py-2 transition duration-300"
//             >
//               Register Now
//             </button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center space-x-4">
//             <button
//               onClick={handleToggleForm}
//               className="bg-[#f16f22] hover:bg-red-600 text-white text-sm font-medium rounded-full px-4 py-2"
//             >
//               Register
//             </button>
//             <button
//               onClick={handleMenuToggle}
//               className="text-2xl text-gray-700"
//             >
//               {menuOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="mt-4 flex flex-col space-y-3 text-gray-700 md:hidden">
//             {[
//               "About us",
//               "Destination",
//               "Our Services",
//               "Resources",
//               "Scholarships",
//               "Contact us",
//             ].map((item, i) => (
//               <div key={i} className="px-2 py-1 border-b border-gray-200">
//                 {item}
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* Modal */}
//       {showForm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 px-4">
//           <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
//             {/* Close Button */}
//             <button
//               onClick={handleToggleForm}
//               className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
//             >
//               &times;
//             </button>

//             <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
//               Register with Us to Take the Next Step
//             </h3>

//             <form className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="border border-red-400 rounded-lg px-4 py-2 w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="border border-red-400 rounded-lg px-4 py-2 w-full"
//                 />
//               </div>

//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="border border-red-400 rounded-lg px-4 py-2 w-full"
//               />

//               <div className="grid grid-cols-[80px_1fr] gap-2">
//                 <input
//                   type="text"
//                   value="+880"
//                   readOnly
//                   className="border border-red-400 rounded-lg px-4 py-2 w-full bg-gray-100"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Mobile Number"
//                   className="border border-red-400 rounded-lg px-4 py-2 w-full"
//                 />
//               </div>

//               <select className="border border-red-400 rounded-lg px-4 py-2 w-full">
//                 <option>Your Nearest Global Routways Office</option>
//               </select>

//               <select className="border border-red-400 rounded-lg px-4 py-2 w-full">
//                 <option>Your Preferred Study Destination</option>
//               </select>

//               <select className="border border-red-400 rounded-lg px-4 py-2 w-full">
//                 <option>English Language Test Status</option>
//               </select>

//               <input
//                 type="text"
//                 placeholder="How do you plan to fund your studies"
//                 className="border border-red-400 rounded-lg px-4 py-2 w-full"
//               />

//               {/* Terms */}
//               <div className="flex items-start gap-2 text-sm">
//                 <input type="checkbox" defaultChecked className="mt-1" />
//                 <p>
//                   By clicking, you agree to our{" "}
//                   <a href="#" className="text-blue-600 underline">
//                     Privacy Policy
//                   </a>{" "}
//                   and{" "}
//                   <a href="#" className="text-blue-600 underline">
//                     Terms & Conditions
//                   </a>
//                 </p>
//               </div>

//               <div className="flex justify-center">
//                 <button className="mt-6 bg-[#f16f22] hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

//2nd code
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../../assets/logo.png";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleToggleForm = () => setShowForm(!showForm);
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
      submenu: [
        { label: "Admission Support", link: "/visa-help" },
        { label: "Health insurance", link: "/health-insurance" },
        { label: "Student Accommodation", link: "/student-accommodation" },
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
        { label: "Scholarships in Australia", link: "/scholarships/partial" },
        { label: "Scholarships in UK", link: "/scholarships/full-funded" },
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
                    {/* Label link */}
                    <Link
                      to={item.link}
                      className="flex items-center gap-1 cursor-pointer font-bold hover:text-blue-600"
                    >
                      {item.label}
                      <span>▼</span>
                    </Link>

                    {/* Submenu - visible on group hover */}
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
                    className="cursor-pointer font-bold hover:text-blue-600"
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
              className="bg-[#f16f22] hover:bg-[#252364] text-white text-base font-medium rounded-full px-6 py-2 transition duration-300"
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-3 text-gray-700 md:hidden">
            {menuItems.map((item, i) => (
              <div key={i} className="px-2 py-1 border-b border-gray-200">
                {item.label}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleToggleForm}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
              Register with Us to Take the Next Step
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-red-400 rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-red-400 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="border border-red-400 rounded-lg px-4 py-2 w-full"
              />
              <div className="grid grid-cols-[80px_1fr] gap-2">
                <input
                  type="text"
                  value="+880"
                  readOnly
                  className="border border-red-400 rounded-lg px-4 py-2 w-full bg-gray-100"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border border-red-400 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <select className="border border-red-400 rounded-lg px-4 py-2 w-full">
                <option>Your Nearest Global Routways Office</option>
              </select>
              <select className="border border-red-400 rounded-lg px-4 py-2 w-full">
                <option>Your Preferred Study Destination</option>
              </select>
              <select className="border border-red-400 rounded-lg px-4 py-2 w-full">
                <option>English Language Test Status</option>
              </select>
              <input
                type="text"
                placeholder="How do you plan to fund your studies"
                className="border border-red-400 rounded-lg px-4 py-2 w-full"
              />
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
                <button className="mt-6 bg-[#f16f22] hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
