// import React, { useState } from "react";

// import ConsultationModal from "../../../Modal/ConsultationModal";

// import {
//   FaGavel,
//   FaStethoscope,
//   FaCogs,
//   FaFlask,
//   FaUniversity,
//   FaBriefcase,
//   FaBook,
// } from "react-icons/fa";

// //6th Section
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import "chart.js/auto";

// ChartJS.register(ArcElement, Tooltip, Legend);
// //6th Section

// const StudyInUk = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);
//   // 3rd Section
//   const reasons = [
//     {
//       title: "Stay Back for up to 2 Years",
//       description:
//         "International Students can stay back for up to 2 years and look for jobs.",
//       bg: "bg-yellow-100",
//       emoji: "🙌",
//     },
//     {
//       title: "600,000+",
//       description:
//         "International students opting for higher studies in the UK (20% rise from 2021)",
//       bg: "bg-blue-100",
//       emoji: "🎓",
//     },
//     {
//       title: "500,000 + Visas",
//       description:
//         "In June 2023, the UK granted nearly 500,000 sponsored study visas (23% increase from 2022)",
//       bg: "bg-rose-100",
//       emoji: "🛂",
//     },
//     {
//       title: "Global Recognition",
//       description:
//         "UK degrees and qualifications are recognized and respected internationally.",
//       bg: "bg-green-100",
//       emoji: "🌍",
//     },
//     {
//       title: "Up to 20 Hours",
//       description:
//         "International students in the UK are allowed to work part-time up to 20 hours per week while studying, and full-time during semester breaks.",
//       bg: "bg-neutral-100",
//       emoji: "⏰",
//     },
//   ];
//   // 3rd Section

//   // 4th Section
//   const programs = [
//     {
//       title: "Undergraduate (UG)",
//       price: "£12,000 – £35,000",
//     },
//     {
//       title: "Postgraduate (PG)",
//       price: "£12,000 – £35,000",
//     },
//     {
//       title: "MBA",
//       price: "£13,000 – £60,000",
//     },
//   ];
//   // 4th Section

