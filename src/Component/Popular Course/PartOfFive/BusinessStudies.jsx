import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

// Dummy modal component (replace with your actual modal)
const ConsultationModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Free Consultation</h2>
        <p className="mb-4">Book your free consultation now!</p>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-[#f16f22] text-white rounded hover:bg-[#252364]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const BusinessStudies = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What are the entry requirements for Business Studies in Australia?",
      answer:
        "Entry requirements vary but typically include completion of secondary education, English language proficiency (IELTS 7.0 or equivalent), and meeting specific academic prerequisites for the course level you're applying for.",
    },
    {
      question:
        "How long does it take to become a registered Business Studies in Australia?",
      answer:
        "A Bachelor of Business Studies typically takes 3 years of full-time study, while a Diploma of Business Studies takes 18-24 months. After completing your degree, you'll need to register with the Business Studies and Midwifery Board of Australia.",
    },
    {
      question:
        "Can international students work as Business Studiess in Australia after graduation?",
      answer:
        "Yes, international students can apply for a post-study work visa after completing their Business Studies qualification. You'll need to meet registration requirements with the Business Studies and Midwifery Board of Australia to practice as a Business Studies.",
    },
    {
      question: "What is the cost of studying Business Studies in Australia?",
      answer:
        "Tuition fees vary by institution and course level. Diploma courses typically range from AUD$15,000-$25,000 per year, while bachelor's degrees range from AUD$30,000-$40,000 per year.",
    },
    {
      question:
        "Are there scholarships available for international Business Studies students?",
      answer:
        "Yes, many Australian universities offer scholarships for international students. These can be merit-based, need-based, or specific to certain countries or fields of study like Business Studies.",
    },
  ];

  return (
    <>
      {/* 1st section - Hero */}
      <div className="bg-[#e6f6fc] py-12 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#252364] mb-4">
              Business Studies
            </h1>

            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Get comprehensive guidance & end-to-end assistance from expert
              study abroad mentors for FREE!
            </p>

            <button
              onClick={handleOpenModal}
              className="mt-2 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#252364] transition duration-300 flex items-center justify-center"
            >
              Book a FREE Consultation →
            </button>

            {/* Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex-1 relative">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="business-studies.jpeg"
                alt="Study in the Australia"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute right-[-40px] bottom-[-20px] hidden md:block">
              <div className="flex space-x-4">
                <div className="w-12 h-24 bg-[#5f61c4] rounded-md rotate-12"></div>
                <div className="w-12 h-24 bg-[#d4d8f7] rounded-md rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section - Business Studies Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-6">
            Business Studies
          </h2>

          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Pursue Enrolled Business Studies Courses in Australia from
              Bangladesh, from the urge of humanity & sense the spirit of
              rewards and individual fulfillment. With the chronic population
              boom worldwide, the demand for Business Studies courses and
              proficient Business Studiess in the healthcare system is
              constantly rising.
            </p>
            <p className="mb-4">
              If you yearn to work in the healthcare industry and serve humanity
              by creating close bonds and bringing positive changes, studying
              Business Studies courses in Australia from Bangladesh may be the
              pertinent path for you. A diploma in Business Studies courses at
              any globally ranked institute might allow you to kick-start your
              career as an enrolled Business Studies.
            </p>
            <p className="mb-4">
              You can also study Business Studies for an undergraduate or
              postgraduate degree, which will enable you to get a license and
              become a registered Business Studies. Besides, considering
              Business Studies as a career may entail a journey of healthcare
              benefits and work-hour flexibility.
            </p>
            <p className="mb-4">
              Moreover, the salary of this profession is also rising as demand
              for Business Studies services soars. To get admission into
              world-known colleges or universities in countries like Canada,
              Australia, the USA, the UK, and Malaysia, you can check the
              admission requirements stated below on this page.
            </p>
          </div>
        </div>
      </div>

      {/* 3rd section - Entry Requirements */}
      <div className="px-4 py-12 sm:px-6 lg:px-24 bg-[#fefefe]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#252364] text-2xl sm:text-3xl font-semibold mb-6">
            Entry Requirement
          </h2>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Diploma of Business Studies */}
              <div className="border border-gray-200 p-5 bg-[#fff4f1] rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#252364] mb-3">
                  Diploma of Business Studies
                </h3>
                <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
                  <li>Education: Class 12th</li>
                  <li>
                    English Language: IELTS 7.0 (on each band) or PTE - 65
                  </li>
                </ul>
              </div>

              {/* Bachelor of Business Studies */}
              <div className="border border-gray-200 p-5 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#252364] mb-3">
                  Bachelor of Business Studies
                </h3>
                <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
                  <li>Education: Diploma of Business Studies or Class 12th</li>
                  <li>English Language: IELTS/PTE score 7 (on each band)</li>
                </ul>
              </div>

              {/* Master of Business Studies */}
              <div className="border border-gray-200 p-5 bg-[#fff4f1] rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-[#252364] mb-3">
                  Master of Business Studies
                </h3>
                <ul className="text-gray-700 text-base list-disc list-inside space-y-2">
                  <li>Education: An undergraduate degree</li>
                  <li>
                    English Language: 6.5 / 7.0 (depending on institution)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4th Section - Career Pathways */}
      <div className="px-4 py-12 sm:px-6 lg:px-24 bg-[#fefefe]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#252364] text-2xl sm:text-3xl font-semibold mb-4">
            Career Pathways
          </h2>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Career outcome:
          </h3>

          <ol className="list-decimal list-inside text-gray-700 space-y-1 text-base sm:text-lg">
            <li>Hospital Orderly</li>
            <li>Matron</li>
            <li>Medical Administrator</li>
            <li>Business Studies Educator</li>
            <li>Business Studies Researcher</li>
            <li>
              Registered Business Studies (under a specific sub-field like
              community health, aged care, mental health, disability
              rehabilitation, etc.)
            </li>
          </ol>
        </div>
      </div>

      {/* 5th section - FAQs */}
      <section className="bg-[#f7f5ff] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl px-6 py-5 transition-all duration-300 shadow-sm cursor-pointer bg-white ${
                  activeIndex === index ? "bg-white" : "bg-[#fdfbff]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-base md:text-lg font-medium ${
                      activeIndex === index
                        ? "text-[#f04438]"
                        : "text-[#f04438]"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="text-xl">
                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-sm md:text-base text-gray-600">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-12 text-base sm:text-lg">
            Our experts are waiting to help you take the next steps towards your
            dream.
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleOpenModal}
              className="mt-4 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#252364] transition duration-300 flex items-center justify-center"
            >
              Book a Free Consultation →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessStudies;
