// const StudyInEurope = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedUniversities, setSelectedUniversities] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleCountryChange = (e) => {
//     setSelectedCountry(e.target.value);
//     setSelectedUniversities([]);
//   };

//   const handleUniversityChange = (e) => {
//     const universityName = e.target.value;
//     const isChecked = e.target.checked;

//     setSelectedUniversities((prev) =>
//       isChecked ? [...prev, universityName] : prev.filter((name) => name !== universityName)
//     );
//   };

//   const universities = selectedCountry ? data[selectedCountry] : [];
//   const selectedUniversityDetails = universities.filter((u) =>
//     selectedUniversities.includes(u.name)
//   );

//   return (
//     <>
//       <div className="px-4 py-10 max-w-5xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-4">
//           Study Abroad-(Hungary)
//         </h1>
//         <p className="text-black mb-8">
//           Select a country and explore top universities with their descriptions.
//         </p>

//         <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
//           <div className="flex-1">
//             <label className="block text-black font-medium mb-2">
//               Select Country
//             </label>
//             <select
//               value={selectedCountry}
//               onChange={handleCountryChange}
//               className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f16f22]"
//             >
//               <option value="">-- Choose Country --</option>
//               {Object.keys(data).map((country) => (
//                 <option key={country} value={country}>
//                   {country}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex-1">
//             <label className="block text-black font-medium mb-2">
//               Select Universities
//             </label>
//             <div
//               className={`w-full border rounded px-4 py-2 max-h-60 overflow-y-auto ${
//                 selectedCountry
//                   ? "focus:ring-[#f16f22]"
//                   : "bg-gray-100 text-gray-400"
//               } focus:outline-none focus:ring-2`}
//             >
//               {selectedCountry ? (
//                 universities.map((uni) => (
//                   <div key={uni.name} className="mb-2 last:mb-0">
//                     <label className="flex items-center space-x-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         value={uni.name}
//                         checked={selectedUniversities.includes(uni.name)}
//                         onChange={handleUniversityChange}
//                         className="text-[#f16f22] focus:ring-[#f16f22] rounded"
//                       />
//                       <span>{uni.name}</span>
//                     </label>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-gray-400">-- Select a country first --</div>
//               )}
//             </div>
//           </div>
//         </div>

//         {selectedUniversities.length > 0 && (
//           <div className="space-y-4 mb-6">
//             {selectedUniversityDetails.map((uni) => (
//               <div
//                 key={uni.name}
//                 className="bg-white shadow rounded p-6 border border-gray-100"
//               >
//                 <h2 className="text-xl font-semibold text-[#f16f22] mb-2">
//                   {uni.name}
//                 </h2>
//                 <p className="text-gray-800">{uni.details}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {selectedUniversities.length > 0 && (
//           <div className="w-full flex justify-start">
//             <button
//               onClick={handleOpenModal}
//               className="bg-[#f16f22] hover:bg-[#252364] text-white font-medium py-2 px-4 text-sm rounded transition w-full sm:w-auto"
//             >
//               Apply Now ({selectedUniversities.length} selected)
//             </button>
//           </div>
//         )}
//       </div>

//       {/* ✅ Pass selectedCountry & selectedUniversities here */}
//       <CountryUniversityModal
//         show={showModal}
//         onClose={handleCloseModal}
//         selectedCountry={selectedCountry}
//         selectedUniversities={selectedUniversities}
//       />

//       <SuccessStories />
//     </>
//   );
// };

// export default StudyInEurope;

import React, { useState } from "react";
import SuccessStories from "../../SuccessStories/SuccessStories";
import ApplyModal from "../../../Modal/ApplyModal";