//   // 6th Section
//   const data = {
//     labels: [
//       "Accommodation",
//       "Utilities",
//       "Transportation",
//       "Food",
//       "Phone & Misc Expenses",
//     ],
//     datasets: [
//       {
//         label: "Cost Range (GBP)",
//         data: [800, 150, 150, 700, 240],
//         backgroundColor: [
//           "#FF6B4A", // Accommodation
//           "#2DB4E8", // Utilities
//           "#FFCF4A", // Transportation
//           "#E6D42F", // Food
//           "#292C6D", // Phone & Misc
//         ],
//         borderColor: "#ffffff",
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     cutout: "60%",
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             const labels = [
//               "Accommodation: £500 - £800",
//               "Utilities: £100 - £150",
//               "Transportation: £60 - £150",
//               "Food: £350 - £700",
//               "Phone & Misc: £95 - £240",
//             ];
//             return labels[context.dataIndex];
//           },
//         },
//       },
//     },
//     animation: {
//       animateScale: true,
//       animateRotate: true,
//     },
//   };
//   // 6th Section

//   {
//     /* 13th Section */
//   }
//   const scholarships = [
//     {
//       name: "British Chevening",
//       description: "UK Government’s international scholarship",
//       eligibility: "Postgraduate students with leadership potential",
//       amount: "£20,000",
//     },
//     {
//       name: "Commonwealth Scholarship",
//       description: "For students from Commonwealth countries",
//       eligibility: "Master’s & PhD candidates",
//       amount: "Varies",
//     },
//     {
//       name: "Rhodes Scholarship",
//       description: "For Oxford University",
//       eligibility: "Postgraduate students",
//       amount: "Full Tuition",
//     },
//     {
//       name: "Great Scholarships",
//       description: "For various UK universities",
//       eligibility: "Postgraduate students from selected countries",
//       amount: "£10,000",
//     },
//     {
//       name: "Vice-Chancellor’s Award",
//       description: "Merit-based scholarship",
//       eligibility: "High-achieving undergraduate students",
//       amount: "£5,000",
//     },
//     {
//       name: "UK Alumni Scholarship",
//       description: "For students with family alumni in the UK",
//       eligibility: "Undergraduate & Postgraduate students",
//       amount: "£8,000",
//     },
//   ];

//   /* 13th Section */

//   //14th Section
//   const courses = [
//     { name: "Law", icon: <FaGavel className="text-yellow-500 text-lg" /> },
//     {
//       name: "Medicine",
//       icon: <FaStethoscope className="text-blue-500 text-lg" />,
//     },
//     {
//       name: "Engineering & Technology",
//       icon: <FaCogs className="text-orange-500 text-lg" />,
//     },
//     { name: "Sciences", icon: <FaFlask className="text-indigo-500 text-lg" /> },
//     {
//       name: "Architecture",
//       icon: <FaUniversity className="text-gray-700 text-lg" />,
//     },
//     {
//       name: "Business and Management",
//       icon: <FaBriefcase className="text-brown-500 text-lg" />,
//     },
//     {
//       name: "Humanities",
//       icon: <FaBook className="text-yellow-600 text-lg" />,
//     },
//   ];

//   //14th Section

//   //16th Section
//   const universities = [
//     {
//       // name: "University for the Creative Arts (UCA)",
//       logo: "Harts.png",
//     },
//     {
//       // name: "Canterbury Christ Church University",
//       logo: "leeds.png",
//     },
//     {
//       // name: "Cardiff Metropolitan University",
//       logo: "rek.jpeg",
//     },
//     {
//       // name: "De Montfort University",
//       logo: "oxford.png",
//     },
//     {
//       // name: "Leeds Arts University",
//       logo: "win.png",
//     },
//     {
//       // name: "University of Plymouth",
//       logo: "Ban.png",
//     },
//     {
//       // name: "University of Hertfordshire",
//       logo: "Huddas.png",
//     },
//     {
//       // name: "University of Northampton",
//       logo: "Law.png",
//     },
//   ];
//   //16th Section

//   //17th Section
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   const faqData = [
//     {
//       question:
//         "What are the academic and language requirements for Bangladeshi students applying to UK universities?",
//       answer:
//         "The academic requirements for Bangladeshi students applying to UK universities depend on the subjects you are applying to. For the English language requirements, you will need to take the IELTS (with a score of 6.0 to 7.5), TOEFL (with a score of 80 to 100), or PTE (with a score of 51 to 67).",
//     },
//     {
//       question:
//         "What is the cost of studying and living in the UK for a student from Bangladesh?",
//       answer: "",
//     },
//     {
//       question:
//         "What visa requirements do Bangladeshi students need to fulfill to study in the UK?",
//       answer: "",
//     },
//     {
//       question:
//         "Are there scholarships specifically available for Bangladeshi students in the UK?",
//       answer: "",
//     },
//     {
//       question:
//         "What are the post-study work opportunities for Bangladeshi students after graduation in the UK?",
//       answer: "",
//     },
//   ];

//   //17th Section

//   return (
//     <>
//       {/* 1st Section */}
//       <div className="bg-[#e6f7fb] py-12 px-4 md:px-16">
//         <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
//           {/* Text Content */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#f16f22]">
//               Study in the UK <br />
//               <span className="text-black">with Expert Guidance</span>
//             </h2>
//             <p className="text-gray-700 mt-4 text-base md:text-lg">
//               Get comprehensive guidance & end-to-end assistance from expert
//               study abroad mentors for FREE!
//             </p>
//             <button
//               onClick={handleOpenModal}
//               className="mt-6 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#f16f22] transition duration-300"
//             >
//               Book a FREE Consultation →
//             </button>

//             {/* ✅ Modal */}
//             <ConsultationModal show={showModal} onClose={handleCloseModal} />
//           </div>

//           {/* Image Section */}
//           <div className="flex-1 relative">
//             <div className="rounded-xl overflow-hidden shadow-md">
//               <img
//                 src="Uk.jpg" // Replace with your actual image path
//                 alt="Study in the UK"
//                 className="w-full object-cover"
//               />
//             </div>
//             {/* Background shapes */}
//             <div className="absolute right-[-40px] bottom-[-30px] hidden md:block">
//               <div className="flex space-x-4">
//                 <div className="w-12 h-24 bg-[#5f61c4] rounded-md rotate-12"></div>
//                 <div className="w-12 h-24 bg-[#d4d8f7] rounded-md rotate-12"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 1st Section */}

//       {/* 2nd Section */}
//       <section className="bg-[#fdfafa] py-12 px-4 md:px-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
//           {/* Text Content */}
//           <div className="md:col-span-2">
//             {/* Dropdown-like Tabs */}
//             <div className="flex items-center justify-between bg-white shadow-md rounded-md px-4 py-3 border mb-6">
//               <div className="flex items-center space-x-4">
//                 <span className="text-[#f16f22] font-semibold">
//                   Jump to Topic
//                 </span>
//                 <span className="text-gray-600">|</span>
//                 <span className="text-black font-medium">Contents</span>
//               </div>
//               <span className="text-xl text-gray-400 rotate-180">⌃</span>
//             </div>

//             {/* Heading */}
//             <h2 className="text-2xl md:text-3xl font-bold text-[#f16f22] mb-4">
//               Why Study in the UK?
//             </h2>

//             {/* Paragraphs */}
//             <p className="text-gray-600 text-base leading-relaxed mb-6">
//               The United Kingdom is renowned for its longstanding tradition of
//               high-quality education, attracting a significant number of
//               international students each year. Its universities have
//               established a strong reputation for nurturing academic talent. One
//               of the notable advantages of studying in the UK is the wide range
//               of degree programs available, complemented by relatively
//               affordable tuition fees compared to many other countries.
//             </p>
//             <p className="text-gray-600 text-base leading-relaxed">
//               Moreover, the UK offers a post-study visa option, enabling
//               graduates to seek employment immediately after finishing their
//               courses. Once students secure a relevant job, they can apply for
//               residency and become a citizen over time. The visa application and
//               university admission processes are generally straightforward,
//               making the UK an attractive destination for those looking to
//               further their education abroad.
//             </p>
//           </div>

//           {/* Call to Action Box */}
//           <div className="bg-[#ffeeed] p-6 rounded-xl shadow-sm text-center">
//             <div className="text-3xl mb-4">👋</div>
//             <p className="text-lg font-semibold text-black mb-6">
//               Get Started on your Study Abroad Dream with Global Routeway Global
//             </p>
//             <button
//               onClick={handleOpenModal}
//               className="hover:bg-[#f16f22] bg-[#f16f22] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
//             >
//               Book Free Consultation →
//             </button>

//             {/* ✅ Modal */}
//             <ConsultationModal show={showModal} onClose={handleCloseModal} />
//           </div>
//         </div>
//       </section>
//       {/* 2nd Section */}

//       {/* 3rd Section */}
//       <section className="bg-white py-12 px-4 md:px-16">
//         <div className="max-w-6xl mx-auto">
//           {/* Title */}
//           <h2 className="text-3xl md:text-4xl font-bold text-[#f16f22] mb-10 text-center">
//             Top 5 Reasons <br className="md:hidden" /> to Study in the UK
//           </h2>

//           {/* Grid */}
//           <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
//             {/* First Row: 4 Cards */}
//             {reasons.slice(0, 4).map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`rounded-xl ${item.bg} p-6 shadow-sm flex items-start space-x-4`}
//               >
//                 <div className="text-3xl">{item.emoji}</div>
//                 <div>
//                   <h3
//                     className={`text-lg font-bold ${
//                       idx === 2
//                         ? "text-red-600"
//                         : idx === 3
//                         ? "text-green-600"
//                         : "text-gray-800"
//                     }`}
//                   >
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-700 mt-1">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Full Width Card */}
//           <div className="mt-6">
//             <div className="rounded-xl bg-red-50 p-6 shadow-sm flex items-start space-x-4">
//               <div className="text-3xl">{reasons[4].emoji}</div>
//               <div>
//                 <h3 className="text-lg font-bold text-[#f16f22]">
//                   {reasons[4].title}
//                 </h3>
//                 <p className="text-sm text-gray-700 mt-1">
//                   {reasons[4].description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* 3rd Section */}

//       {/* 4th Section */}
//       <section className="bg-[#fdfafa] py-12 px-4 md:px-16">
//         <div className="max-w-6xl mx-auto">
//           {/* Heading */}
//           <h2 className="text-2xl md:text-3xl font-bold text-[#f16f22] mb-6">
//             Cost of Studying in the UK
//           </h2>

//           {/* Paragraph */}
//           <p className="text-gray-700 text-base leading-relaxed mb-4">
//             The costs of studying in the UK can vary significantly, offering a
//             unique opportunity to shape your journey. Choosing a vibrant city
//             near the heart of the UK may come with higher expenses, but it also
//             provides a dynamic environment for growth. Alternatively,
//             universities located further from the city center typically present
//             more affordable options. Your investment will depend on the specific
//             course you select, with research-based programs often reflecting the
//             depth of knowledge they provide.
//           </p>
//           <p className="text-gray-700 text-base leading-relaxed mb-8">
//             Generally, undergraduate programs cost around £12,000, with some
//             inspiring pathways reaching up to £35,000. Master’s degree courses
//             fall within a similar range, while MBA programs offer a
//             transformative experience for about £60,000.
//           </p>

//           {/* Price Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {programs.map((program, index) => (
//               <div
//                 key={index}
//                 className="bg-[#fff4f1] rounded-xl p-6 shadow-sm hover:shadow-md transition"
//               >
//                 <h3 className="font-semibold text-lg text-black mb-2">
//                   {program.title}
//                 </h3>
//                 <p className="text-gray-800 text-base">{program.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* 4th Section */}

//       {/* 5th Section */}
//       <section className="bg-white py-12 px-4 md:px-16">
//         <div className="max-w-6xl mx-auto">
//           {/* Heading */}
//           <h2 className="text-2xl md:text-3xl font-bold text-[#f16f22] mb-6">
//             Cost of Living in the UK
//           </h2>

//           {/* Paragraphs */}
//           <div className="space-y-6 text-gray-700 text-base leading-relaxed">
//             <p>
//               Bangladeshi students studying in the UK may be concerned about the
//               cost of living, but with some thoughtful planning, it can be made
//               manageable. The total living expenses in the UK vary based on
//               several key factors, including accommodation, food, and
//               transportation.
//             </p>

//             <p>
//               When it comes to accommodation, urban areas can be more expensive,
//               but choosing to live in a rural location can provide significant
//               savings. It’s an excellent opportunity to explore different
//               lifestyles while being mindful of your budget.
//             </p>

//             <p>
//               Food costs in the UK can also add up, but preparing home-cooked
//               meals is an excellent way to save money and enjoy familiar
//               flavors. Experimenting with new cuisines occasionally can be a
//               delightful way to enhance your culinary experience.
//             </p>

//             <p>
//               Transportation and utility expenses are additional factors to
//               consider. Public transportation is regarded as one of the safest
//               and most efficient ways to get around, making it a wise choice for
//               students.
//             </p>

//             <p>
//               Lastly, it’s wise to set aside a budget for miscellaneous expenses
//               that may come up. By being proactive and creating a clear budget
//               plan, you can navigate the financial landscape of living in the UK
//               with confidence and ease.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* 5th Section */}

//       {/* 6th Section */}
//       <section className="bg-white py-12 px-4 md:px-16">
//         <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
//           <div className="relative w-full max-w-md">
//             <Pie data={data} options={options} />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
//               <p className="text-sm text-gray-600">
//                 Average Monthly Cost (GBP) (approx.)
//               </p>
//               <p className="text-2xl font-bold text-black">1105 – 2040</p>
//             </div>
//           </div>

//           {/* Labels with icons */}
//           <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left w-full max-w-4xl">
//             <div className="flex items-start gap-2">
//               <span className="text-xl">🏡</span>
//               <p>
//                 <strong>Accommodation</strong> <br />
//                 £500 – £800
//               </p>
//             </div>
//             <div className="flex items-start gap-2">
//               <span className="text-xl">⛽️</span>
//               <p>
//                 <strong>Utilities</strong> <br />
//                 £100 – £150
//               </p>
//             </div>
//             <div className="flex items-start gap-2">
//               <span className="text-xl">🚌</span>
//               <p>
//                 <strong>Transportation</strong> <br />
//                 £60 – £150
//               </p>
//             </div>
//             <div className="flex items-start gap-2">
//               <span className="text-xl">🍔</span>
//               <p>
//                 <strong>Food</strong> <br />
//                 £350 – £700
//               </p>
//             </div>
//             <div className="flex items-start gap-2">
//               <span className="text-xl">🔍</span>
//               <p>
//                 <strong>Phone & Misc Expenses</strong> <br />
//                 £95 – £240
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* 6th Section */}

//       {/* 7th Section */}
//       <section className="bg-[#f9f6f6] py-12 px-4 md:px-8 lg:px-16">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-semibold text-[#f16f22] mb-4">
//             Admission Requirements for Studying in the UK
//           </h2>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//             To gain admission to the UK as a Bangladeshi student, start by
//             gathering the necessary certifications and transcripts. If you’ve
//             completed a bachelor’s degree, pursuing a master’s degree in the UK
//             is an excellent choice. Ensure that you submit all relevant
//             documents from your undergraduate studies.
//           </p>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             You will likely need to provide letters of recommendation from
//             various sources, which can bolster your application. Additionally, a
//             statement of purpose is often required; therefore, take the time to
//             clearly articulate your goals and aspirations in this document.
//             Before selecting a course, it’s imperative to confirm that you meet
//             the eligibility criteria set by the institution. Following these
//             steps will ensure a smooth admission process and put you on the path
//             to success.
//           </p>
//         </div>
//       </section>
//       {/* 7th Section */}

//       {/* 8th Section */}
//       <div className="bg-white">
//         {/* Scholarship Section */}
//         <div className="bg-[#ffeae4] rounded-xl px-6 py-10 md:px-12 text-center max-w-6xl mx-auto shadow-md">
//           <h2 className="text-xl md:text-2xl font-semibold text-black mb-6">
//             You may be eligible for up to 50% Scholarship at a renowned
//             Institution in the UK
//           </h2>

//           {/* Logos Row */}
//           {/* <div className="bg-white rounded-lg p-4 shadow-sm flex flex-wrap justify-center items-center gap-6 mb-6">
//             <img
//               src="src/assets/logo.png"
//               alt="York"
//               className="h-10 object-contain"
//             />
//             <img
//               src="src/assets/logo.png"
//               alt="Leeds"
//               className="h-10 object-contain"
//             />
//             <img
//               src="src/assets/logo.png"
//               alt="Essex"
//               className="h-10 object-contain"
//             />
//             <img
//               src="src/assets/logo.png"
//               alt="Nottingham"
//               className="h-10 object-contain"
//             />
//             <img
//               src="src/assets/logo.png"
//               alt="Liverpool"
//               className="h-10 object-contain"
//             />
//             <span className="text-lg font-semibold">& more</span>
//           </div> */}

//           <p className="text-gray-700 mb-6">
//             Check your eligibility and receive end to end assistance for FREE!
//           </p>

//           <button
//             onClick={handleOpenModal}
//             className="hover:bg-[#f16f22] bg-[#f16f22] text-white py-2 px-6 rounded-full font-semibold shadow  transition"
//           >
//             Book a FREE Consultation →
//           </button>

//           {/* ✅ Modal */}
//           <ConsultationModal show={showModal} onClose={handleCloseModal} />
//         </div>

//         {/* Language Requirements */}
//         <div className="max-w-6xl mx-auto px-6 py-12">
//           <h3 className="text-2xl font-semibold text-[#f16f22] mb-4">
//             Language Requirements
//           </h3>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//             While English may not be your native language, submitting results
//             from an English proficiency test is your first step toward achieving
//             your academic dreams. The three most widely accepted tests for
//             university admissions in the UK are IELTS, TOEFL, and PTE—each
//             offering a path tailored to your strengths.
//           </p>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             For the IELTS, aim for a minimum overall score of 6.0, though
//             requirements may vary depending on your chosen subject. If you
//             prefer PTE, strive for a score of at least 51. For the TOEFL, a
//             score between 80 and 100 is typically required. Choose the language
//             test that resonates with you, knowing that universities across the
//             UK value your efforts.
//           </p>
//         </div>
//       </div>
//       {/* 8th Section */}

//       {/* 9th Section */}
//       <div className="bg-white py-12 px-4 md:px-8 max-w-6xl mx-auto">
//         {/* Table Section */}
//         <div className="overflow-x-auto mb-12">
//           <table className="min-w-full border border-gray-200 text-left">
//             <thead className="bg-[#ffeae4] text-[#f16f22] text-base font-semibold">
//               <tr>
//                 <th className="border px-4 py-3">English Language Test</th>
//                 <th className="border px-4 py-3">Required Score</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               <tr className="border">
//                 <td className="border px-4 py-4 flex items-center gap-2">
//                   <img src="ILTS.png" alt="IELTS" className="h-6 w-auto" />
//                 </td>
//                 <td className="border px-4 py-4">
//                   Most universities look for scores between 6.0 to 7.5, though
//                   this can vary based on the course.
//                 </td>
//               </tr>
//               <tr className="border">
//                 <td className="border px-4 py-4 flex items-center gap-2">
//                   <img src="Tofel.png" alt="TOEFL" className="h-6 w-auto" />
//                 </td>
//                 <td className="border px-4 py-4">
//                   Generally, institutions seek scores ranging from 80 to 100 for
//                   the TOEFL iBT.
//                 </td>
//               </tr>
//               <tr className="border">
//                 <td className="border px-4 py-4 flex items-center gap-2">
//                   <img src="PTE.png" alt="PTE" className="h-6 w-auto" />
//                 </td>
//                 <td className="border px-4 py-4">
//                   Institutions typically expect scores between 51 and 67.
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Visa Requirements Section */}
//         <div>
//           <h3 className="text-2xl font-semibold text-[#f16f22] mb-4">
//             Visa Requirements
//           </h3>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//             The UK visa process is relatively straightforward, and you can
//             expect to receive your visa within a few weeks. To apply for a UK
//             student visa, you will need several key documents. First, obtain
//             your Confirmation of Acceptance for Studies (CAS) from your
//             university, which is necessary to begin your application. You will
//             also need to provide your passport.
//           </p>
//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             Additionally, you must show proof of funds to cover your tuition and
//             living expenses. This can include personal funds or sponsorship
//             documentation. Lastly, you should complete all required health
//             screenings, including tuberculosis (TB) testing. As a Bangladeshi
//             student, you will also need to submit your certificates and
//             Statement of Purpose (SOP) to obtain the visa.
//           </p>
//         </div>
//       </div>
//       {/* 9th Section */}

