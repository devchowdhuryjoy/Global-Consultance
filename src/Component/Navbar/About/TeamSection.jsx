// import React, { useState } from "react";
// import { FaCrown } from "react-icons/fa";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
// import BASE_URL from "../../../Api BaseUrl/BaseUrl";

// const teamMembers = [
//   {
//     name: "Mohammad Shaiful Islam",
//     title: "Director and Founder",
//     image: "/university.jpg",
//     bgColor: "bg-[#fff]",
//     description: [
//       "Driven by a strong belief in the power of education.",
//       "Guided by certified expertise (QEAC D468) and a deep commitment to student success.",
//       "Focused on creating life-changing opportunities, high-paying careers, and brighter futures abroad.",
//     ],
//   },
//   {
//     name: "Md. Shaidul Islam",
//     title: "Chief Executive Officer",
//     image: "/studyusa.jpg",
//     bgColor: "bg-[#fff]",
//     description: [
//       "Founded on the belief that education and opportunity should have no limits.",
//       "Backed by strong industry ties and memberships in leading associations like IEAA, MIA, ISANA, ICEF, and Migration Alliance.",
//       "Brings certified expertise as a QEAC (H018) and Registered Migration Agent (MARN 1795751).",
//     ],
//   },
//   {
//     name: "Mosharraf Khan Yaafi",
//     title: "Chief Growth Officer",
//     image: "/study4.jpg",
//     bgColor: "bg-[#fff]",
//     description: [
//       "25+ years of corporate leadership across industries like FMCG, Telecom, international test management, & overseas education.",
//       "Proven expertise in operations, business development, growth strategy, and commercial management.",
//       "Has led successful projects across the UK, Australia, India, Sri Lanka, and Bangladesh.",
//     ],
//   },
//   {
//     name: "Fareha Begum",
//     title: "Sr. Country Director",
//     image: "/study6.jpg",
//     bgColor: "bg-[#fff]",
//     description: [
//       "A seasoned education professional with a strong foundation of knowledge and insight.",
//       "Contributing to the industry with proven expertise since 1999.",
//       "A key force behind the success and operations of PFEC Global Bangladesh.",
//     ],
//   },
// ];

// const TeamSection = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     nearestOffice: "",
//     studyDestination: "",
//     englishTestStatus: "",
//     fundingPlan: "",
//     agreeTerms: false,
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const sendData = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone.startsWith("+880")
//           ? formData.phone
//           : "+880" + formData.phone,
//         nearestOffice: formData.nearestOffice,
//         preferredDestination: formData.studyDestination,
//         testStatus: formData.englishTestStatus,
//         fundingPlan: formData.fundingPlan,
//       };

//       const response = await fetch(`${BASE_URL}register`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sendData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Submission failed");
//       }

//       Swal.fire({
//         title: "Success!",
//         text: data.message,
//         icon: "success",
//         confirmButtonColor: "#f16f22",
//       });

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         nearestOffice: "",
//         studyDestination: "",
//         englishTestStatus: "",
//         fundingPlan: "",
//         agreeTerms: false,
//       });
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: error.message || "Something went wrong.",
//         icon: "error",
//         confirmButtonColor: "#f16f22",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section className="bg-[#f9f9f9] py-16 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">

