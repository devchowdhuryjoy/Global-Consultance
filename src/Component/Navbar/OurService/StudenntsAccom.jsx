import React from 'react'
import { FaClock } from "react-icons/fa";

const StudenntsAccom = () => {

    

const countries = [
  "UK",
  "Ireland",
  "Australia",
  "Canada",
  "New Zealand",
  "USA",
  "France",
  "Germany",
  "Spain",
];

  return (
    <div className="bg-[#f6f4ff] py-10 px-4 sm:px-6 lg:px-12">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {countries.map((country, index) => (
          <button
            key={index}
            className="text-[#252364] font-semibold hover:text-[#f16f22] transition"
          >
            {country}
          </button>
        ))}
      </div>

      {/* Blog Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-lg sm:text-xl font-semibold text-[#252364] mb-3">
            How Much Does it Cost to Study Abroad in 2024?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            Summary | IELTS is a globally recognized English proficiency test for study, work, and migration. It assesses Listening, Reading, Writing, and Speaking through Academic and General Training formats. A high score boosts […]
          </p>
          <div className="flex items-center text-gray-500 text-sm gap-2">
            <FaClock />
            <span>7 days ago</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="studyuk.jpg" // replace with your actual image path
            alt="Study Abroad"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default StudenntsAccom
