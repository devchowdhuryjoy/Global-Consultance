// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
// import BASE_URL from "../../../Api BaseUrl/BaseUrl";

// import ConsultationModal from "../../../Modal/ConsultationModal";
// import SuccessStories from "../../SuccessStories/SuccessStories";

// const ScolarshipInAustralia = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   // 2nd section
//   const benefits = [
//     "100% Free Scholarship Assistance – No hidden fees",
//     "Exclusive University Partner Scholarships – Save up to 50% on tuition fees",
//     "Personalized Scholarship Matching – Based on your academic profile",
//     "Quick & Hassle-Free Application Process – Expert guidance at every step",
//     "High Success Rate – Thousands of students placed in top Australian universities",
//   ];
//   // 2nd section

//   // 3rd section
//   const scholarships = [
//     {
//       title: "Merit-Based Scholarships",
//       description: "For students with outstanding academic achievements",
//     },
//     {
//       title: "Need-Based Scholarships",
//       description:
//         "Financial aid for eligible students based on their economical situation",
//     },
//     {
//       title: "Destination Australia Scholarships",
//       description:
//         "Government-funded support for students studying in regional areas",
//     },
//     {
//       title: "University-Specific Scholarships",
//       description:
//         "Exclusive grants and scholarships from Australian universities",
//     },
//     {
//       title: "Research & Postgraduate Funding",
//       description:
//         "Provided to students who are pursuing master’s or research degrees",
//     },
//   ];
//   // 3rd section

//   {
//     /* 4th section */
//   }
//   const scholarship = [
//     {
//       name: "La Trobe University Scholarship",
//       funding: "Up to 30% fee discount",
//       eligibility: "Indian SSC 60–70% (subject-based); IELTS 6.5 (min 6.0)",
//       campuses:
//         "Bundoora, Bendigo, Albury-Wodonga, Mildura, Shepparton, Sydney",
//     },
//     {
//       name: "University of Wollongong Scholarship",
//       funding: "Up to 30% fee discount",
//       eligibility:
//         "Year 12: ISC/CBSE 65%, State Board 70%; IELTS 6.0 (UG), 6.5 (PG)",
//       campuses: "Wollongong, Sydney, South Western Sydney",
//     },
//     {
//       name: "Federation University International Scholarship",
//       funding: "Up to 20% fee discount",
//       eligibility: "Indian SSC 60–70% (subject-based); IELTS 6.5 (min 6.0)",
//       campuses: "Ballarat, Berwick, Gippsland, Melbourne (City), Wimmera",
//     },
//     {
//       name: "Victoria University Scholarship",
//       funding: "Up to 30% fee discount",
//       eligibility: "Australian Year 12 equivalent; IELTS 6.0 (UG), 6.5 (PG)",
//       campuses:
//         "VU City Campus, Footscray Park, St Albans, Ballarat, Sunshine, Brisbane, Sydney, Werribee",
//     },
//     {
//       name: "Torrens University Scholarship (South East region)",
//       funding: "Up to 12% of tuition fees",
//       eligibility: "Australian Year 12 equivalent; IELTS 6.5 (min 6.0)",
//       campuses: "Sydney, Melbourne, Brisbane, Adelaide, Blue Mountains, China",
//     },
//     {
//       name: "Torrens University Scholarship (Brisbane campuses 2025)",
//       funding: "Up to 20% of tuition fees",
//       eligibility: "Australian Year 12 equivalent; IELTS 6.5 (min 6.0)",
//       campuses: "Sydney, Melbourne, Brisbane, Adelaide, Blue Mountains, China",
//     },
//   ];

//   // 4th section

//   // 7th section
//   const steps = [
//     {
//       step: "Step 1",
//       text: "Get your profile assessed & Receive Recommendations from Expert Counsellors",
//       img: "/6-step-1.png", // replace with your actual image path
//     },
//     {
//       step: "Step 2",
//       text: "Shortlist your preferred institutions and courses based on your aspirations",
//       img: "/6-step-2.png",
//     },
//     {
//       step: "Step 3",
//       text: "Complete the application process & secure scholarships with our comprehensive assistance",
//       img: "/6-step-3.png",
//     },
//     {
//       step: "Step 4",
//       text: "Receive the offer letter from the institution & complete the necessary steps to finalize your seat",
//       img: "/6-step-4.png",
//     },
//     {
//       step: "Step 5",
//       text: "Apply & prepare for visa interviews. Our team will guide you at every single step of the way.",
//       img: "/6-step-3.png",
//     },
//     {
//       step: "Step 6",
//       text: "Prepare for take-off! Get ready to board the flight and begin your first day at the institution abroad!",
//       img: "/6-step-1.png",
//     },
//   ];
//   // 7th section

//   // 8th section
//   const reviews = [
//     {
//       name: "Nashira",
//       quote: `“I'm truly thankful to Global Routways, especially my counselor Anika Anjum Nabila, for their amazing support in helping me get my AUS visa. The entire process went very smoothly due to their expert guidance during this transitional period (March–April 2025) of the Australian visa, where the branch manager personally spent time counseling me.Global Routways was professional, quick, and reliable every step of the way. Nabila Apu gave me personalized help and made sure everything was done right.

//       I highly recommend Global Routways to any student chasing their dream & one of the most expert counselor Anika Anjum Nabila. Thank you for helping make mine come true!”`,
//     },
//     {
//       name: "Zihad Hossain",
//       quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