//           <div className="text-center mb-14">
//             <span className="inline-block bg-[#fff] text-[#f16f22] px-4 py-1 rounded-full text-sm font-semibold mb-4">
//               Our Leadership Team
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#000] leading-snug">
//               Rich with Experience. Fueled by Passion.
//               <br />
//               Driven by the Dreams of Study Abroad Aspirants.
//             </h2>
//             <p className="mt-4 text-[#000] text-base md:text-lg">
//               Meet the team that spearheads Global Routeway Global.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md overflow-hidden"
//               >
//                 <div className={`${member.bgColor} p-4`}>
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-64 object-cover rounded-md"
//                   />
//                 </div>
//                 <div className="bg-[#f16f22] text-white p-4">
//                   <h3 className="text-lg font-semibold">{member.name}</h3>
//                   <p className="text-sm">{member.title}</p>
//                 </div>
//                 <div className="p-4">
//                   <ul className="text-black text-base pl-3">
//                     {Array.isArray(member.description) ? (
//                       member.description.map((point, i) => (
//                         <li
//                           key={i}
//                           className="leading-relaxed flex items-start gap-1"
//                         >
//                           <span className="text-xl font-bold leading-none">
//                             .
//                           </span>
//                           <span>{point}</span>
//                         </li>
//                       ))
//                     ) : (
//                       <li className="leading-relaxed flex items-start gap-1">
//                         <span className="text-xl font-bold leading-none">
//                           .
//                         </span>
//                         <span>{member.description}</span>
//                       </li>
//                     )}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* contact us */}
//       <div className="bg-gray-100 py-10 px-4 md:px-16 ">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//           {/* Left Section */}
//           <div className="space-y-6 text-center md:text-left">
//             <h2 className="text-2xl font-semibold">Contact Us</h2>
//             <div className="flex items-center gap-4">
//               <div className="bg-white p-2 rounded-full">
//                 <FaCrown className="text-[#f16f22] text-lg" />
//               </div>
//               <p className="text-lg font-medium">Free* End-to-End Assistance</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="bg-white p-2 rounded-full">
//                 <FaCrown className="text-[#f16f22] text-lg" />
//               </div>
//               <p className="text-lg font-medium">Trusted by 22,000+ Students</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="bg-white p-2 rounded-full">
//                 <FaCrown className="text-[#f16f22] text-lg" />
//               </div>
//               <p className="text-lg font-medium">550+ Partner Institutions</p>
//             </div>
//           </div>

//           {/* Right Section - Form */}
//           <div className="bg-white p-6 rounded-2xl shadow-md w-full">
//             <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
//               Register with Us to Take the Next Step
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="border border-black rounded-lg px-4 py-2 w-full"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />

//               <div className="grid grid-cols-[80px_1fr] gap-2">
//                 <input
//                   type="text"
//                   value="+880"
//                   readOnly
//                   className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
//                 />
//                 <input
//                   type="number"
//                   name="phone"
//                   placeholder="Mobile Number"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <select
//                 name="nearestOffice"
//                 className="border border-black rounded-lg px-4 py-2 w-full"
//                 value={formData.nearestOffice}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Your Nearest Global Routways Office</option>
//                 <option value="Mohammadpur">Mohammadpur</option>
//                 {/* <option value="Dhanmondi">Dhanmondi</option>
//                 <option value="Mirpur">Mirpur</option> */}
//               </select>

//               <select
//                 name="studyDestination"
//                 className="border border-black rounded-lg px-4 py-2 w-full"
//                 value={formData.studyDestination}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Your Preferred Study Destination</option>
//                 <option value="UK">UK</option>
//                 <option value="USA">USA</option>
//                 <option value="Canada">Canada</option>
//                 <option value="Australia">Australia</option>
//                 <option value="Denmark">Denmark</option>
//                 <option value="Finland">Finland</option>
//                 <option value="Sweden">Sweden</option>
//                 <option value="Dubai">Dubai</option>
//                 <option value="Malaysia">Malaysia</option>
//                 <option value="Europe">Europe</option>
//               </select>

//               <select
//                 name="englishTestStatus"
//                 className="border border-black rounded-lg px-4 py-2 w-full"
//                 value={formData.englishTestStatus}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">English Language Test Status</option>
//                 <option value="I have the Scores available">
//                   I have the Scores available
//                 </option>
//                 <option value="My exams are scheduled">
//                   My exams are scheduled
//                 </option>
//                 <option value="I have not appeared for any exams">
//                   I have not appeared for any exams
//                 </option>
//                 <option value="I am planning to reappear soon">
//                   I am planning to reappear soon
//                 </option>
//               </select>

//               <select
//                 name="fundingPlan"
//                 className="border border-black rounded-lg px-4 py-2 w-full"
//                 value={formData.fundingPlan}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">How do you plan to fund your studies</option>
//                 <option value="I have my own funds">I have my own funds</option>
//                 <option value="I am looking for education loans">
//                   I am looking for education loans
//                 </option>
//                 <option value="My parents or siblings will fund my studies">
//                   My parents or siblings will fund my studies
//                 </option>
//                 <option value="I don't have Source of funds">
//                   I don't have Source of funds
//                 </option>
//               </select>