//       {/* 10th Section */}
//       <div className="bg-white py-12 px-4 md:px-8 max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#f16f22] mb-6">
//           Intakes in the UK
//         </h2>

//         {/* Paragraph Section */}
//         <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4 mb-10">
//           <p>
//             There are four intakes available for university admissions in the
//             United Kingdom: summer, spring, autumn, and winter. As a student
//             from Bangladesh, you have the opportunity to select from these
//             options.
//           </p>
//           <p>
//             The winter intake commences at the beginning of the year, with
//             applications opening in January and remaining open until
//             approximately April. The spring intake takes place from April to
//             June, presenting the next chance for applicants. Following this is
//             the summer intake, which takes place from June to August, providing
//             an excellent opportunity to submit applications. Lastly, the autumn
//             intake begins in September.
//           </p>
//           <p>
//             It is important to note that individual universities may offer a
//             range of courses for each intake; therefore, conducting thorough
//             research to identify the most suitable intake for your application
//             is essential.
//           </p>
//         </div>

//         {/* Table Section */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 text-left">
//             <thead className="bg-[#ffeae4] text-[#f16f22] font-semibold text-base">
//               <tr>
//                 <th className="border px-4 py-3">Intakes</th>
//                 <th className="border px-4 py-3">Application Timeline</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               <tr>
//                 <td className="border px-4 py-3">Autumn</td>
//                 <td className="border px-4 py-3">September to December</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-3">Winter</td>
//                 <td className="border px-4 py-3">January to April</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-3">Spring</td>
//                 <td className="border px-4 py-3">April to June</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-3">Summer</td>
//                 <td className="border px-4 py-3">June to August</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* 10th Section */}