//         A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

//         I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

//         Their dedication and efficiency truly make a difference!`,
//     },
//     {
//       name: "Zarin Afrin Zeni",
//       quote: `“I am incredibly grateful to Global Routways and especially to my counselor, Mehedi Hassan, for their exceptional support throughout my journey of obtaining a USA visa. Their guidance and expertise made the entire process seamless and stress-free.

//       Global Routways demonstrated outstanding professionalism, efficiency, and commitment to delivering on their promises. Mehedi Hassan was instrumental in providing personalized assistance and ensuring that every step of the process was handled with care and precision.

//       I highly recommend Global Routways for their excellent services and unwavering dedication to helping students achieve their goals. Thank you for making this dream a reality!`,
//     },
//     {
//       name: "Another Student",
//       quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

//         A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

//         I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

//         Their dedication and efficiency truly make a difference!”`,
//     },
//   ];

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const [visibleCount, setVisibleCount] = useState("4"); // default 3 reviews shown

//   // handle next arrow click
//   const handleNextClick = () => {
//     if (visibleCount < reviews.length) {
//       setVisibleCount((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {
//     // attach event listener after DOM refs available
//     const nextBtn = nextRef.current;
//     if (nextBtn) {
//       nextBtn.addEventListener("click", handleNextClick);
//     }
//     return () => {
//       if (nextBtn) {
//         nextBtn.removeEventListener("click", handleNextClick);
//       }
//     };
//   }, [visibleCount]);

//   // 8th section

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
//       {/* 1st section */}
//       <div className="bg-[#e6f6fc] py-12 px-4 sm:px-6 lg:px-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
//           {/* Left Text Content */}
//           <div>
//             <span className="inline-block bg-[#fff] text-[#f16f22] font-medium px-4 py-1 rounded mb-4">
//               Scholarships
//             </span>

//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f16f22] mb-4 leading-snug">
//               Study in Australia with Scholarships –{" "}
//               <br className="hidden sm:block" />
//               <span className="text-black">Save big on Tuition Fees</span>
//             </h2>

//             <p className="text-gray-700 text-base sm:text-lg mb-6">
//               Find the best scholarships in Australia and apply with Global
//               Routeway Global’s expert guidance – 100% Free Assistance
//             </p>

//             <button
//               onClick={handleOpenModal}
//               className="mt-2 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#252364] transition duration-300 flex items-center justify-center"
//             >
//               Book a FREE Consultation →
//             </button>

//             {/* ✅ Modal */}
//             <ConsultationModal show={showModal} onClose={handleCloseModal} />
//           </div>

//           {/* Right Image */}
//           <div className="flex-1 relative">
//             <div className="rounded-xl overflow-hidden shadow-md">
//               <img
//                 src="Scolarships-aus.png" // Replace with your actual image path
//                 alt="Study in the Australia"
//                 className="w-full object-cover"
//               />
//             </div>

//             <div className="absolute right-[-40px] bottom-[-20px] hidden md:block">
//               <div className="flex space-x-4">
//                 <div className="w-12 h-24 bg-[#5f61c4] rounded-md rotate-12"></div>
//                 <div className="w-12 h-24 bg-[#d4d8f7] rounded-md rotate-12"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 1st section */}

//       {/* 2nd section */}
//       <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
//           {/* Left Side: Info Cards and Consultation Info */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <div className="bg-white px-4 py-16 sm:px-6 lg:px-20">
//               <div className="max-w-5xl mx-auto">
//                 {/* Heading */}
//                 <h2 className="text-2xl sm:text-3xl font-semibold text-[#f16f22] mb-8">
//                   Why Apply for Scholarships in Australia Through Global
//                   Routways?
//                 </h2>

//                 {/* Benefits List */}
//                 <ul className="space-y-6">
//                   {benefits.map((benefit, index) => (
//                     <li key={index} className="flex items-start gap-3">
//                       <span className="mt-1 w-2 h-5 bg-[#f16f22] rotate-[20deg] rounded-sm block" />
//                       <p className="text-base text-[#111] font-medium">
//                         {benefit}
//                       </p>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Highlight Box */}
//                 <div className="mt-12 bg-[#fff2ed] rounded-xl p-6 shadow-md flex items-start gap-4">
//                   <img
//                     src="didyou.png" // replace with your local emoji/image
//                     alt="Did you know"
//                     className="w-12 h-12"
//                   />
//                   <div>
//                     <p className="font-semibold text-[#f16f22] mb-1">
//                       Did you know?
//                     </p>
//                     <p className="text-[#333] text-[15px]">
//                       Students who apply early will have higher chances of
//                       securing a scholarship. They are also most likely to get a
//                       bigger scholarship value.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side: Form */}
//           <div className="w-full lg:w-1/2">
//             <div className="bg-white p-6 rounded-2xl shadow-md w-full">
//               <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
//                 Register with Us to Take the Next Step
//               </h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     className="border border-black rounded-lg px-4 py-2 w-full"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     className="border border-black rounded-lg px-4 py-2 w-full"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <div className="grid grid-cols-[80px_1fr] gap-2">
//                   <input
//                     type="text"
//                     value="+880"
//                     readOnly
//                     className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
//                   />
//                   <input
//                     type="number"
//                     name="phone"
//                     placeholder="Mobile Number"
//                     className="border border-black rounded-lg px-4 py-2 w-full"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <select
//                   name="nearestOffice"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.nearestOffice}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Your Nearest Global Routways Office</option>
//                   <option value="Mohammadpur">Mohammadpur</option>
//                   {/* <option value="Dhanmondi">Dhanmondi</option>
//                 <option value="Mirpur">Mirpur</option> */}
//                 </select>