const data = {
  Dubai: [
  {
    name: "American University in Dubai (AUD)",
    country: "Dubai",
    historicalPrestige: "",
    academicExcellence: "A respected American-style institution known for its business, arts, media, architecture programs, and U.S. accreditation",
    nobelLegacy: "",
    distance: "Driving from Abu Dhabi ~125–130 km (~1h 7m)",
    preferredSubjects: "Architecture, MBA, Construction Management, Media Studies",
    tuitionFees: "Undergraduate: AED 97,100; Master’s: AED 50,400–53,000"
  },
  {
    name: "University of Wollongong in Dubai (UOWD)",
    country: "Dubai",
    historicalPrestige: "",
    academicExcellence: "A branch campus of the University of Wollongong, Australia; independent and offering strong business, engineering, IT programs",
    nobelLegacy: "",
    distance: "Approx 125 km from Abu Dhabi",
    preferredSubjects: "Business, International Relations, Engineering Management, Computer Science",
    tuitionFees: "Undergraduate: AED 57,600–62,600; Master’s: AED 7,846–9,415"
  },
  {
    name: "Middlesex University Dubai",
    country: "Dubai",
    historicalPrestige: "",
    academicExcellence: "First overseas campus of Middlesex University UK; accredited by KHDA and MoHESR; strong business, arts, education programs",
    nobelLegacy: "",
    distance: "Approximately 125–130 km from Abu Dhabi",
    preferredSubjects: "MSc in Robotics, Data Science, International Business; Business and Arts programs",
    tuitionFees: "Undergraduate: AED 60,000; Master’s: AED 35,000–53,800"
  },
  {
    name: "Manipal Academy of Higher Education, Dubai",
    country: "Dubai",
    historicalPrestige: "",
    academicExcellence: "Branch of Manipal University (India), offering more than 50 programs across engineering, business, architecture",
    nobelLegacy: "",
    distance: "Approx 125 km from Abu Dhabi",
    preferredSubjects: "Engineering, Business, Architecture, Computer Science, Biotechnology",
    tuitionFees: "Undergraduate: AED 35,500–48,000; Master’s: AED 33,000–48,000"
  },
  {
    name: "Rochester Institute of Technology, Dubai (RIT Dubai)",
    country: "Dubai",
    historicalPrestige: "",
    academicExcellence: "Satellite campus of RIT (New York), strong in engineering and tech with excellent labs and resources",
    nobelLegacy: "",
    distance: "Approx 125–130 km from Abu Dhabi",
    preferredSubjects: "Electrical Engineering, Mechanical Engineering, Networking & Systems Administration",
    tuitionFees: "Master’s: AED 76,000–85,000"
  },
  {
    name: "Heriot-Watt University Dubai",
    country: "Dubai",
    historicalPrestige: "",
    academicExcellence: "First overseas UK campus in Dubai; awarded Middle East’s Best University; KHDA five-star rating; strong engineering, energy, business, design programs",
    nobelLegacy: "",
    distance: "Approx 125–140 km from Abu Dhabi",
    preferredSubjects: "Engineering, Mathematical & Computer Sciences, Social Sciences, Textiles & Design, Edinburgh Business School",
    tuitionFees: "Master’s: AED 58,000–65,000"
  },
  {
    name: "British University in Dubai (BUiD)",
    country: "Dubai",
    historicalPrestige: "",
    academicExcellence: "Research-intensive, strong in business, engineering, IT",
    nobelLegacy: "",
    distance: "Approx 125–130 km from Abu Dhabi",
    preferredSubjects: "Business, Engineering, IT",
    tuitionFees: "Undergraduate: AED 56,300–62,500; Master’s: AED 70,000–85,000"
  }
],
  Malaysia: [
    {
      name: "University of Malaya (UM)",
      country: "Malaysia",
      historicalPrestige:
        "Malaysia's oldest and highest-ranked university, currently ranked 58th globally in the QS World University Rankings 2026.",
      academicExcellence: "",
      nobelLegacy: "",
      distance:
        "Approximately 25 miles (40 km); about 41 km by road from Kuala Lumpur",
      preferredSubjects:
        "Law, Engineering, Medicine, Social Sciences, Linguistics",
      tuitionFees: "RM 7,000–RM 39,990 per year (international students)",
    },
    {
      name: "Universiti Teknologi Petronas (UTP)",
      country: "Malaysia",
      historicalPrestige:
        "Ranked in the 201–250 band globally in the Times Higher Education World University Rankings 2025.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 200 km north of Kuala Lumpur",
      preferredSubjects:
        "Petroleum Engineering, Chemical Engineering, Computer Science, Business",
      tuitionFees: "RM 8,000–RM 15,000 per year",
    },
    {
      name: "Monash University Malaysia",
      country: "Malaysia",
      historicalPrestige:
        "An Australian branch campus offering globally recognized degrees.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 20 km southwest of Kuala Lumpur",
      preferredSubjects: "Business, Engineering, Information Technology, Arts",
      tuitionFees: "RM 20,000–RM 30,000 per year",
    },
    {
      name: "Universiti Kebangsaan Malaysia (UKM)",
      country: "Malaysia",
      historicalPrestige:
        "Known for its strong emphasis on research and public policy.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 35 km south of Kuala Lumpur",
      preferredSubjects: "Law, Social Sciences, Environmental Studies",
      tuitionFees: "RM 6,000–RM 12,000 per year",
    },
    {
      name: "Universiti Sains Malaysia (USM)",
      country: "Malaysia",
      historicalPrestige:
        "A leading research university with a focus on science and technology.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 350 km north of Kuala Lumpur",
      preferredSubjects:
        "Biomedical Sciences, Engineering, Environmental Sciences",
      tuitionFees: "RM 7,000–RM 15,000 per year",
    },
    {
      name: "Sunway University",
      country: "Malaysia",
      historicalPrestige:
        "Ranked in the 401–500 band globally in the Times Higher Education World University Rankings 2025.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Approximately 20 km southwest of Kuala Lumpur",
      preferredSubjects: "Business, Accounting, Media Studies",
      tuitionFees: "RM 10,000–RM 20,000 per year",
    },
    {
      name: "UCSI University",
      country: "Malaysia",
      historicalPrestige:
        "A private university known for its diverse programs and international collaborations.",
      academicExcellence: "",
      nobelLegacy: "",
      distance: "Located within Kuala Lumpur",
      preferredSubjects: "Music, Pharmacy, Engineering",
      tuitionFees: "RM 15,000–RM 25,000 per year",
    },
  ],
};