//       {/* 11th Section */}
//       <div className="bg-white py-12 px-4 md:px-8 max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#f16f22] mb-6">
//           Post-Study Work Opportunities in the UK
//         </h2>

//         {/* Description */}
//         <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4 mb-10">
//           <p>
//             Many students from Bangladesh prefer studying in the UK because the
//             country offers a work visa for international graduates both during
//             and after their studies. This visa allows them to work for two to
//             three years after graduation, providing ample time to search for
//             suitable job opportunities.
//           </p>
//           <p>
//             This period is especially beneficial as it enables students to find
//             positions that align with their fields of study. Graduates in
//             business and management often experience the most significant
//             financial benefits, with potential salaries reaching up to £70,000
//             per year. Similarly, graduates in healthcare and IT tend to earn
//             higher wages, with average salaries ranging from £51,000 to £65,000,
//             due to the high demand for these professionals. Therefore, carefully
//             choosing your major is crucial.
//           </p>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 text-left">
//             <thead className="bg-[#ffeae4] text-[#f16f22] font-semibold text-base">
//               <tr>
//                 <th className="border px-4 py-3">Field</th>
//                 <th className="border px-4 py-3">
//                   Approximate Annual Salary (£) (approx.)
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-700">
//               <tr>
//                 <td className="border px-4 py-3">Business Management</td>
//                 <td className="border px-4 py-3">£70,000</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-3">Education and Training</td>
//                 <td className="border px-4 py-3">£45,000</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-3">Healthcare</td>
//                 <td className="border px-4 py-3">£51,000</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-3">IT &amp; Computer Science</td>
//                 <td className="border px-4 py-3">£65,000</td>
//               </tr>
//               <tr>
//                 <td className="border px-4 py-3">
//                   Statistics and Data Science
//                 </td>
//                 <td className="border px-4 py-3">£70,000</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* 11th Section */}