//               <div className="flex items-start gap-2 text-sm">
//                 <input
//                   type="checkbox"
//                   name="agreeTerms"
//                   checked={formData.agreeTerms}
//                   onChange={handleChange}
//                   required
//                   className="mt-1"
//                 />
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
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className={`mt-4 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300 ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TeamSection;

import React, { useState, useEffect } from "react";
import { FaCrown } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../../Api BaseUrl/ImageBaseUrl";

const TeamSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nearestOffice: "",
    studyDestination: "",
    englishTestStatus: "",
    fundingPlan: "",
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const sendData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone.startsWith("+880")
          ? formData.phone
          : "+880" + formData.phone,
        nearestOffice: formData.nearestOffice,
        preferredDestination: formData.studyDestination,
        testStatus: formData.englishTestStatus,
        fundingPlan: formData.fundingPlan,
      };

      const response = await fetch(`${BASE_URL}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonColor: "#f16f22",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nearestOffice: "",
        studyDestination: "",
        englishTestStatus: "",
        fundingPlan: "",
        agreeTerms: false,
      });
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

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}leadership`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setTeamMembers(data))
      .catch((error) => console.error("Fetch leadership error:", error));
  }, []);

  return (
    <>
      <section className="bg-[#f9f9f9] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#fff] text-[#f16f22] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000] leading-snug">
              Rich with Experience. Fueled by Passion.
              <br />
              Driven by the Dreams of Study Abroad Aspirants.
            </h2>
            <p className="mt-4 text-[#000] text-base md:text-lg">
              Meet the team that spearheads Global Routeway Global.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.length > 0 ? (
              teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="bg-gray-100 p-4">
                    <img
                      src={`${IMAGE_BASE_URL}${member.image}`}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-md"
                    />
                  </div>
                  <div className="bg-[#f16f22] text-white p-4">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm">{member.title}</p>
                  </div>
                  <div className="p-4">
                    {member.description && (
                      <div
                        className="text-black text-base leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: member.description,
                        }}
                      />
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-red-500 text-lg font-medium">
                No data found
              </div>
            )}
          </div>
        </div>
      </section>

      {/* contact us */}
      <div className="bg-gray-100 py-10 px-4 md:px-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-[#f16f22] text-lg" />
              </div>
              <p className="text-lg font-medium">Free* End-to-End Assistance</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-[#f16f22] text-lg" />
              </div>
              <p className="text-lg font-medium">Trusted by 22,000+ Students</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-[#f16f22] text-lg" />
              </div>
              <p className="text-lg font-medium">550+ Partner Institutions</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-full">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
              Register with Us to Take the Next Step
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  name="phone"
                  placeholder="Mobile Number"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                  value={formData.phone}
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
                <option value="Mohammadpur">Mohammadpur</option>
                {/* <option value="Dhanmondi">Dhanmondi</option>
                <option value="Mirpur">Mirpur</option> */}
              </select>

              <select
                name="studyDestination"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.studyDestination}
                onChange={handleChange}
                required
              >
                <option value="">Your Preferred Study Destination</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Denmark">Denmark</option>
                <option value="Finland">Finland</option>
                <option value="Sweden">Sweden</option>
                <option value="Dubai">Dubai</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Europe">Europe</option>
              </select>

              <select
                name="englishTestStatus"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.englishTestStatus}
                onChange={handleChange}
                required
              >
                <option value="">English Language Test Status</option>
                <option value="I have the Scores available">
                  I have the Scores available
                </option>
                <option value="My exams are scheduled">
                  My exams are scheduled
                </option>
                <option value="I have not appeared for any exams">
                  I have not appeared for any exams
                </option>
                <option value="I am planning to reappear soon">
                  I am planning to reappear soon
                </option>
              </select>

              <select
                name="fundingPlan"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.fundingPlan}
                onChange={handleChange}
                required
              >
                <option value="">How do you plan to fund your studies</option>
                <option value="I have my own funds">I have my own funds</option>
                <option value="I am looking for education loans">
                  I am looking for education loans
                </option>
                <option value="My parents or siblings will fund my studies">
                  My parents or siblings will fund my studies
                </option>
                <option value="I don't have Source of funds">
                  I don't have Source of funds
                </option>
              </select>

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
                  className={`mt-4 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSection;
