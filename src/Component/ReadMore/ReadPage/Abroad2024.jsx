import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Abroad2024 = () => {
  const [showContents, setShowContents] = useState(false);
  return (
    <>
      <div className="bg-white py-4 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-[#252364] mb-4">
              Why Your Partner’s Visa Application May Be Rejected?
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <span>👤 Pooja</span>
              <span>📅 June 27, 2025</span>
              <span>🕒 6:30 am</span>
              <span>⏱️ 8 min Read</span>
            </div>

            {/* Summary */}
            <h2 className="text-lg font-semibold text-red-500 mb-2">Summary</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              IELTS is a globally recognized English proficiency test for study,
              work, and migration. It assesses Listening, Reading, Writing, and
              Speaking through Academic and General Training formats. A high
              score boosts university admissions, job opportunities, and visa
              approvals. Many institutions and employers require IELTS for
              eligibility. Enhance English offers expert guidance to help you
              achieve your target score.
            </p>

            {/* Share */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Share via:</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#3b5998] text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1da1f2] text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#0077b5] text-white"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/src/assets/images/Studyabroad.jpg" // ⬅️ Replace with actual path
              alt="Blog Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-10">
        {/* Jump to Topic */}
        <div className="mb-6">
          <button
            onClick={() => setShowContents(!showContents)}
            className="flex items-center gap-2 text-blue-600 font-semibold"
          >
            Jump to Topic | Contents
            <span
              className={`transform transition-transform ${
                showContents ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          {showContents && (
            <ul className="list-disc pl-6 mt-2 text-sm text-gray-700 space-y-1">
              <li>Why Study in the UK?</li>
              <li>UK Student Visa (Tier 4)</li>
              <li>Visa Requirements</li>
              <li>English Language Requirements</li>
              <li>Biometric Residence Permit</li>
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            The UK claimed pre-eminence among developed nations due to its high
            environmental quality, social involvement, personal security, and
            opportunities for democracy. Moreover, concerning matters such as
            work-life and wealth, the UK was also in the top 20% of performers.
          </p>

          <p>
            The academic standards at UK universities are among the highest in
            the world. In fact, four of the top ten institutions in the world
            [QS World Ranking 2019] are from the United Kingdom, including
            Oxford and Cambridge. Compared to most nations, the UK education
            system allows you to complete an undergraduate study in three years
            and a postgraduate course in one year.
          </p>

          <p>
            The UK government offers numerous possibilities for international
            students to study in the country. If you want to take advantage of
            the excellent education and opportunities that the UK has to offer,
            the first thing you need is a visa.
          </p>

          <h2 className="text-xl font-bold text-[#252364]">
            UK Student Visa (Tier 4)
          </h2>
          <p>
            The Tier 4 Student visa allows international students to come to the
            UK and avail incredible educational opportunities. The United
            Kingdom is a popular destination for students seeking a world-class
            education.
          </p>

          <h2 className="text-lg font-semibold text-red-600">
            Visa Requirements
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Course Confirmation:</strong> Obtain a CAS from a
              UKVI-recognized university.
            </li>
            <li>
              <strong>Funding:</strong> Show proof of tuition and living cost
              support.
            </li>
            <li>
              <strong>Visa Application:</strong> Apply online via the UKVI
              website.
            </li>
            <li>
              <strong>Immigration Health Surcharge:</strong> £470/year or £235
              for 6 months or less.
            </li>
          </ul>

          <p>
            Additionally, you need a legitimate Tier-4 sponsor, proof of English
            proficiency, valid medical reports, passport, and an ATAS
            certificate (if required).
          </p>

          <h2 className="text-lg font-semibold text-red-600">
            Additional Requirements
          </h2>
          <p>
            PFEC Global assists you in every step – planning, documentation, and
            readiness to ensure a smooth application process.
          </p>

          <h3 className="text-lg font-semibold text-[#252364]">
            A. English Language Requirements
          </h3>
          <p>
            UKVI requires proof of English language proficiency. You must pass
            an approved test and may be interviewed by an officer. Poor body
            language or inability to hold a conversation may result in visa
            denial.
          </p>

          <h3 className="text-lg font-semibold text-[#252364]">
            B. Biometric Residence Permit
          </h3>
          <p>
            This permit contains your name, date of birth, facial image, and
            fingerprints—demonstrating your immigration status.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="text-lg font-bold mb-1">
              🎓 Take your Study Abroad Dreams to the Next Level
            </h4>
            <p>
              Receive free end-to-end assistance and personalized guidance from
              experts.
            </p>
            <button className="mt-3 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
              Get Started for FREE →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abroad2024;