//       {/* 12th Section */}
//       <div className="bg-white py-12 px-4 md:px-8 max-w-6xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-2xl md:text-3xl font-semibold text-[#f16f22] mb-6">
//           Scholarships in the UK
//         </h2>

//         {/* Content Paragraphs */}
//         <div className="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
//           <p>
//             The UK offers several scholarship opportunities for Bangladeshi
//             students, including government, university-specific, and regional
//             options. To secure these scholarships, it is essential to start the
//             application process early. Global Routeway Global can help you find
//             the perfect scholarship that suits your needs.
//           </p>
//           <p>
//             Key scholarships include the Chevening Scholarship, which covers
//             full tuition fees for international students, and the GREAT
//             Scholarships for master’s degree applicants. The UK Alumni
//             Scholarship provides approximately £8,000 per year to eligible
//             students. Additionally, many universities offer merit-based
//             scholarships that are awarded based on academic performance, with
//             institutions like the University of Oxford offering full
//             scholarships to outstanding students.
//           </p>
//         </div>
//       </div>
//       {/* 12th Section */}

//       {/* 13th Section */}
//       <div className="px-4 sm:px-6 lg:px-8 py-10">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-[#1a1a1a]">
//             UK Scholarships for International Students
//           </h2>

//           <div className="overflow-x-auto bg-white shadow-md rounded-xl border">
//             <table className="min-w-full divide-y divide-gray-200 text-left">
//               <thead className="bg-[#fde8e8] text-gray-900 text-sm sm:text-base">
//                 <tr>
//                   <th className="px-4 py-3 font-semibold">
//                     Name of Scholarship
//                   </th>
//                   <th className="px-4 py-3 font-semibold">Description</th>
//                   <th className="px-4 py-3 font-semibold">Eligibility</th>
//                   <th className="px-4 py-3 font-semibold">
//                     Amount in £ (approx.)
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 text-gray-700 text-sm sm:text-base">
//                 {scholarships.map((item, index) => (
//                   <tr key={index} className="hover:bg-gray-50 transition">
//                     <td className="px-4 py-3">{item.name}</td>
//                     <td className="px-4 py-3">{item.description}</td>
//                     <td className="px-4 py-3">{item.eligibility}</td>
//                     <td className="px-4 py-3 font-medium">{item.amount}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {/* 13th Section */}

