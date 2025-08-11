





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
    { name: "American University in Dubai", details: "Offers American-style education with diverse programs." },
    { name: "Dubai International Academic City", details: "Home to several international universities and colleges." },
    { name: "Heriot-Watt University Dubai", details: "A UK-based university with a well-established campus in Dubai, especially strong in engineering, business, and data science." },
    { name: "Middlesex University Dubai", details: "The first overseas campus of London's Middlesex University. Offers a wide range of undergraduate and postgraduate programs." },
    { name: "University of Wollongong in Dubai (UOWD)", details: "One of the oldest international universities in Dubai, affiliated with the University of Wollongong (Australia)." },
  ],
  Malaysia: [
    { name: "University of Malaya", details: "Malaysia's oldest university with strong research programs." },
    { name: "Universiti Kebangsaan Malaysia", details: "Known for academic excellence and research." },
    { name: "Universiti Putra Malaysia (UPM)", details: "A top public research university with strengths in agriculture, biotechnology, and engineering." },
    { name: "Universiti Sains Malaysia (USM)", details: "Known as a leading science and technology university, with a focus on innovation and research." },
    { name: "Monash University Malaysia", details: "The Malaysian campus of Australia's Monash University, offering international education and research." },
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
      isChecked ? [...prev, universityName] : prev.filter((name) => name !== universityName)
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
            <label className="block text-black font-medium mb-2">Select Countries</label>
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
            <label className="block text-black font-medium mb-2">Select Universities</label>
            <div
              className={`w-full border rounded px-4 py-2 max-h-60 overflow-y-auto ${
                selectedCountries.length > 0 ? "focus:ring-[#f16f22]" : "bg-gray-100 text-gray-400"
              } focus:outline-none focus:ring-2`}
            >
              {selectedCountries.length > 0 ? (
                universitiesWithCountry.map((uni) => (
                  <div key={`${uni.country}-${uni.name}`} className="mb-2 last:mb-0">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        value={uni.name}
                        checked={selectedUniversities.includes(uni.name)}
                        onChange={handleUniversityChange}
                        className="text-[#f16f22] focus:ring-[#f16f22] rounded"
                      />
                      <span>
                        {uni.name} <span className="text-sm text-gray-500">({uni.country})</span>
                      </span>
                    </label>
                  </div>
                ))
              ) : (
                <div className="text-gray-400">-- Select countries first --</div>
              )}
            </div>
          </div>
        </div>

        {selectedUniversityDetails.length > 0 && (
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
        selectedCountries={selectedCountries}        // note plural, consistent naming
        selectedUniversities={selectedUniversities}
      />

      <SuccessStories />
    </>
  );
};

export default StudyInEurope;