//                 <select
//                   name="studyDestination"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.studyDestination}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Your Preferred Study Destination</option>
//                   <option value="UK">UK</option>
//                   <option value="USA">USA</option>
//                   <option value="Canada">Canada</option>
//                   <option value="Australia">Australia</option>
//                   <option value="Denmark">Denmark</option>
//                   <option value="Finland">Finland</option>
//                   <option value="Sweden">Sweden</option>
//                   <option value="Dubai">Dubai</option>
//                   <option value="Malaysia">Malaysia</option>
//                   <option value="Europe">Europe</option>
//                 </select>

//                 <select
//                   name="englishTestStatus"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.englishTestStatus}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">English Language Test Status</option>
//                   <option value="I have the Scores available">
//                     I have the Scores available
//                   </option>
//                   <option value="My exams are scheduled">
//                     My exams are scheduled
//                   </option>
//                   <option value="I have not appeared for any exams">
//                     I have not appeared for any exams
//                   </option>
//                   <option value="I am planning to reappear soon">
//                     I am planning to reappear soon
//                   </option>
//                 </select>

//                 <select
//                   name="fundingPlan"
//                   className="border border-black rounded-lg px-4 py-2 w-full"
//                   value={formData.fundingPlan}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">How do you plan to fund your studies</option>
//                   <option value="I have my own funds">
//                     I have my own funds
//                   </option>
//                   <option value="I am looking for education loans">
//                     I am looking for education loans
//                   </option>
//                   <option value="My parents or siblings will fund my studies">
//                     My parents or siblings will fund my studies
//                   </option>
//                   <option value="I don't have Source of funds">
//                     I don't have Source of funds
//                   </option>
//                 </select>

//                 <div className="flex items-start gap-2 text-sm">
//                   <input
//                     type="checkbox"
//                     name="agreeTerms"
//                     checked={formData.agreeTerms}
//                     onChange={handleChange}
//                     required
//                     className="mt-1"
//                   />
//                   <p>
//                     By clicking, you agree to our{" "}
//                     <a href="#" className="text-blue-600 underline">
//                       Privacy Policy
//                     </a>{" "}
//                     and{" "}
//                     <a href="#" className="text-blue-600 underline">
//                       Terms & Conditions
//                     </a>
//                   </p>
//                 </div>

//                 <div className="flex justify-center">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className={`mt-4 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300 ${
//                       loading ? "opacity-50 cursor-not-allowed" : ""
//                     }`}
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 2nd section */}