//       {/* 14th Section */}
//       <div className="px-4 sm:px-6 lg:px-8 py-12">
//         <div className="max-w-7xl mx-auto">
//           {/* Heading */}
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#f16f22] text-center">
//             Top Courses to Study in the UK
//           </h2>

//           {/* Description */}
//           <div className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 text-justify">
//             <p>
//               Bangladeshi students often choose research-related subjects, with
//               law, medicine, and engineering being the most popular courses to
//               study in the UK. However, there is a growing trend for students to
//               opt for AI-related subjects, which are becoming increasingly
//               popular due to the enhanced job opportunities they offer
//               graduates.
//             </p>
//             <p>
//               In addition to these traditional fields, students are exploring
//               new paths, such as business management, science, and education,
//               which are gaining popularity. Studying in the UK offers more than
//               just a global education; it also provides access to career-focused
//               programs that lead to real job opportunities, a strong return on
//               investment (ROI), and long-term visa options for Bangladeshi
//               students. Furthermore, each university offers various
//               specializations within these general courses to accommodate
//               diverse interests and career aspirations.
//             </p>
//           </div>

//           {/* Course buttons */}
//           <div className="mt-10 flex flex-wrap justify-center gap-4">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-2 px-5 py-3 bg-white rounded-xl shadow hover:shadow-md transition text-gray-800 text-sm sm:text-base"
//               >
//                 {course.icon}
//                 <span>{course.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* 14th Section */}

