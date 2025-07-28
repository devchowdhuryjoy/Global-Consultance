import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FiPlus, FiMinus } from "react-icons/fi";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import ConsultationModal from "../../../Modal/ConsultationModal";
import SuccessStories from "../../SuccessStories/SuccessStories";

const VisaService = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // 3th Section
  const steps = [
    {
      title: "Step 1",
      heading: "Visa Consultation:",
      description:
        "Personalized guidance on visa requirements and eligibility.",
      image: "/study1.jpg",
    },
    {
      title: "Step 2",
      heading: "Document Preparation:",
      description: "Assistance in gathering and verifying necessary documents.",
      image: "/study6.jpg",
    },
    {
      title: "Step 3",
      heading: "Visa Application Submission:",
      description: "Accurate and timely submission to the appropriate embassy.",
      image: "/study3.png",
    },
    {
      title: "Step 4",
      heading: "Interview Preparation:",
      description:
        "Mock interviews and coaching to ensure confidence in visa interviews.",
      image: "/study4.jpg",
    },
    {
      title: "Step 5",
      heading: "Visa Grant & Post-Arrival Support:",
      description: "Guidance on visa approval, travel, and settlement.",
      image: "/university.jpg",
    },
  ];
  // 3th Section

  // 4th Section
  const reviews = [
    {
      name: "Nashira",
      quote: `“I'm truly thankful to Global Routways, especially my counselor Anika Anjum Nabila, for their amazing support in helping me get my AUS visa. The entire process went very smoothly due to their expert guidance during this transitional period (March–April 2025) of the Australian visa, where the branch manager personally spent time counseling me.Global Routways was professional, quick, and reliable every step of the way. Nabila Apu gave me personalized help and made sure everything was done right.

    I highly recommend Global Routways to any student chasing their dream & one of the most expert counselor Anika Anjum Nabila. Thank you for helping make mine come true!”`,
    },
    {
      name: "Zihad Hossain",
      quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

      A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

      I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

      Their dedication and efficiency truly make a difference!`,
    },
    {
      name: "Zarin Afrin Zeni",
      quote: `“I am incredibly grateful to Global Routways and especially to my counselor, Mehedi Hassan, for their exceptional support throughout my journey of obtaining a USA visa. Their guidance and expertise made the entire process seamless and stress-free.

    Global Routways demonstrated outstanding professionalism, efficiency, and commitment to delivering on their promises. Mehedi Hassan was instrumental in providing personalized assistance and ensuring that every step of the process was handled with care and precision.

    I highly recommend Global Routways for their excellent services and unwavering dedication to helping students achieve their goals. Thank you for making this dream a reality!`,
    },
    {
      name: "Another Student",
      quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

      A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

      I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

      Their dedication and efficiency truly make a difference!”`,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState("4"); // default 3 reviews shown

  // handle next arrow click
  const handleNextClick = () => {
    if (visibleCount < reviews.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // attach event listener after DOM refs available
    const nextBtn = nextRef.current;
    if (nextBtn) {
      nextBtn.addEventListener("click", handleNextClick);
    }
    return () => {
      if (nextBtn) {
        nextBtn.removeEventListener("click", handleNextClick);
      }
    };
  }, [visibleCount]);
  //   4th section

  //   5th section
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What are the key documents required for a student visa?",
      answer:
        "Entry requirements vary by course and university but typically include academic qualifications and English proficiency (IELTS/PTE/TOEFL).",
    },
    {
      question: "How long does the visa processing take?",
      answer:
        "Visa processing time varies by country and application type, typically ranging from a few weeks to a couple of months.",
    },
    {
      question: "Does Global Routeway provide assistance with visa interviews?",
      answer:
        "Yes, we provide coaching and mock interviews to help you prepare confidently for visa interviews.",
    },
    {
      question: "Can I apply for a visa extension after my studies?",
      answer:
        "Yes, depending on your country and circumstances, visa extensions or post-study work permits may be available.",
    },
  ];
  // 5th section

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nearestOffice: "",
    studyDestination: "",
    englishTestStatus: "",
    fundingPlan: "",
    agreeTerms: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const sendData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone.startsWith("+880")
          ? formData.phone
          : "+880" + formData.phone,
        nearestOffice: formData.nearestOffice,
        preferredDestination: formData.studyDestination,
        testStatus: formData.englishTestStatus,
        fundingPlan: formData.fundingPlan,
      };

      const response = await fetch(`${BASE_URL}register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonColor: "#f16f22",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nearestOffice: "",
        studyDestination: "",
        englishTestStatus: "",
        fundingPlan: "",
        agreeTerms: false,
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#f16f22",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 1st section */}
      <div className="bg-[#e5f6fa] py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-[#fff] text-[#f16f22] px-4 py-1 text-sm font-medium rounded-md mb-4">
              Visa Services
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f16f22] leading-snug mb-4">
              Hassle-Free Visa Services for Your{" "}
              <br className="hidden sm:block" />
              Study Abroad Journey
            </h2>
            <p className="text-black-500 text-base sm:text-lg mb-6">
              Get expert guidance and seamless support for your student visa
              application and approval.
            </p>
            <button
              onClick={handleOpenModal}
              className="px-6 py-3 bg-[#f16f22] text-white rounded-md hover:bg-[#252364] transition font-semibold text-sm sm:text-base"
            >
              Book a Free Consultation →
            </button>
            {/* ✅ Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full relative">
            <img
              src="/study3.png" // Replace with your actual image
              alt="Visa Services"
              className="w-full max-w-md mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="bg-[#f9fafb] py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content (Image + 2 Sections) */}
          <div className="space-y-12">
            {/* Top Image */}
            <img
              src="/study6.jpg" // Replace with your actual image
              alt="Register"
              className="w-full max-w-lg mx-auto"
            />

            {/* Student Visa Section */}
            <div className="bg-white px-4 sm:px-8 lg:px-16 py-12 rounded-lg shadow">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-[#f16f22] mb-4">
                  Student Visa
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  As border protection laws update frequently and vary with
                  nationality, we implement our extensive experience to direct
                  you toward a well-position for visa compliance. Once you get
                  an admission offer from your dream university, you should
                  consider assembling the documents for applying for a visa. In
                  this regard, Global Routeway, being the best student visa
                  consultant in Bangladesh, can provide robust student visa
                  services in Bangladesh with professional advice and conduct
                  complete visa applications for those who struggle to find
                  authentic information. Our visa processing services include:
                </p>
                <ul className="list-decimal list-inside text-gray-700 space-y-1 mt-4">
                  <li>Student visa for Australia</li>
                  <li>Student visa for Canada</li>
                  <li>Student visa for UK</li>
                  <li>Student visa for USA</li>
                  <li>Student visa for Malaysia</li>
                </ul>
              </div>
            </div>

            {/* Visitor Visa Section */}
            <div className="bg-white px-4 sm:px-8 lg:px-16 py-12 rounded-lg shadow">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-[#f16f22] mb-4">
                  Visitor Visa
                </h2>
                <p className="text-lg font-semibold text-[#000] mb-4">
                  If you wish to visit international countries temporarily for
                  business, tourism, or transit, we can yield a seamless visa
                  application journey for you as your devoted student visa
                  agency in Dhaka.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  Global Routeway, the most reputed visa agency in Bangladesh,
                  has an unrivaled group of overseas education consultants in
                  Bangladesh who can guide you through the whole process of
                  preparing your visitor visa with the optimum chance of
                  success. Our skilled, hardworking, and qualified specialists
                  will work with you one-on-one with full commitment to success.
                  Moreover, they will review and assemble your documents at
                  every stage so that these are error-free, help you determine
                  the number of finances to be presented in the proper format,
                  prepare you for interviews with visa officers, and many more.
                  There are several steps in applying for a visitor visa,
                  however, the order and requirement of the steps may vary with
                  countries. In this process, our experienced counselors’
                  valuable advice will lead you to select the right strategy by
                  following ethical and professional rules. Moreover, with our
                  guidance, you can identify what you should do next and which
                  path you should follow to get the visa successfully.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-full h-fit sticky top-8">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center text-[#000]">
              Register with Us to Take the Next Step
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <div className="grid grid-cols-[80px_1fr] gap-2">
                <input
                  type="text"
                  value="+880"
                  readOnly
                  className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Mobile Number"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <select
                name="nearestOffice"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.nearestOffice}
                onChange={handleChange}
                required
              >
                <option value="">Your Nearest Global Routways Office</option>
                <option value="Mohammadpur">Mohammadpur</option>
                {/* <option value="Dhanmondi">Dhanmondi</option>
                <option value="Mirpur">Mirpur</option> */}
              </select>

              <select
                name="studyDestination"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.studyDestination}
                onChange={handleChange}
                required
              >
                <option value="">Your Preferred Study Destination</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Denmark">Denmark</option>
                <option value="Finland">Finland</option>
                <option value="Sweden">Sweden</option>
                <option value="Dubai">Dubai</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Europe">Europe</option>
              </select>

              <select
                name="englishTestStatus"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.englishTestStatus}
                onChange={handleChange}
                required
              >
                <option value="">English Language Test Status</option>
                <option value="I have the Scores available">
                  I have the Scores available
                </option>
                <option value="My exams are scheduled">
                  My exams are scheduled
                </option>
                <option value="I have not appeared for any exams">
                  I have not appeared for any exams
                </option>
                <option value="I am planning to reappear soon">
                  I am planning to reappear soon
                </option>
              </select>

              <select
                name="fundingPlan"
                className="border border-black rounded-lg px-4 py-2 w-full"
                value={formData.fundingPlan}
                onChange={handleChange}
                required
              >
                <option value="">How do you plan to fund your studies</option>
                <option value="I have my own funds">I have my own funds</option>
                <option value="I am looking for education loans">
                  I am looking for education loans
                </option>
                <option value="My parents or siblings will fund my studies">
                  My parents or siblings will fund my studies
                </option>
                <option value="I don't have Source of funds">
                  I don't have Source of funds
                </option>
              </select>

              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <p>
                  By clicking, you agree to our{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms & Conditions
                  </a>
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-4 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* 3rd section */}
      {/* <section className="bg-[#f3f7fa] py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#252364] mb-12">
            How Our Visa Services Work
          </h2>
          <div className="flex flex-wrap items-stretch justify-between gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[18.5%] flex flex-col items-center text-center"
              >
                <img
                  src={step.image}
                  alt={step.heading}
                  className="w-32 h-32 object-contain mb-4"
                />
                <div className="bg-[#252364] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  {step.title}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-full">
                  <h3 className="font-bold text-sm mb-1 text-left">
                    {step.heading}
                  </h3>
                  <p className="text-sm text-gray-700 text-left">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-[#f3f7fa] py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#f16f22] mb-12">
            How Our Visa Services Work
          </h2>
          <div className="flex flex-wrap items-stretch justify-between gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[18.5%] flex flex-col items-center text-center"
              >
                {/* ✅ CHANGED: wrapped image, title, and text in bordered box */}
                <div className="bg-white p-4 rounded-lg shadow-md w-full border-[2px] border-black flex flex-col items-center">
                  {" "}
                  {/* ✅ CHANGED */}
                  <img
                    src={step.image}
                    alt={step.heading}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <div className="bg-[#f16f22] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                    {step.title}
                  </div>
                  <h3 className="font-bold text-sm mb-1 text-left w-full">
                    {" "}
                    {/* ✅ CHANGED: added w-full for proper alignment */}
                    {step.heading}
                  </h3>
                  <p className="text-sm text-gray-700 text-left w-full">
                    {" "}
                    {/* ✅ CHANGED: added w-full for consistent alignment */}
                    {step.description}
                  </p>
                </div>
                {/* ✅ END OF CHANGED BOX */}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 3rd section */}

      {/* 4rd section */}
      {/* <div className="relative py-14 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          22,000+ Success Stories{" "}
          <span className="text-blue-700">Your could be the next.</span>
        </h2>

        
        <div
          ref={prevRef}
          className="swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#f16f22] w-8 h-8 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div
          ref={nextRef}
          className="swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#f16f22] w-8 h-8 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {reviews.slice(0, visibleCount).map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6 text-left h-full flex flex-col justify-between max-w-md mx-auto">
                <p className="text-sm text-gray-800 whitespace-pre-line mb-6">
                  {review.quote}
                </p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-sm text-gray-900">
                    {review.name}
                  </h4>
                  <img
                    src="Google-Logo.png"
                    alt="Google Reviews"
                    className="w-24 mt-2"
                  />
                  <div className="text-yellow-500 text-xs mt-1">★★★★★</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      <SuccessStories />
      {/* 4rd section */}

      {/* 5th section */}
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
                  <p className="mt-4 text-sm md:text-base text-black-500">
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

            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>
        </div>
      </section>
      {/* 5th section */}
    </>
  );
};

export default VisaService;