const StudyInEurope = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCountries((prev) =>
      isChecked ? [...prev, country] : prev.filter((c) => c !== country)
    );

    setSelectedUniversities([]); // reset universities when countries change
  };

  const handleUniversityChange = (e) => {
    const universityName = e.target.value;
    const isChecked = e.target.checked;

    setSelectedUniversities((prev) =>
      isChecked
        ? [...prev, universityName]
        : prev.filter((name) => name !== universityName)
    );
  };

  // Create an array of universities with their country info for selected countries
  const universitiesWithCountry = selectedCountries.flatMap((country) =>
    data[country] ? data[country].map((uni) => ({ ...uni, country })) : []
  );

  const selectedUniversityDetails = universitiesWithCountry.filter((u) =>
    selectedUniversities.includes(u.name)
  );

  return (
    <>
      <div className="px-4 py-10 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-4">
          Study Abroad - (Asia)
        </h1>
        <p className="text-black mb-8">
          Select countries and explore top universities with their descriptions.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
          <div className="flex-1">
            <label className="block text-black font-medium mb-2">
              Select Countries
            </label>
            <div className="w-full border rounded px-4 py-2 max-h-60 overflow-y-auto focus:ring-2 focus:ring-[#f16f22]">
              {Object.keys(data).map((country) => (
                <div key={country} className="mb-2 last:mb-0">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={country}
                      checked={selectedCountries.includes(country)}
                      onChange={handleCountryChange}
                      className="text-[#f16f22] focus:ring-[#f16f22] rounded"
                    />
                    <span>{country}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <label className="block text-black font-medium mb-2">
              Select Universities
            </label>
            <div
              className={`w-full border rounded px-4 py-2 max-h-60 overflow-y-auto ${
                selectedCountries.length > 0
                  ? "focus:ring-[#f16f22]"
                  : "bg-gray-100 text-gray-400"
              } focus:outline-none focus:ring-2`}
            >
              {selectedCountries.length > 0 ? (
                universitiesWithCountry.map((uni) => (
                  <div
                    key={`${uni.country}-${uni.name}`}
                    className="mb-2 last:mb-0"
                  >
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={uni.name}
                        checked={selectedUniversities.includes(uni.name)}
                        onChange={handleUniversityChange}
                        className="text-[#f16f22] focus:ring-[#f16f22] rounded"
                      />
                      <span>
                        {uni.name}{" "}
                        <span className="text-sm text-gray-500">
                          ({uni.country})
                        </span>
                      </span>
                    </label>
                  </div>
                ))
              ) : (
                <div className="text-gray-400">
                  -- Select countries first --
                </div>
              )}
            </div>
          </div>
        </div>

        {/* {selectedUniversityDetails.length > 0 && (
          <div className="space-y-4 mb-6">
            {selectedUniversityDetails.map((uni) => (
              <div
                key={`${uni.country}-${uni.name}`}
                className="bg-white shadow rounded p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-[#f16f22] mb-2">{uni.name}</h2>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                    {uni.country}
                  </span>
                </div>
                <p className="text-gray-800">{uni.details}</p>
              </div>
            ))}
          </div>
        )} */}

         {selectedUniversities.length > 0 && (
          <div className="space-y-4 mb-6">
            {selectedUniversityDetails.map((uni) => (
              <div
                key={`${uni.country}-${uni.name}`}
                className="bg-white shadow rounded p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-[#f16f22] mb-2">
                    {uni.name}
                  </h2>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-600">
                    {uni.country}
                  </span>
                </div>

                {/* Image er moto design */}
                <ul className="space-y-3 text-black mb-4 text-justify break-words hyphens-auto">
                  <li>
                    <strong>Historical Prestige:</strong>{" "}
                    {uni.historicalPrestige}
                  </li>
                  <li>
                    <strong>Academic Excellence:</strong>{" "}
                    {uni.academicExcellence}
                  </li>
                  <li>
                    <strong>Nobel Legacy:</strong> {uni.nobelLegacy}
                  </li>
                </ul>

                <p className="mb-1 text-justify break-words hyphens-auto">
                  <strong>Distance:</strong> {uni.distance}
                </p>
                <p
                  className="mb-1">
                  <strong>Preferred Subjects:</strong> {uni.preferredSubjects}
                </p>
                <p className="mb-1 text-justify break-words hyphens-auto">
                  <strong>Tuition Fees:</strong> {uni.tuitionFees}
                </p>
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

      <ApplyModal
        show={showModal}
        onClose={handleCloseModal}
        selectedCountries={selectedCountries} // note plural, consistent naming
        selectedUniversities={selectedUniversities}
      />

      <SuccessStories />
    </>
  );
};

export default StudyInEurope;