//       {/* 15th Section */}
//       <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
//         <div className="max-w-6xl mx-auto">
//           {/* Heading */}
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-4">
//             Top Universities to Study in the UK
//           </h2>

//           {/* Paragraph */}
//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
//             The UK has one of the largest selections of universities in the
//             world, attracting Bangladeshi students who seek the best possible
//             opportunities. The University of Cambridge and the University of
//             Oxford are among the oldest and most prestigious institutions in the
//             world. Additionally, the UK features specialized universities
//             excelling in various fields. For instance, the University of Glasgow
//             is renowned for its programs in law, humanities, and engineering.
//             Swansea University and Cardiff University are recognized for their
//             strong engineering degrees, while Brunel University is well-known
//             for its design programs. For those interested in aerospace
//             engineering, Cranfield University is a top choice. When selecting a
//             university, it is essential to choose one with a strong reputation
//             and good placement opportunities to maximize your educational
//             experience.
//           </p>
//         </div>
//       </div>
//       {/* 15th Section */}

//       {/* 16th Section */}
//       <div className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//             {universities.map((uni, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow hover:shadow-md transition p-4 text-center flex flex-col items-center justify-between"
//               >
//                 <img
//                   src={uni.logo}
//                   // alt={uni.name}
//                   className="h-16 object-contain mb-4"
//                 />
//                 <h3 className="text-sm font-semibold text-gray-900 mb-2">
//                   {uni.name}
//                 </h3>
//                 {/* <a
//                   href="#"
//                   className="text-red-500 text-sm font-medium hover:underline"
//                 >
//                   Learn More &gt;
//                 </a> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* 16th Section */}

//       {/* 17th Section */}
//       <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-12">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`rounded-lg ${
//                   openIndex === index ? "bg-white shadow-md" : "bg-black-200"
//                 }`}
//               >
//                 <button
//                   onClick={() => toggle(index)}
//                   className="w-full text-left p-4 font-medium text-[#f16f22] hover:text-[#f16f22] focus:outline-none"
//                 >
//                   {item.question}
//                 </button>
//                 {openIndex === index && item.answer && (
//                   <div className="px-4 pb-4 text-black-700">
//                     <p>{item.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-8 text-sm text-black-500">
//             Our experts are waiting to help you take the next steps towards your
//             dream.
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <button
//             onClick={handleOpenModal}
//             className="mt-6 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#f16f22] transition duration-300 flex items-center justify-center"
//           >
//             Book a FREE Consultation →
//           </button>

//           {/* ✅ Modal */}
//           <ConsultationModal show={showModal} onClose={handleCloseModal} />
//         </div>
//       </div>
//       {/* 17th Section */}
//     </>
//   );
// };

// export default StudyInUk;







import React, { useState } from "react";
import SuccessStories from "../../SuccessStories/SuccessStories";
import CountryUniversityModal from "../../../Modal/CountryUniversityModal";