//       {/* 3rd section */}
//       <div className="bg-[#f5f9fc] py-12 px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#f16f22] mb-10">
//           Types of Scholarships Available in Australia
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {scholarships.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
//             >
//               <h3 className="text-[#f16f22] text-lg font-semibold mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-black-600 text-sm">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* 3rd section */}

//       {/* 4th section */}
//       <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-xl sm:text-2xl font-bold text-center text-[#f16f22] mb-2">
//             Top Scholarships for International Students in Australia
//           </h2>
//           <p className="text-center text-sm text-black-600 mb-6">
//             New scholarships are added regularly. Check the Latest Updates
//           </p>

//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 text-sm">
//               <thead className="bg-[#ffeee6] text-left">
//                 <tr>
//                   <th className="py-3 px-4 font-semibold text-[#000]">
//                     Scholarship Name
//                   </th>
//                   <th className="py-3 px-4 font-semibold text-[#000]">
//                     Funding Amount
//                   </th>
//                   <th className="py-3 px-4 font-semibold text-[#000]">
//                     Eligibility
//                   </th>
//                   <th className="py-3 px-4 font-semibold text-[#000]">
//                     Campuses
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {scholarship.map((item, idx) => (
//                   <tr key={idx} className="border-t border-gray-200">
//                     <td className="py-3 px-4 text-[#000]">{item.name}</td>
//                     <td className="py-3 px-4 text-[#000]">{item.funding}</td>
//                     <td className="py-3 px-4 text-[#000]">
//                       {item.eligibility}
//                     </td>
//                     <td className="py-3 px-4 text-[#000]">{item.campuses}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="bg-[#f9f9f9] py-10 px-4 text-center">
//           <p className="text-[#000] text-base mb-4">
//             Not sure which scholarship matches your profile?
//           </p>
//           <button
//             onClick={handleOpenModal}
//             className="px-6 py-2 border border-[#f16f22] text-[#f16f22] font-medium rounded-full hover:bg-[#f16f22] hover:text-white transition duration-300"
//           >
//             Book a FREE Consultation
//           </button>
//           {/* ✅ Modal */}
//           <ConsultationModal show={showModal} onClose={handleCloseModal} />
//         </div>
//       </div>
//       {/* 4th section */}

//       {/* 5th section */}
//       <div className="bg-[#f9f9f9] py-12 px-4 text-center">
//         {/* Table */}
//         <div className="max-w-4xl mx-auto shadow-md rounded overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-[#fff2ec] text-[#333] text-sm sm:text-base">
//                 <th className="px-4 py-3 font-semibold">Field of Work</th>
//                 <th className="px-4 py-3 font-semibold">
//                   Average Salary (AUD/Year) (approx.)
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-[#333] text-sm sm:text-base">
//               <tr className="border-t">
//                 <td className="px-4 py-3">IT & Tech</td>
//                 <td className="px-4 py-3">AUD 60,000 - 80,000</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-3">Business & Management</td>
//                 <td className="px-4 py-3">AUD 65,000 - 85,000</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-3">Health & Medicine</td>
//                 <td className="px-4 py-3">AUD 70,000 - 90,000</td>
//               </tr>
//               <tr className="border-t">
//                 <td className="px-4 py-3">Engineering</td>
//                 <td className="px-4 py-3">AUD 65,000 - 88,000</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* CTA Below */}
//         <div className="mt-10">
//           <p className="text-black-500 mb-4 text-sm sm:text-base">
//             Not sure which scholarship matches your profile?
//           </p>
//           <button
//             onClick={handleOpenModal}
//             className="px-6 py-2 border border-[#f16f22] text-[#f16f22] font-medium rounded-full hover:bg-[#f16f22] hover:text-white transition duration-300"
//           >
//             Book a FREE Consultation
//           </button>

//           {/* ✅ Modal */}
//           <ConsultationModal show={showModal} onClose={handleCloseModal} />
//         </div>
//       </div>
//       {/* 5th section */}

//       {/* 6th section */}
//       <div className="bg-[#f9f9f9] py-12 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
//           {/* Left Image */}
//           <div className="w-full lg:w-1/2 flex justify-center relative">
//             <img
//               src="critiriia.png" // replace with your image path
//               alt="Students"
//               className="max-w-full h-auto z-10 relative"
//             />
//             <div className="absolute w-3/4 h-3/4 bg-[#e0dfff] rounded-lg -z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-3"></div>
//           </div>

//           {/* Right Text Content */}
//           <div className="w-full lg:w-1/2">
//             <h2 className="text-2xl sm:text-3xl font-semibold text-[#f16f22] mb-6">
//               Who Can Apply? (Eligibility Criteria)
//             </h2>

//             <div className="grid sm:grid-cols-2 gap-4">
//               {[
//                 {
//                   title: "Excellent Academic Record",
//                   desc: "Minimum GPA requirement varies by university",
//                 },
//                 {
//                   title: "English Proficiency",
//                   desc: "IELTS, PTE, or TOEFL scores required",
//                 },
//                 {
//                   title: "Extracurricular Achievements",
//                   desc: "Leadership, research, community service and more",
//                 },
//                 {
//                   title: "Offer Letter from the University",
//                   desc: "Required before scholarship disbursement",
//                 },
//                 {
//                   title: "Country-Specific Eligibility",
//                   desc: "Available only to students from select regions",
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-[#f4f7fb] p-4 rounded-xl shadow-sm border hover:shadow-md transition"
//                 >
//                   <h3 className="font-semibold text-[#000] text-base mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-[#000]">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="mt-10 text-center">
//               <p className="text-[#000] mb-4 text-sm sm:text-base">
//                 Not sure which scholarship matches your profile?
//               </p>
//               <button
//                 onClick={handleOpenModal}
//                 className="px-6 py-2 border border-[#f16f22] text-[#f16f22] font-medium rounded-full hover:bg-[#f16f22] hover:text-white transition duration-300"
//               >
//                 Book a FREE Consultation
//               </button>

//               {/* ✅ Modal */}
//               <ConsultationModal show={showModal} onClose={handleCloseModal} />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 6th section */}

//       {/* 7th section */}
//       <div className="bg-[#f3f7fb] py-14 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-2xl sm:text-3xl font-semibold text-[#000] mb-2">
//             Study Abroad in just{" "}
//             <span className="text-[#f16f22]">6 Simple Steps</span>
//           </h2>
//           <p className="text-[#000] mb-10 text-sm sm:text-base">
//             With Global Routeway Global by your side, you can make the whole
//             process a breeze!
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {steps.map((item, idx) => (
//               <div
//                 key={idx}
//                 className=" relative flex flex-col items-center text-center max-w-xs bg-white border-[2px] border-black p-5 rounded-md shadow-sm hover:shadow-lg transition"
//               >
//                 <div className="relative z-10">
//                   <img
//                     src={item.img}
//                     alt={item.step}
//                     className="w-32 h-32 object-contain mx-auto mb-4"
//                   />
//                 </div>

//                 <span className="bg-[#f16f22] text-black text-sm font-medium px-4 py-1 rounded-full mb-2">
//                   {item.step}
//                 </span>

//                 <p className="text-sm text-black-500 text-justify">{item.text}</p>

//                 {/* Decorative background box */}
//                 {/* <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#e4e7f8] rotate-3 -z-0 rounded-xl opacity-50"></div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* 7th section */}

//       {/* 8th section */}

//       <SuccessStories />
//       {/* 8th section */}

//       {/* 9th section */}
//       <div className="bg-[#f3f7fb] py-16 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#f16f22] mb-6">
//             About Global Routeway
//           </h2>
//           <p className="text-black-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-10">
//             Beginning in 2024, Global Routeway Global’s expertise in student
//             migration consultancy evolved from a single Melbourne office to a
//             multinational presence, spanning Australia, Bangladesh, Sri Lanka,
//             and India. We now proudly represent international educational
//             institutions, consistently turning students’ dreams into their
//             reality.
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             <div>
//               <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">
//                 22,000+
//               </p>
//               <p className="text-sm text-black-700">Students Assisted</p>
//             </div>
//             <div>
//               <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">
//                 550+
//               </p>
//               <p className="text-sm text-black-700">
//                 Institutions across
//                 <br />
//                 11 Countries
//               </p>
//             </div>
//             <div>
//               <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">
//                 18+
//               </p>
//               <p className="text-sm text-black-700">Years of Experience</p>
//             </div>
//             <div>
//               <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">9</p>
//               <p className="text-sm text-black-700">
//                 Offices across
//                 <br />
//                 the Globe
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 9th section */}
//     </>
//   );
// };

// export default ScolarshipInAustralia;



// import React, { useState } from "react";
// import SuccessStories from "../../SuccessStories/SuccessStories";
// import ScholarshipModal from "../../../Modal/ScholarshipModal";

// // const scholarships = [
// //   {
// //     country: "UK",
// //     description: `1.Chevening Scholarships
// // 2.Commonwealth Scholarships
// // 3.Rhodes Scholarships
// // 4.Gates Cambridge Scholarships
// // 5.Clarendon Scholarships
// // 6.Edinburgh Global Research Scholarships
// // 7.University of Westminster Scholarships
// // 8.University of Bristol Think Big Scholarships
// // 9.UCL Global Scholarships
// // 10.Imperial College London Scholarships`,
// //   },
// //   {
// //     country: "USA",
// //     description: `1.Fulbright Foreign Student Program
// // 2.Hubert H. Humphrey Fellowship Program
// // 3.AAUW International Fellowships
// // 4.Harvard University Scholarships
// // 5.Yale University Scholarships
// // 6.Stanford University Knight-Hennessy Scholars
// // 7.MIT Scholarships
// // 8.Clark Global Scholarship Program
// // 9.MasterCard Foundation Scholars Program
// // 10.Rotary Peace Fellowships`,
// //   },
// //   {
// //     country: "Canada",
// //     description: `1.Vanier Canada Graduate Scholarships
// // 2.Canada Graduate Scholarships
// // 3.Lester B. Pearson International Scholarships
// // 4.University of British Columbia (UBC) International Leader of Tomorrow Award
// // 5.Pierre Elliott Trudeau Foundation Scholarships
// // 6.University of Alberta Scholarships
// // 7.University of Waterloo International Master's and Doctoral Awards
// // 8.McGill University Scholarships
// // 9.University of Calgary Scholarships
// // 10.York University International Student Scholarships`,
// //   },
// //   {
// //     country: "Sweden",
// //     description: `1. Swedish Institute Scholarships for Global Professionals
// // 2. Karolinska Institutet Global Master's Scholarships
// // 3. Lund University Global Scholarship Program
// // 4. Uppsala University Global Scholarships
// // 5. Chalmers IPOET Scholarships
// // 6. Stockholm University Scholarships
// // 7. Malmö University Master's Scholarships
// // 8. Blekinge Institute of Technology Scholarship Program
// // 9. Halmstad University Scholarships
// // 10. KTH Royal Institute of Technology Scholarships`,
// //   },
// //   {
// //     country: "Denmark",
// //     description: `1. Danish Government Scholarships
// // 2. University of Copenhagen Scholarships
// // 3. Aarhus University Scholarships
// // 4. Technical University of Denmark
// // 5. Copenhagen Business School Scholarships
// // 6. Roskilde University Scholarships
// // 7. Aalborg University Scholarships
// // 8. IT University of Copenhagen Scholarships
// // 9. Denmark-America Foundation Grants
// // 10. Erasmus+ Scholarships for Denmark`,
// //   },
// //   {
// //     country: "Finland",
// //     description: `1. Finland Government Scholarships
// // 2. University of Helsinki Scholarships
// // 3. Aalto University Scholarships
// // 4. University of Turku Scholarships
// // 5. University of Oulu International Scholarships
// // 6. Tampere University Scholarships
// // 7. Lappeenranta-Lahti University of Technology LUT Scholarships
// // 8. University of Eastern Finland Scholarships
// // 9. Hanken School of Economics Scholarships
// // 10. Arcada University of Applied Sciences Scholarships`,
// //   },
// //   {
// //     country: "Hungary",
// //     description: `1. Stipendium Hungaricum Scholarship Program
// // 2. Hungarian Diaspora Scholarship
// // 3. Erasmus+ Scholarships in Hungary
// // 4. University of Debrecen Scholarships
// // 5. Central European University Scholarships
// // 6. Budapest University of Technology and Economics Scholarships
// // 7. University of Pécs Scholarships
// // 8. Eötvös Loránd University (ELTE) Scholarships
// // 9. Szent István University Scholarships
// // 10. Corvinus University of Budapest Scholarships`,
// //   },
// //   {
// //     country: "Italy",
// //     description: `1. Italian Government Scholarships for Foreign Students
// // 2. Scuola Normale Superiore PhD Scholarships
// // 3. University of Bologna Study Grants for International Students
// // 4. Bocconi Merit and International Awards
// // 5. Politecnico di Milano Merit-Based Scholarships
// // 6. University of Padua Scholarships
// // 7. University of Pavia Scholarships
// // 8. Sapienza University of Rome Scholarships
// // 9. University of Milan Scholarships
// // 10. University of Trento Scholarships`,
// //   },
// //   {
// //     country: "France",
// //     description: `1. Eiffel Excellence Scholarship Program
// // 2. École Normale Supérieure (ENS) International Selection
// // 3. Emile Boutmy Scholarships (Sciences Po)
// // 4. Université Paris-Saclay International Master's Scholarships
// // 5. INSEAD MBA Scholarships
// // 6. Erasmus+ Scholarships (France)
// // 7. Grenoble Institute of Technology Foundation Scholarships
// // 8. Ampère Scholarships of Excellence (ENS Lyon)
// // 9. École Polytechnique Scholarships
// // 10. HEC Paris MBA Scholarships`,
// //   },
// //   {
// //     country: "Dubai",
// //     description: `1. Khalifa University Scholarships
// // 2. Mohamed bin Zayed University Scholarships (MBZUAI)
// // 3. United Arab Emirates University Scholarships
// // 4. American University in Dubai Scholarships
// // 5. University of Dubai Scholarships
// // 6. Zayed University Scholarships
// // 7. Canadian University Dubai Scholarships
// // 8. Middlesex University Dubai Scholarships
// // 9. Al Qasimia University Scholarships
// // 10. Emirates Aviation University Scholarships`,
// //   },
// //   {
// //     country: "Malaysia",
// //     description: `1. Malaysian International Scholarship (MIS)
// // 2. MTCP Scholarship (Malaysian Technical Cooperation Programme)
// // 3. University of Malaya Scholarships
// // 4. Universiti Kebangsaan Malaysia (UKM) Vice Chancellor's Scholarships
// // 5. Universiti Putra Malaysia (UPM) Scholarships
// // 6. Universiti Sains Malaysia (USM) Scholarships
// // 7. Multimedia University (MMU) Scholarships
// // 8. UCSI University Trust Scholarships
// // 9. Asia Pacific University (APU) Merit Scholarships
// // 10. Taylor's University Scholarships`,
// //   },
// // ];

// const scholarships = [
//   {
//     country: "UK",
//     description:
//       "The UK offers prestigious scholarships such as Chevening Scholarships, Commonwealth Scholarships, Rhodes Scholarships, and Gates Cambridge Scholarships. Other notable awards include Clarendon Scholarships, Edinburgh Global Research Scholarships, University of Westminster Scholarships, University of Bristol Think Big Scholarships, UCL Global Scholarships, and Imperial College London Scholarships.",
//   },
//   {
//     country: "USA",
//     description:
//       "In the USA, there are many renowned scholarships including the Fulbright Foreign Student Program, Hubert H. Humphrey Fellowship Program, and AAUW International Fellowships. Top universities like Harvard, Yale, Stanford, and MIT offer various scholarships. Other opportunities include the Clark Global Scholarship Program, MasterCard Foundation Scholars Program, and Rotary Peace Fellowships.",
//   },
//   {
//     country: "Canada",
//     description:
//       "Canada provides numerous scholarships such as Vanier Canada Graduate Scholarships and Canada Graduate Scholarships. Universities like the University of British Columbia, University of Alberta, McGill University, and York University offer international scholarships. There are also Lester B. Pearson International Scholarships and awards from the Pierre Elliott Trudeau Foundation.",
//   },
//   {
//     country: "Sweden",
//     description:
//       "Sweden has scholarships like the Swedish Institute Scholarships for Global Professionals and Karolinska Institutet Global Master's Scholarships. Other scholarships include Lund University Global Scholarship Program, Uppsala University Global Scholarships, Chalmers IPOET Scholarships, and scholarships from Stockholm University, Malmö University, Blekinge Institute of Technology, Halmstad University, and KTH Royal Institute of Technology.",
//   },
//   {
//     country: "Denmark",
//     description:
//       "In Denmark, scholarships are offered by the Danish Government, University of Copenhagen, Aarhus University, and the Technical University of Denmark. Additional opportunities are available through Copenhagen Business School, Roskilde University, Aalborg University, IT University of Copenhagen, Denmark-America Foundation Grants, and Erasmus+ Scholarships.",
//   },
//   {
//     country: "Finland",
//     description:
//       "Finland offers government scholarships and awards from the University of Helsinki, Aalto University, University of Turku, and University of Oulu. Tampere University, Lappeenranta-Lahti University of Technology, University of Eastern Finland, Hanken School of Economics, and Arcada University of Applied Sciences also provide scholarships.",
//   },
//   {
//     country: "Hungary",
//     description:
//       "Hungary provides scholarships through programs like the Stipendium Hungaricum Scholarship Program and Hungarian Diaspora Scholarship. Erasmus+ Scholarships are also available. Universities such as University of Debrecen, Central European University, Budapest University of Technology and Economics, University of Pécs, Eötvös Loránd University, Szent István University, and Corvinus University of Budapest offer various scholarships.",
//   },
//   {
//     country: "Italy",
//     description:
//       "Italy offers scholarships from the Italian Government for foreign students and specific awards like Scuola Normale Superiore PhD Scholarships. Universities including Bologna, Bocconi, Politecnico di Milano, Padua, Pavia, Sapienza University of Rome, Milan, and Trento provide merit-based scholarships and study grants.",
//   },
//   {
//     country: "France",
//     description:
//       "In France, students can apply for the Eiffel Excellence Scholarship Program and scholarships from École Normale Supérieure. Other notable scholarships include Emile Boutmy Scholarships at Sciences Po, Université Paris-Saclay International Master's Scholarships, INSEAD MBA Scholarships, Erasmus+ Scholarships, Grenoble Institute of Technology Foundation Scholarships, Ampère Scholarships of Excellence at ENS Lyon, École Polytechnique Scholarships, and HEC Paris MBA Scholarships.",
//   },
//   {
//     country: "Dubai",
//     description:
//       "Dubai offers scholarships from Khalifa University, Mohamed bin Zayed University, United Arab Emirates University, American University in Dubai, University of Dubai, Zayed University, Canadian University Dubai, Middlesex University Dubai, Al Qasimia University, and Emirates Aviation University.",
//   },
//   {
//     country: "Malaysia",
//     description:
//       "Malaysia provides scholarships such as the Malaysian International Scholarship (MIS) and the MTCP Scholarship. Universities like University of Malaya, Universiti Kebangsaan Malaysia, Universiti Putra Malaysia, Universiti Sains Malaysia, Multimedia University, UCSI University, Asia Pacific University, and Taylor's University offer a wide range of scholarships and merit awards.",
//   },
// ];

// const ScolarshipInAustralia = () => {
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleSelect = (index) => {
//     setSelectedIndex(index);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBack = () => {
//     setSelectedIndex(null);
//   };

//   return (
//     <>
//       <div className="px-4 py-10 max-w-6xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-6 text-center font-[Poppins]">
//           Scholarships by Country
//         </h1>
//         <p className="text-black mb-10 text-center max-w-2xl mx-auto">
//           Discover fully funded and partial scholarships available in top study
//           destinations. Click a country to see details.
//         </p>

//         {/* LIST VIEW */}

//         {selectedIndex === null && (
//           <div className="flex flex-wrap justify-center gap-4 font-[Poppins]">
//             {scholarships.map((item, idx) => (
//               <div
//                 key={item.country}
//                 onClick={() => handleSelect(idx)}
//                 className="cursor-pointer w-full sm:w-auto px-4 py-3 text-center group max-w-xs"
//               >
//                 <h2 className="text-xl text-black mb-0 relative inline-block">
//                   {item.country}
//                   <span className="absolute bottom-0 left-0 h-0.5 bg-[#f16f22] w-full scale-x-0 scale-x-100 transition-transform duration-300 origin-left"></span>
//                 </h2>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* DETAIL VIEW */}
//         {selectedIndex !== null && (
//           <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8 font-[Poppins]">
//             <h2 className="text-3xl  text-[#f16f22] mb-4 border-b-2 border-[#f16f22] pb-2 font-[Poppins]">
//               {scholarships[selectedIndex].country} Scholarships
//             </h2>
//             <pre className="whitespace-pre-line text-black text-lg mb-6 font-[Poppins]">
//               {scholarships[selectedIndex].description}
//             </pre>

//             <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
//               <button
//                 onClick={handleBack}
//                 className="bg-gray-800 hover:bg-[#f16f22] text-white font-semibold py-3 px-6 rounded transition"
//               >
//                 Back to Countries
//               </button>

//               <button
//                 onClick={handleOpenModal}
//                 className="bg-[#f16f22] hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded transition"
//               >
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Modal */}
//         <ScholarshipModal show={showModal} onClose={handleCloseModal} />
//       </div>

//       <SuccessStories />
//     </>
//   );
// };

// export default ScolarshipInAustralia;



import React, { useState } from "react";
import SuccessStories from "../../SuccessStories/SuccessStories";
import ScholarshipModal from "../../../Modal/ScholarshipModal";

const scholarships = [
  {
    country: "UK",
    description:
      "The UK offers prestigious scholarships such as Chevening Scholarships, Commonwealth Scholarships, Rhodes Scholarships, and Gates Cambridge Scholarships. Other notable awards include Clarendon Scholarships, Edinburgh Global Research Scholarships, University of Westminster Scholarships, University of Bristol Think Big Scholarships, UCL Global Scholarships, and Imperial College London Scholarships.",
  },
  {
    country: "USA",
    description:
      "In the USA, there are many renowned scholarships including the Fulbright Foreign Student Program, Hubert H. Humphrey Fellowship Program, and AAUW International Fellowships. Top universities like Harvard, Yale, Stanford, and MIT offer various scholarships. Other opportunities include the Clark Global Scholarship Program, MasterCard Foundation Scholars Program, and Rotary Peace Fellowships.",
  },
  {
    country: "Canada",
    description:
      "Canada provides numerous scholarships such as Vanier Canada Graduate Scholarships and Canada Graduate Scholarships. Universities like the University of British Columbia, University of Alberta, McGill University, and York University offer international scholarships. There are also Lester B. Pearson International Scholarships and awards from the Pierre Elliott Trudeau Foundation.",
  },
  {
    country: "Sweden",
    description:
      "Sweden has scholarships like the Swedish Institute Scholarships for Global Professionals and Karolinska Institutet Global Master's Scholarships. Other scholarships include Lund University Global Scholarship Program, Uppsala University Global Scholarships, Chalmers IPOET Scholarships, and scholarships from Stockholm University, Malmö University, Blekinge Institute of Technology, Halmstad University, and KTH Royal Institute of Technology.",
  },
  {
    country: "Denmark",
    description:
      "In Denmark, scholarships are offered by the Danish Government, University of Copenhagen, Aarhus University, and the Technical University of Denmark. Additional opportunities are available through Copenhagen Business School, Roskilde University, Aalborg University, IT University of Copenhagen, Denmark-America Foundation Grants, and Erasmus+ Scholarships.",
  },
  {
    country: "Finland",
    description:
      "Finland offers government scholarships and awards from the University of Helsinki, Aalto University, University of Turku, and University of Oulu. Tampere University, Lappeenranta-Lahti University of Technology, University of Eastern Finland, Hanken School of Economics, and Arcada University of Applied Sciences also provide scholarships.",
  },
  {
    country: "Hungary",
    description:
      "Hungary provides scholarships through programs like the Stipendium Hungaricum Scholarship Program and Hungarian Diaspora Scholarship. Erasmus+ Scholarships are also available. Universities such as University of Debrecen, Central European University, Budapest University of Technology and Economics, University of Pécs, Eötvös Loránd University, Szent István University, and Corvinus University of Budapest offer various scholarships.",
  },
  {
    country: "Italy",
    description:
      "Italy offers scholarships from the Italian Government for foreign students and specific awards like Scuola Normale Superiore PhD Scholarships. Universities including Bologna, Bocconi, Politecnico di Milano, Padua, Pavia, Sapienza University of Rome, Milan, and Trento provide merit-based scholarships and study grants.",
  },
  {
    country: "France",
    description:
      "In France, students can apply for the Eiffel Excellence Scholarship Program and scholarships from École Normale Supérieure. Other notable scholarships include Emile Boutmy Scholarships at Sciences Po, Université Paris-Saclay International Master's Scholarships, INSEAD MBA Scholarships, Erasmus+ Scholarships, Grenoble Institute of Technology Foundation Scholarships, Ampère Scholarships of Excellence at ENS Lyon, École Polytechnique Scholarships, and HEC Paris MBA Scholarships.",
  },
  {
    country: "Dubai",
    description:
      "Dubai offers scholarships from Khalifa University, Mohamed bin Zayed University, United Arab Emirates University, American University in Dubai, University of Dubai, Zayed University, Canadian University Dubai, Middlesex University Dubai, Al Qasimia University, and Emirates Aviation University.",
  },
  {
    country: "Malaysia",
    description:
      "Malaysia provides scholarships such as the Malaysian International Scholarship (MIS) and the MTCP Scholarship. Universities like University of Malaya, Universiti Kebangsaan Malaysia, Universiti Putra Malaysia, Universiti Sains Malaysia, Multimedia University, UCSI University, Asia Pacific University, and Taylor's University offer a wide range of scholarships and merit awards.",
  },
];

const ScolarshipInAustralia = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleSelect = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <>
      <div className="px-4 py-10 max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-6 text-center font-[Poppins]">
          Scholarships by Country
        </h1>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto text-sm sm:text-base">
          Discover fully funded and partial scholarships available in top study
          destinations. Click a country to see details.
        </p>

        {/* Country List - All items in one row */}
        <div className="flex flex-wrap justify-center gap-4 font-[Poppins] max-w-4xl mx-auto mb-8">
          {scholarships.map((item, idx) => (
            <div
              key={item.country}
              onClick={() => toggleSelect(idx)}
              className={`cursor-pointer px-6 py-3 text-center group rounded-lg transition-all duration-200 ${
                selectedIndex === idx
                  ? 'bg-[#f16f22] text-white shadow-lg'
                  : 'bg-white border border-gray-200 hover:border-[#f16f22] hover:shadow-md'
              }`}
            >
              <h2 className="text-lg sm:text-xl font-medium relative inline-block pb-1">
                {item.country}
                <span className={`absolute bottom-0 left-0 h-0.5 ${
                  selectedIndex === idx ? 'bg-white' : 'bg-[#f16f22]'
                } w-full ${
                  selectedIndex === idx || selectedIndex === null
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                } transition-transform duration-300 origin-left`}></span>
              </h2>
            </div>
          ))}
        </div>

        {/* Details Section - Shows below all items */}
        {selectedIndex !== null && (
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 max-w-4xl mx-auto animate-fadeIn">
            <h3 className="text-xl sm:text-2xl text-[#f16f22] mb-3 border-b-2 border-[#f16f22] pb-2 font-semibold">
              {scholarships[selectedIndex].country} Scholarships
            </h3>
            <p className="text-gray-700 mb-6 whitespace-pre-line text-sm sm:text-base">
              {scholarships[selectedIndex].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setSelectedIndex(null)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition"
              >
                Close
              </button>
              <button
                onClick={handleOpenModal}
                className="flex-1 bg-[#f16f22] hover:bg-[#e05a1a] text-white font-medium py-2 px-4 rounded transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}

        {/* Modal */}
        <ScholarshipModal show={showModal} onClose={handleCloseModal} />
      </div>

      <SuccessStories />
    </>
  );
};
export default ScolarshipInAustralia;
