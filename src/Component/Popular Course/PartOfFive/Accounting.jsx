

import React, { useState, useEffect } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../../Api BaseUrl/ImageBaseUrl";

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

const Accounting = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [AccountingData, setAccountingData] = useState({
    text: "",
    image: "",
    content: "",
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Fetch data from GET API
  useEffect(() => {
    fetch(`${BASE_URL}course-accounting-get`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setAccountingData({
            text: data[0].text,
            image: data[0].image,
            content: data[0].content,
          });
        }
      })
      .catch((err) => console.error("Error fetching Accounting content:", err));
  }, []);

  const faqs = [
    {
      question: "What are the entry requirements for Accounting in Australia?",
      answer:
        "Entry requirements vary but typically include completion of secondary education, English language proficiency (IELTS 7.0 or equivalent), and meeting specific academic prerequisites for the course level you're applying for.",
    },
    {
      question:
        "How long does it take to become a registered accounting in Australia?",
      answer:
        "A Bachelor of Accounting typically takes 3 years of full-time study, while a Diploma of Accounting takes 18-24 months. After completing your degree, you'll need to register with the Accounting and Midwifery Board of Australia.",
    },
    {
      question:
        "Can international students work as accountings in Australia after graduation?",
      answer:
        "Yes, international students can apply for a post-study work visa after completing their Accounting qualification. You'll need to meet registration requirements with the Accounting and Midwifery Board of Australia to practice as a accounting.",
    },
    {
      question: "What is the cost of studying Accounting in Australia?",
      answer:
        "Tuition fees vary by institution and course level. Diploma courses typically range from AUD$15,000-$25,000 per year, while bachelor's degrees range from AUD$30,000-$40,000 per year.",
    },
    {
      question:
        "Are there scholarships available for international Accounting students?",
      answer:
        "Yes, many Australian universities offer scholarships for international students. These can be merit-based, need-based, or specific to certain countries or fields of study like Accounting.",
    },
  ];

  return (
    <>
   
      {/* 1st section - Hero */}
      <div className="bg-[#e6f6fc] py-12 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#f16f22] mb-4">
              Accounting
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              {AccountingData.text}
            </p>
            <button
              onClick={handleOpenModal}
              className="mt-2 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#252364] transition duration-300 flex items-center justify-center"
            >
              Book a FREE Consultation →
            </button>
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex-1 relative">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={`${IMAGE_BASE_URL}${AccountingData.image}`}
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

      {/* 2nd section - Accounting Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#f16f22] mb-6">
            Accounting
          </h2>
          {/* <div className="prose max-w-none text-gray-700">
            <p className="mb-4 whitespace-pre-line">{AccountingData.content}</p>
          </div> */}
          <div
            className="prose prose-li:marker:text-black prose-ol:pl-5 prose-ul:pl-5 max-w-none text-gray-800"
            dangerouslySetInnerHTML={{ __html: AccountingData.content }}
          ></div>
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
                        ? "text-[#f16f22]"
                        : "text-[#f16f22]"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="text-xl">
                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-sm md:text-base text-black-600">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-black-500 mt-12 text-base sm:text-lg">
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

export default Accounting;
