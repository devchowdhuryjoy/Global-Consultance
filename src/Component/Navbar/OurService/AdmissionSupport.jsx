import React, { useRef, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import ConsultationModal from "../../../Modal/ConsultationModal";
import SuccessStories from "../../SuccessStories/SuccessStories";
import SimpleSteps from "../../Simple Steps/SimpleSteps";

const AdmissionSupport = () => {
  const [showModal, setShowModal] = useState(false);
  const swiperRef = useRef(null);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

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

  // 6th Section
  // const universityData = [
  //   {
  //     country: "Malaysia",
  //     logos: ["malishia.jpg", "malishia.jpg", "malishia.jpg", "malishia.jpg"],
  //   },
  //   {
  //     country: "Australia",
  //     logos: [
  //       "austrolia.jpg",
  //       "austrolia.jpg",
  //       "austrolia.jpg",
  //       "austrolia.jpg",
  //     ],
  //   },
  //   {
  //     country: "UK",
  //     logos: ["uklogo.png", "uklogo.png", "uklogo.png", "uklogo.png"],
  //   },
  //   {
  //     country: "USA",
  //     logos: ["usa.png", "usa.png", "usa.png", "usa.png"],
  //   },
  //   {
  //     country: "Canada",
  //     logos: ["canada.jpg", "canada.jpg", "canada.jpg", "canada.jpg"],
  //   },
  //   {
  //     country: "Ireland",
  //     logos: ["ireland.jpg", "ireland.jpg", "ireland.jpg", "ireland.jpg"],
  //   },
  // ];
  // 6th Section

  // 7th Section
  const steps = [
    {
      id: 1,
      title: "Step 1",
      heading: "One-on-One Counselling",
      description:
        "We evaluate your profile and ambitions to pinpoint the ideal programs.",
      bg: "bg-yellow-400",
      icon: "👥",
    },
    {
      id: 2,
      title: "Step 2",
      heading: "Document Assembly",
      description:
        "Guidance on transcripts, recommendation letters, and all required paperwork.",
      bg: "bg-blue-500",
      icon: "📄",
    },
    {
      id: 3,
      title: "Step 3",
      heading: "Application Management",
      description:
        "We handle deadlines, form filling, and fee payments on your behalf.",
      bg: "bg-red-500",
      icon: "🎓",
    },
    {
      id: 4,
      title: "Step 4",
      heading: "Interview Coaching",
      description: "Mock interviews and personalised tips to help you shine.",
      bg: "bg-purple-400",
      icon: "🗣️",
    },
    {
      id: 5,
      title: "Step 5",
      heading: "Acceptance & Visa Aid",
      description:
        "From offer letters to visa paperwork and pre-departure briefings.",
      bg: "bg-lime-400",
      icon: "📑",
    },
  ];
  // 7th Section

  // 8th section
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
  //8th section

  // 9th section
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services including consulting, design, development, and ongoing support for your digital projects.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity, but most projects range from 4-12 weeks.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer various support packages to meet your needs after project completion.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "Absolutely! We'd be happy to share our portfolio with you during our consultation.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // 9th section

  return (
    <>
      {/* 1st section */}
      <div className="bg-[#eaf6fa] py-16 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block bg-[#fff] text-[#f16f22] font-medium text-sm px-4 py-1 rounded mb-4">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b1b1b] leading-tight mb-4">
              <span className="text-[#f16f22]">Expert Admission Support</span>{" "}
              <br />
              for Your Study Abroad Journey
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Unlock global opportunities with seamless guidance from
              application to acceptance.
            </p>
            <button
              onClick={handleOpenModal}
              className="mt-2 px-6 py-3 hover:bg-[#252364] bg-[#f16f22] text-white font-semibold rounded  transition duration-300 flex items-center gap-2"
            >
              Book a Free Consultation <FaArrowRight />
            </button>

            {/* ✅ Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative z-10">
              <img
                src="/AdmissionSupport.png" // Replace with your image path
                alt="Consultation"
                className="w-full max-w-md sm:max-w-lg rounded-lg object-cover"
              />
            </div>
            {/* Background shapes */}
            <div className="absolute top-10 left-5 w-64 h-72 bg-[#d1d9ff] rotate-[15deg] rounded-3xl -z-10"></div>
            <div className="absolute top-0 left-20 w-64 h-72 bg-[#aebeff] rotate-[5deg] rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
      {/* 1st section */}

      {/* 2nd section */}
      <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
          {/* Left Side: Info Cards and Consultation Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Why Choose Global Routeway for Admission Support?
            </h2>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#ffe6e6] rounded-2xl p-5 text-center shadow-md">
                <h3 className="text-2xl font-bold text-[#f16f22]">22,000+</h3>
                <p className="text-gray-800 mt-1">Students Assisted</p>
              </div>
              <div className="bg-[#fff3d9] rounded-2xl p-5 text-center shadow-md">
                <h3 className="text-2xl font-bold text-[#f16f22]">11</h3>
                <p className="text-gray-800 mt-1">Study Destinations</p>
              </div>
              <div className="bg-[#e3f2ff] rounded-2xl p-5 text-center shadow-md">
                <h3 className="text-2xl font-bold text-[#f16f22]">550+</h3>
                <p className="text-gray-800 mt-1">Partner Institutions</p>
              </div>
            </div>

            {/* FREE Banner */}
            <div className="bg-gradient-to-r from-[#f16f22] to-[#5b0060] text-white p-5 rounded-2xl shadow-lg mt-4">
              <p className="text-xl font-bold">FREE</p>
              <p className="text-sm">
                End-to-End Guidance, Profile assessment, Career Guidance,
                University Application Assistance and much more!
              </p>
            </div>

            {/* Consultation Text */}
            <div className="text-gray-800 space-y-6 text-justify">
              <p className="text-base sm:text-lg">
                Receive an individual consultation with the best educational
                consultants in{" "}
                <strong className="text-[#f16f22]">Bangladesh</strong> to obtain
                a trouble-free experience and discover the right possibilities
                for overseas study.
              </p>

              <p className="text-base sm:text-lg">
                Every year thousands of students in Bangladesh aim to start
                their careers abroad. In this respect,{" "}
                <strong className="text-[#f16f22]">Global Routeway</strong> has
                established themselves as the best admission consultants in
                Bangladesh. At Global Routeway, we perceive that students often
                feel apprehensive about the surcharge of information available
                on the internet while preparing for a new journey. Hence, with
                over a decade of experience and professional acknowledgment, our
                dedicated team can always make the entire admission and visa
                application process hassle-free for the students. Ultimately, we
                are the official representative of over <strong>550+</strong>{" "}
                universities, colleges, and institutions that have optimum
                prestige worldwide with phenomenal courses, ethos, culture,
                course delivery format, cost, international student support,
                work opportunities, diversity, and location.
              </p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 rounded-2xl shadow-md w-full">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
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
                  <option value="I have my own funds">
                    I have my own funds
                  </option>
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
      </div>
      {/* 2nd section */}

      {/* 3rd section */}
      <div className="bg-[#f9f9f9] px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/CourseSelection.png" // 🖼️ Replace with actual image path (e.g., /assets/target.jpg)
              alt="Target with Darts"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-gray-800 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Course Selection and Admission Advice
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-[#f16f22]">
              Choosing the right course and institution
            </h3>

            <p className="text-base sm:text-lg text-justify">
              To guide the students in selecting the best quality of education
              tailored to their merit, course timeline, and financial abilities,
              our dedicated advisors start with background research and Genuine
              Temporary Entrant (GTE) eligibility as a process of application.
            </p>

            <p className="text-base sm:text-lg text-justify">
              At Global Routeway Global, we believe every student profile is
              unique, thus, focusing on evaluating each profile with time and
              care, considering past education qualifications and job experience
              through recognition of prior learning (RPL). Indeed, the extensive
              research on individual applicants leads us to choose what form of
              education will best fit their interests and prepare the supporting
              documents. For instance, a student with a study break of more than
              two years after completing High School or a Bachelor’s degree must
              provide sufficient evidence explaining the reason for the gap.
              Again, each applicant must present firm grounds on the statement
              of purpose behind selecting a course that would significantly
              increase employment upon return to the home country. Fortunately,
              we are here to guide the students in this regard. Eventually,
              after evaluating interests, academic history, financial status,
              and future career goals our team of devoted counselors recommend
              the right course and institution to the students.
            </p>
          </div>
        </div>
      </div>
      {/* 3rd section */}

      {/* 4rd section */}
      <div className="bg-white px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 text-gray-800 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Preparing the papers required by the educational institutions
            </h2>
            <p className="text-base sm:text-lg text-justify">
              Alongside advising the right institutions, courses, and countries
              for international students, we also guide on what documentation
              the institutions need for their admission process. Our advisors,
              who provide reliable overseas education consultants in Dhaka and
              Chittagong, assist the applicants in preparing and assembling the
              following documents required during the admission application:
            </p>

            <ol className="list-decimal list-inside space-y-1 text-base sm:text-lg">
              <li>English Language Proficiency Test Scores (PTE/IELTS)</li>
              <li>Entrance Exam Test Scores (GRE/GMAT/LSAT/MCAT)</li>
              <li>Statement of Purpose (SOP)</li>
              <li>All-Academic Documents</li>
              <li>Updated Resume/Curriculum Vitae</li>
              <li>Letters of Recommendation (LOR)</li>
              <li>Experience Letters (if available)</li>
              <li>Certificates for Extra-curricular Activities</li>
              <li>Proof of Sufficient Funds</li>
              <li>Research Proposal & Portfolio</li>
            </ol>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/Preparing.png" // 🖼️ Replace with actual image path
              alt="Preparing documents"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
      {/* 4rd section */}

      {/* 5rd section */}
      <div className="bg-gray-50 px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/InteractiveSessions.png" // 🖼️ Replace with your actual image path
              alt="Interactive video session"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-1/2 text-gray-800 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Interactive Sessions for Admission Help
            </h2>
            <p className="text-base sm:text-lg text-justify">
              Global Routeway Global is an official representative of institutes
              around the world to provide authentic services to students in
              Bangladesh. On this ground, we arrange regular seminars where
              prominent educational institutions take part and conduct
              informative sessions, followed by on-spot admission for potential
              candidates. This process breeds trust and confidence among the
              students and makes us a trustworthy student visa consultant in
              Bangladesh. Moreover, through interactive sessions, students get
              the golden opportunity to know about their dream institution and
              destination from QA sessions with institute representatives both
              in our onshore and offshore offices.
            </p>
          </div>
        </div>
      </div>
      {/* 5rd section */}

      {/* 6th Section */}
      {/* <div className="bg-[#f4f9fd] py-16 px-4 sm:px-6 lg:px-20 relative">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Study at a World Renowned Institution
          </h2>
          <p className="text-lg font-medium text-[#f16f22] mt-2">
            with Expert Guidance
          </p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          navigation={{
            prevEl: ".custom-swiper-prev",
            nextEl: ".custom-swiper-next",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="relative pb-8"
        >
          {universityData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 text-center h-full flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4">{item.country}</h3>
                <div className="space-y-4">
                  {item.logos.map((logo, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-2 rounded-md shadow-sm"
                    >
                      <img
                        src={logo}
                        alt={`Logo ${i}`}
                        className="w-full h-8 object-contain mx-auto"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-600 mt-4">
                  and Much More
                </p>
              </div>
            </SwiperSlide>
          ))}

          
          <div className="custom-swiper-prev absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden xl:block">
            <button className="w-10 h-10 bg-[#f16f22] rounded-full flex items-center justify-center shadow-md hover:bg-[#d9540f] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="custom-swiper-next absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden xl:block">
            <button className="w-10 h-10 bg-[#f16f22] rounded-full flex items-center justify-center shadow-md hover:bg-[#d9540f] transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div> */}
      {/* 6th Section */}

      {/* 7th Section */}
      <SimpleSteps />
      {/* 7th Section */}

      {/* 8th Section */}
      <SuccessStories />
      {/* 8th Section */}

      {/* 9th section */}
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

          <p className="text-center text-[#000] mt-12 text-base sm:text-lg">
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
          <ConsultationModal show={showModal} onClose={handleCloseModal} />
        </div>
      </section>
      {/* 9th section */}
    </>
  );
};

export default AdmissionSupport;