const data = {
  UK: [
    {
      name: "University of Oxford",
      details: "World-renowned for its history and academic excellence.",
    },
    {
      name: "University of Cambridge",
      details: "Known for excellence in science and humanities.",
    },
  ],
  USA: [
    {
      name: "Harvard University",
      details: "Famous for its law, business, and medical schools.",
    },
    {
      name: "Massachusetts Institute of Technology (MIT)",
      details: "Renowned for science, engineering, and technology.",
    },
  ],
  Canada: [
    {
      name: "University of Toronto",
      details: "Leading research university in Canada with diverse programs.",
    },
    {
      name: "McGill University",
      details: "One of Canada’s oldest universities with strong global reputation.",
    },
  ],
  Sweden: [
    {
      name: "Karolinska Institute",
      details: "World-class medical university in Sweden.",
    },
    {
      name: "Lund University",
      details: "Known for strong research and international collaboration.",
    },
  ],
  Denmark: [
    {
      name: "University of Copenhagen",
      details: "Denmark’s largest university with a broad range of disciplines.",
    },
    {
      name: "Aarhus University",
      details: "Strong in research and teaching across many fields.",
    },
  ],
  Finland: [
    {
      name: "University of Helsinki",
      details: "Finland’s oldest and largest university with diverse programs.",
    },
    {
      name: "Aalto University",
      details: "Known for technology, business, and arts.",
    },
  ],
  Hungary: [
    {
      name: "Eötvös Loránd University",
      details: "One of the most prestigious universities in Hungary.",
    },
    {
      name: "Budapest University of Technology and Economics",
      details: "Focus on engineering and technology disciplines.",
    },
  ],
  Italy: [
    {
      name: "University of Bologna",
      details: "The oldest university in the Western world with a rich history.",
    },
    {
      name: "Sapienza University of Rome",
      details: "One of Europe’s largest universities with diverse programs.",
    },
  ],
  France: [
    {
      name: "Sorbonne University",
      details: "Famous for humanities, science, and medicine.",
    },
    {
      name: "École Polytechnique",
      details: "Prestigious engineering school in France.",
    },
  ],
  Dubai: [
    {
      name: "American University in Dubai",
      details: "Offers American-style education with diverse programs.",
    },
    {
      name: "Dubai International Academic City",
      details: "Home to several international universities and colleges.",
    },
  ],
  Malaysia: [
    {
      name: "University of Malaya",
      details: "Malaysia’s oldest university with strong research programs.",
    },
    {
      name: "Universiti Kebangsaan Malaysia",
      details: "Known for academic excellence and research.",
    },
  ],
};


const StudyInUk = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedUniversities([]);
  };

  const handleUniversityChange = (e) => {
    const universityName = e.target.value;
    const isChecked = e.target.checked;

    setSelectedUniversities((prev) =>
      isChecked ? [...prev, universityName] : prev.filter((name) => name !== universityName)
    );
  };

  const universities = selectedCountry ? data[selectedCountry] : [];
  const selectedUniversityDetails = universities.filter((u) =>
    selectedUniversities.includes(u.name)
  );

  return (
    <>
      <div className="px-4 py-10 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-4">
          Study Abroad-(UK & Europe)
        </h1>
        <p className="text-black mb-8">
          Select a country and explore top universities with their descriptions.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
          <div className="flex-1">
            <label className="block text-black font-medium mb-2">
              Select Country
            </label>
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f16f22]"
            >
              <option value="">-- Choose Country --</option>
              {Object.keys(data).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-black font-medium mb-2">
              Select Universities
            </label>
            <div
              className={`w-full border rounded px-4 py-2 max-h-60 overflow-y-auto ${
                selectedCountry
                  ? "focus:ring-[#f16f22]"
                  : "bg-gray-100 text-gray-400"
              } focus:outline-none focus:ring-2`}
            >
              {selectedCountry ? (
                universities.map((uni) => (
                  <div key={uni.name} className="mb-2 last:mb-0">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={uni.name}
                        checked={selectedUniversities.includes(uni.name)}
                        onChange={handleUniversityChange}
                        className="text-[#f16f22] focus:ring-[#f16f22] rounded"
                      />
                      <span>{uni.name}</span>
                    </label>
                  </div>
                ))
              ) : (
                <div className="text-gray-400">-- Select a country first --</div>
              )}
            </div>
          </div>
        </div>

        {selectedUniversities.length > 0 && (
          <div className="space-y-4 mb-6">
            {selectedUniversityDetails.map((uni) => (
              <div
                key={uni.name}
                className="bg-white shadow rounded p-6 border border-gray-100"
              >
                <h2 className="text-xl font-semibold text-[#f16f22] mb-2">
                  {uni.name}
                </h2>
                <p className="text-gray-800">{uni.details}</p>
              </div>
            ))}
          </div>
        )}

        {selectedUniversities.length > 0 && (
          <div className="w-full flex justify-start">
            <button
              onClick={handleOpenModal}
              className="bg-[#f16f22] hover:bg-[#252364] text-white font-medium py-2 px-4 text-sm rounded transition w-full sm:w-auto"
            >
              Apply Now ({selectedUniversities.length} selected)
            </button>
          </div>
        )}
      </div>

      {/* ✅ Pass selectedCountry & selectedUniversities here */}
      <CountryUniversityModal
        show={showModal}
        onClose={handleCloseModal}
        selectedCountry={selectedCountry}
        selectedUniversities={selectedUniversities}
      />

      <SuccessStories />
    </>
  );
};

export default StudyInUk;


