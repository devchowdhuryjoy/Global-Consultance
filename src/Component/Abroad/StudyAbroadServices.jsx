// import React from "react";
// import { FaUniversity, FaHome, FaPlane, FaBriefcaseMedical } from "react-icons/fa";

// const StudyAbroadServices = () => {
//   const services = [
//     {
//       title: "Admission Support",
//       icon: <FaUniversity className="text-cyan-500 text-xl" />,
//       bg: "bg-cyan-100",
//     },
//     {
//       title: "Health Insurance",
//       icon: <FaBriefcaseMedical className="text-yellow-500 text-xl" />,
//       bg: "bg-yellow-100",
//     },
//     {
//       title: "Student Accommodation",
//       icon: <FaHome className="text-rose-500 text-xl" />,
//       bg: "bg-rose-100",
//     },
//     {
//       title: "Visa Services",
//       icon: <FaPlane className="text-yellow-500 text-xl" />,
//       bg: "bg-yellow-100",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-16 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         {/* Left Content */}
//         <div>
//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
//             How Global Routways <span className="text-blue-900 font-bold">Simplifies your Study Abroad Journey?</span>
//           </h2>
//           <p className="mt-4 text-gray-600 text-base max-w-md">
//             Our services provide end-to-end assistance to study abroad aspirants. We make the journey hassle-free!
//           </p>
//         </div>

//         {/* Right Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
//             >
//               <div className="flex items-center gap-3">
//                 <div className={`w-10 h-10 flex items-center justify-center rounded-full ${service.bg}`}>
//                   {service.icon}
//                 </div>
//                 <h3 className="text-sm font-semibold text-gray-800">{service.title}</h3>
//               </div>
//               <span className="text-orange-500 font-bold text-lg">{">"}</span>
//             </div>
//           ))}
//         </div>
        
//       </div>
//     </div>
//   );
// }
// export default StudyAbroadServices;


import React from "react";
import { FaUniversity, FaHome, FaPlane, FaBriefcaseMedical } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StudyAbroadServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Admission Support",
      icon: <FaUniversity className="text-cyan-500 text-xl" />,
      bg: "bg-cyan-100",
      path: "/admission-support",
    },
    {
      title: "Health Insurance",
      icon: <FaBriefcaseMedical className="text-yellow-500 text-xl" />,
      bg: "bg-yellow-100",
      path: "/health-insurance",
    },
    {
      title: "Student Accommodation",
      icon: <FaHome className="text-rose-500 text-xl" />,
      bg: "bg-rose-100",
      path: null, // No path yet
    },
    {
      title: "Visa Services",
      icon: <FaPlane className="text-yellow-500 text-xl" />,
      bg: "bg-yellow-100",
      path: "/visa-service",
    },
  ];

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // 👈 scrolls to top
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
            How Global Routways <span className="text-blue-900 font-bold">Simplifies your Study Abroad Journey?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base max-w-md">
            Our services provide end-to-end assistance to study abroad aspirants. We make the journey hassle-free!
          </p>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[500px] pr-2">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(service.path)}
              className="cursor-pointer flex items-center justify-between gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${service.bg}`}>
                  {service.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{service.title}</h3>
              </div>
              <span className="text-orange-500 font-bold text-lg">{">"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadServices;


