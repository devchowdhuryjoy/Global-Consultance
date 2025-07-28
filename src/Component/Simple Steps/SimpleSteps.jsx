// import React from "react";

// const SimpleSteps = () => {
//   const steps = [
//     {
//       id: 1,
//       title: "Step 1",
//       heading: "One-on-One Counselling",
//       description:
//         "We evaluate your profile and ambitions to pinpoint the ideal programs.",
//       bg: "bg-yellow-400",
//       icon: "👥",
//     },
//     {
//       id: 2,
//       title: "Step 2",
//       heading: "Document Assembly",
//       description:
//         "Guidance on transcripts, recommendation letters, and all required paperwork.",
//       bg: "bg-blue-500",
//       icon: "📄",
//     },
//     {
//       id: 3,
//       title: "Step 3",
//       heading: "Application Management",
//       description:
//         "We handle deadlines, form filling, and fee payments on your behalf.",
//       bg: "bg-red-500",
//       icon: "🎓",
//     },
//     {
//       id: 4,
//       title: "Step 4",
//       heading: "Interview Coaching",
//       description: "Mock interviews and personalised tips to help you shine.",
//       bg: "bg-purple-400",
//       icon: "🗣️",
//     },
//     {
//       id: 5,
//       title: "Step 5",
//       heading: "Acceptance & Visa Aid",
//       description:
//         "From offer letters to visa paperwork and pre-departure briefings.",
//       bg: "bg-lime-400",
//       icon: "📑",
//     },
//   ];

//   return (
//     <div className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-24">
//       <div className="text-center mb-12">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
//           Study Abroad in just{" "}
//           <span className="text-[#f16f22]">5 Simple Steps</span>
//         </h1>
//         <p className="mt-4 text-gray-600">
//           With Global Routways by your side, your <br className="sm:hidden" />
//           can make the whole process a breeze!
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row md:justify-between items-center space-y-10 md:space-y-0">
//         {steps.map((step) => (
//           <div
//             key={step.id}
//             className="flex flex-col items-center text-center max-w-xs bg-white border-[2px] border-black p-5 rounded-md shadow"
//           >
//             <div
//               className={`w-20 h-20 rounded-md mb-4 flex items-center justify-center text-white text-2xl font-bold ${step.bg}`}
//             >
//               {step.icon}
//             </div>
//             <h2 className="text-red-600 font-semibold">{step.title}</h2>
//             <h3 className="font-bold text-blue-900 text-lg mb-2">
//               {step.heading}
//             </h3>
//             <p className="text-sm text-gray-600">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SimpleSteps;

import React from "react";

const SimpleSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      heading: "One-on-One Counselling",
      description:
        "We evaluate your profile and ambitions to pinpoint the ideal programs.",
      bg: "bg-red-200",
      icon: "👥",
    },
    {
      id: 2,
      title: "Step 2",
      heading: "Document Assembly",
      description:
        "Guidance on transcripts, recommendation letters, and all required paperwork.",
      bg: "bg-purple-200",
      icon: "📄",
    },
    {
      id: 3,
      title: "Step 3",
      heading: "Application Management",
      description:
        "We handle deadlines, form filling, and fee payments on your behalf.",
      bg: "bg-cyan-200",
      icon: "🎓",
    },
    {
      id: 4,
      title: "Step 4",
      heading: "Interview Coaching",
      description: "Mock interviews and personalised tips to help you shine.",
      bg: "bg-yellow-200",
      icon: "🗣️",
    },
    {
      id: 5,
      title: "Step 5",
      heading: "Acceptance & Visa Aid",
      description:
        "From offer letters to visa paperwork and pre-departure briefings.",
      bg: "bg-blue-200",
      icon: "📑",
    },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Study Abroad in just{" "}
          <span className="text-[#f16f22]">5 Simple Steps</span>
        </h1>
        <p className="mt-4 text-gray-600">
          With Global Routways by your side, your <br className="sm:hidden" />
          can make the whole process a breeze!
        </p>
      </div>

      {/* ✅ Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {steps.map((step) => (
          <div
            key={step.id}
            className="w-full max-w-[260px] bg-white border border-black p-5 rounded-lg shadow-md flex flex-col items-center text-center" // ✅ UPDATED w-72 to w-full + max-w
          >
            <div
              className={`w-20 h-20 rounded-md mb-4 flex items-center justify-center text-white text-3xl font-bold ${step.bg}`}
            >
              {step.icon}
            </div>
            <h2 className="text-red-600 font-semibold">{step.title}</h2>
            <h3 className="font-bold text-blue-900 text-lg mb-2">
              {step.heading}
            </h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleSteps;
