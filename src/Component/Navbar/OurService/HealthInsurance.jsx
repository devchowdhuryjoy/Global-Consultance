import { FiArrowRight } from "react-icons/fi";
import { FaExclamation } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import ConsultationModal from "../../../Modal/ConsultationModal";

const HealthInsurance = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  {
    /* 4rd section */
  }

  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const faqItems = [
    {
      question: "What are the key documents required for a student visa?",
      answer:
        "Entry requirements vary by course and university but typically include academic qualifications and English proficiency (IELTS/PTE/TOEFL).",
    },
    {
      question: "How long does the visa processing take?",
      answer:
        "Visa processing time varies depending on the country and application type.",
    },
    {
      question: "Does Global Routeway provide assistance with visa interviews?",
      answer:
        "Yes, Global Routeway offers guidance and support for visa interview preparation.",
    },
    {
      question: "Can I apply for a visa extension after my studies?",
      answer:
        "Yes, in many countries you can apply for a visa extension post-study.",
    },
  ];

  {
    /* 4rd section */
  }

  //   9th section

  const documents = [
    "Proof of enrollment like college admission letter",
    "Copies of Visa and Passport",
    "Travel Itinerary",
    "Health Declaration",
    "Personal Identification documents like passport",
    "Academic documents",
    "Financial proof",
  ];
  //   9th section

  //   10th section

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

  //   10th section

  //   11th section
  const faqData = [
    {
      question: "How Do I Choose A Health Insurance?",
      answer:
        "When selecting a health insurance plan, review the specific student health cover requirements of your chosen country and university. Compare plans based on benefits, coverage amounts, and exclusions. Carefully read terms for details like waiting periods and exclusions to make an informed decision on the most suitable plan for your needs.",
    },
    {
      question:
        "Is There Any Difference Between Health Insurance and A Mediclaim Policy?",
      answer: "",
    },
    {
      question: "What is the right time to buy a Health Insurance Plan?",
      answer: "",
    },
    {
      question: "How to Select the Best Health Insurance Plan?",
      answer: "",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  //   11th section

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
      {/* 1st Section */}
      <div className="bg-white">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col-reverse lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block bg-[#ffe4e0] text-[#f16f22] px-4 py-1 rounded font-semibold text-sm">
              Health Insurance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#252364]">
              Overseas Health Insurance for Study Abroad Aspirants
            </h2>
            <p className="text-gray-600 text-lg">
              Discover various options that will help you take care of your
              health without breaking the bank.
            </p>
            <button
              onClick={handleOpenModal}
              className="mt-4 inline-flex items-center justify-center bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              Book a Free Consultation →
            </button>

            {/* ✅ Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
            <img
              src="/study3.png" // Replace with your image path
              alt="Consultation"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Partner Logos Section */}
        <div className="bg-[#f9fbfc] py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Our Partners</h3>
            <div className="flex flex-wrap items-center justify-between gap-6">
              <img
                src="src/assets/logo.png"
                alt="nib"
                className="h-10 object-contain"
              />
              <img
                src="src/assets/logo.png"
                alt="medibank"
                className="h-10 object-contain"
              />
              <img
                src="src/assets/logo.png"
                alt="iman"
                className="h-10 object-contain"
              />
              <img
                src="src/assets/logo.png"
                alt="bupa"
                className="h-10 object-contain"
              />
              <img
                src="src/assets/logo.png"
                alt="ahm"
                className="h-10 object-contain"
              />
              <img
                src="src/assets/logo.png"
                alt="cbhs"
                className="h-10 object-contain"
              />
              <img
                src="src/assets/logo.png"
                alt="allianz"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 1st Section */}

      {/* 2nd section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT TEXT SECTION */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-6">
              What Is Overseas Student Health Insurance?
            </h2>
            <p className="text-gray-700 mb-4">
              If you are contemplating studying abroad, you should be aware that
              some countries may insist on student health insurance coverage.
              Even if they don’t, considering the exorbitant medical costs in
              foreign countries, having student health cover is prudent to avoid
              financial burdens while studying abroad. These health insurance
              plans typically cover pre and post-hospitalisation expenses,
              prescription medicines, and the cost of surgeries.
            </p>
            <p className="text-gray-700 mb-4">
              Students who purchase health plans from foreign countries while
              studying abroad will pay heavy premiums. Getting coverage under
              the best health insurance plans in India can be more economical.
            </p>
            <p className="text-gray-700">
              So, students studying abroad or planning to study abroad should
              have a student health cover to avoid additional financial burdens.
            </p>
          </div>

          {/* RIGHT FORM SECTION */}
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
      {/* 2nd section */}

      {/* 3rd section */}
      <div className="bg-[#e9f8fc] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-4">
            Types of Health Insurance Plans
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            Funding medical emergencies can be a huge financial burden while
            studying abroad. To be worry-free, knowing that your health and
            well-being are taken care of, you should purchase health insurance
            plans while studying abroad. There are two types of health plans,
            and they are:
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* OSHC Card */}
            <div className="bg-white rounded-xl shadow-md p-6 text-left">
              <h3 className="text-lg font-semibold text-[#f16f22] mb-3">
                Overseas Student Health Cover (OSHC)
              </h3>
              <p className="text-gray-700">
                Overseas Student Health Cover is a health insurance plan
                designed for international students studying abroad. It is a
                complete coverage for expenses incurred comprising pre and
                post-hospitalisation coverage, and prescription medicines. This
                student health cover ensures that the students have access to
                quality healthcare services in their host country. It offers
                peace of mind and financial security against any unexpected
                medical costs that may arise. This is a mandatory requirement by
                some universities and visa regulations. It reassures the
                students and their families that their health needs are taken
                care of while they focus on their education.
              </p>
            </div>

            {/* OVHC Card */}
            <div className="bg-white rounded-xl shadow-md p-6 text-left">
              <h3 className="text-lg font-semibold text-[#f16f22] mb-3">
                Overseas Visitor Health Cover (OVHC)
              </h3>
              <p className="text-gray-700">
                Overseas Visitor Health Cover is designed especially for
                visitors to Australia who cannot access the Australian public
                Medicare System for any hospital or medical costs. The
                eligibility criteria, premiums, and benefits for various health
                insurance plans under OVHC differ. Most plans, however, cover
                hospital expenses and a portion of the doctor’s fees. To avail
                of the services of dentists, physiotherapists, and optometrists,
                you can purchase a General Treatment Cover in addition to OVHC.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd section */}

      {/* 4rd section */}
      <div className="bg-[#fafafa] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT FAQ */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-4">
              Benefits of Overseas Student Health Cover
            </h2>
            <p className="text-gray-700 mb-6">
              OVHC is mandatory to comply with visa regulations. Apart from
              that, several other benefits make it a requirement for students
              studying abroad. They are:
            </p>

            {/* Accordion */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full text-left text-[#f16f22] font-medium text-lg"
                  >
                    {item.question}
                    <span className="text-black text-xl">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <p className="mt-2 text-gray-600 text-sm">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                onClick={handleOpenModal}
                className="bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-3 rounded transition duration-300"
              >
                Book a Free Consultation →
              </button>

              {/* ✅ Modal */}
              <ConsultationModal show={showModal} onClose={handleCloseModal} />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* background decoration */}
            <div className="absolute -bottom-6 left-0 w-full h-full flex gap-2 z-0">
              <div className="bg-[#bfb8f1] w-[20%] h-[80%] rounded-md"></div>
              <div className="bg-[#ccc4f3] w-[20%] h-[80%] rounded-md"></div>
              <div className="bg-[#e4e2f8] w-[20%] h-[80%] rounded-md"></div>
              <div className="bg-transparent w-[40%] h-[80%]"></div>
            </div>
            <img
              src="/university.jpg" // Replace with your actual image path
              alt="Benefits of Health Cover"
              className="relative z-10 rounded-xl border border-[#252364] max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* 4rd section */}

      {/* 5th section */}
      <div className="bg-[#252364] text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* LEFT Image with Decorations */}
          <div className="relative w-full">
            <div className="relative z-10 rounded-xl overflow-hidden">
              <img
                src="/study6.jpg" // Replace with your image path
                alt="Doctor"
                className="rounded-xl border border-white w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Shapes */}
            <div className="absolute -bottom-6 left-0 flex gap-2 z-0">
              <div className="w-20 h-8 bg-[#151c8b] rotate-[-10deg] rounded-sm"></div>
              <div className="w-20 h-8 bg-[#4d50a1] rotate-[-10deg] rounded-sm"></div>
              <div className="w-20 h-8 bg-[#807fbb] rotate-[-10deg] rounded-sm"></div>
            </div>
          </div>

          {/* RIGHT Text */}
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Why Do You Need a Student Health Cover?
            </h2>
            <p className="text-gray-100 mb-4">
              The student health cover is needed for various reasons:
            </p>
            <p className="text-gray-100 mb-4">
              The primary reason is that the Department of Immigration and
              Citizenship requires that anyone residing in Australia on a
              student visa are required to have an Overseas Health Cover.
            </p>
            <p className="text-gray-100 mb-4">
              Overseas Student Health Insurance (OSHC) covers medical expenses
              such as hospitalisation, surgeries, doctor's fees, and
              prescription medicines, reducing the financial burden and ensuring
              access to quality healthcare abroad.
            </p>
            <p className="text-gray-100 mb-4">
              Regular medical checkups are necessary to maintain robust health.
              OSHC covers the costs incurred for regular doctor visits, lab
              tests, and any medical emergencies that may arise. You can seek
              medical help without hesitation if you have student health cover.
            </p>
            <p className="text-gray-100 mb-4">
              If you have an existing medical issue which needs regular
              intervention, having the best health insurance plan will help.
              Some student health insurance plans offer coverage for
              pre-existing conditions after a waiting period, and you can get
              constant medical attention.
            </p>
            <p className="text-gray-100 mb-6">
              Treating accident injuries results in substantial medical bills.
              OSHC provides coverage for accidental injuries, whether minor or
              major, ensuring you get healthcare promptly.
            </p>
            <button
              onClick={handleOpenModal}
              className="bg-[#f16f22] hover:bg-[#fff] hover:text-[#252364] text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              Book a Free Consultation →
            </button>

            {/* ✅ Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>
        </div>
      </div>
      {/* 5th section */}

      {/* 6th section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-4">
            How to Choose the Best Health Insurance Plan?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            Buying the best health insurance plan you should not forget before
            you fly abroad for studies. Choosing the best plan from the host of
            policies under the OSHC can be overwhelming. But considering the
            following can help you shortlist the plans.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#fdf2dc] rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-[#f16f22] mb-2">
              University and Country Requirements
            </h3>
            <p className="text-gray-700 text-sm">
              Each country and university may have different requirements
              concerning the OSHC. Check and ask about it before you decide to
              purchase a plan. Most countries insist on OSHC before commencing
              the course. The requirements may also vary depending on the type
              of visa issued.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#dbf0f7] rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-[#f16f22] mb-2">
              Compare Different Plans
            </h3>
            <p className="text-gray-700 text-sm">
              After you are clear about the insurance specifications, you
              research and compare the plans available. You should consider the
              coverage offered as well as the exclusions. Also, consider the
              amount that goes into the benefits. Most plans offer coverage for
              pre and post-hospitalisation expenses, doctor’s visits, medical
              checkups, evacuation, repatriation, prescription medicines, etc.
              Seek the advice of any insurance agent if necessary.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#e4f8ee] rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-[#f16f22] mb-2">
              Read The Fine Print
            </h3>
            <p className="text-gray-700 text-sm">
              Read between the lines to avoid surprises. Look for what is
              excluded, waiting period, hidden limits, etc., that are normally
              mentioned in the terms and conditions.
            </p>
          </div>
        </div>
      </div>
      {/* 6th section */}

      {/* 7th section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left Text Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-6">
              How to Buy an Online Health Insurance Plan?
            </h2>
            <p className="text-gray-700 mb-4">
              You can buy a health insurance plan online by accessing the health
              insurance provider’s official website within a few minutes.
              However, for more clarity about the best insurance providers in
              your host country, you can take the assistance of Global Routeway.
            </p>
            <p className="text-gray-700 mb-6">
              Global Routeway coordinates with the best insurance providers
              across the globe. Whichever country you choose to study abroad,
              Global Routeway will help you get the best insurance providers who
              offer:
            </p>

            {/* Bullet Points */}
            <ul className="mb-6 space-y-3 font-semibold text-[#252364]">
              <li>Exclusive benefits</li>
              <li>Quick turnaround</li>
              <li>Value for money</li>
            </ul>

            <p className="text-gray-700 mb-6">
              The team will help you compare policies and get the most relevant
              and affordable student health coverage for you.
            </p>

            {/* Button */}
            <button
              onClick={handleOpenModal}
              className="bg-[#f16f22] hover:bg-[#252364] transition text-white px-6 py-3 rounded flex items-center gap-2 font-semibold"
            >
              Book a Free Consultation <FiArrowRight />
            </button>

            {/* ✅ Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/study1.jpg"
              alt="Doctor consultation"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* 7th section */}

      {/* 8th section */}
      <div className="bg-[#ffeceb] py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left image with background shapes */}
          <div className="relative">
            <div className="absolute bottom-0 left-0 z-0 flex space-x-2">
              <div className="w-20 h-6 bg-[#7a6bf5] rotate-[15deg]"></div>
              <div className="w-20 h-6 bg-[#d0c9f5] rotate-[15deg]"></div>
            </div>
            <img
              src="/study4.jpg"
              alt="Consultation"
              className="relative z-10 w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-6">
              Health Insurance Plan Eligibility Criteria
            </h2>
            <p className="text-gray-800 mb-4">
              As per the visa regulations and specific university/country
              requirements, students going to foreign countries for studies
              should have a student health cover. This will take care of their
              healthcare expenses and provide access to quality treatments
              during their stay abroad. They have to comply with the following
              eligibility criteria to purchase the health insurance plan.
            </p>

            <ul className="text-gray-800 space-y-3 list-disc pl-5 mb-6">
              <li>
                Should have a student visa for the duration of their stay in the
                foreign country.
              </li>
              <li>
                They should have an admission letter for a full-time course
                study from an approved University.
              </li>
              <li>
                The student health cover should be for the entire duration of
                their stay in the country.
              </li>
              <li>
                The age criteria vary with the insurance provider. The student
                should meet the age criteria specified by the respective
                insurance company.
              </li>
              <li>
                If any family member is accompanying the student, insurance
                coverage will be required for the partner as well.
              </li>
            </ul>

            <p className="text-gray-800 mb-6">
              Our team will help you get the most relevant and affordable
              student health coverage for you.
            </p>

            <button
              onClick={handleOpenModal}
              className="mt-4 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#252364] transition duration-300 flex items-center"
            >
              Book a Free Consultation →
            </button>

            {/* ✅ Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>
        </div>
      </div>
      {/* 8th section */}

      {/* 9th section */}
      <div className="bg-[#fafafa] py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#252364] mb-4">
            Documents Required to Buy Health Insurance Plan
          </h2>
          <p className="text-gray-700 mb-8 text-sm sm:text-base">
            The documents required to buy a health insurance plan are:
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[31%] flex items-center bg-white rounded-xl shadow-md px-5 py-3 text-[#252364] font-semibold text-sm sm:text-base"
              >
                <div className="w-6 h-6 bg-[#f44336] text-white flex items-center justify-center rounded-full mr-3 text-xs">
                  {index + 1}
                </div>
                {doc}
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-10 mb-6 text-sm sm:text-base">
            The team will help you compare policies and get the most relevant
            and affordable student health coverage for you.
          </p>

          <button
            onClick={handleOpenModal}
            className="mt-2 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#252364] transition duration-300"
          >
            Book a Free Consultation →
          </button>

          {/* ✅ Modal */}
          <ConsultationModal show={showModal} onClose={handleCloseModal} />
        </div>
      </div>

      {/* 9th section */}

      {/* 10th section */}
      <div className="relative py-14 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          22,000+ Success Stories{" "}
          <span className="text-blue-700">Your could be the next.</span>
        </h2>

        {/* Custom Navigation Buttons */}
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
                    src="src/assets/Google-Logo.png"
                    alt="Google Reviews"
                    className="w-24 mt-2"
                  />
                  <div className="text-yellow-500 text-xs mt-1">★★★★★</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 10th section */}

      {/* 11th section */}
      <div className="bg-[#f6f4ff] py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#252364] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-left">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-[#fff5eb] rounded-xl p-6 cursor-pointer shadow-sm"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-[#f16f22] font-semibold text-base sm:text-lg">
                    {item.question}
                  </h3>
                  <span className="text-[#252364]">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {openIndex === index && item.answer && (
                  <p className="mt-4 text-gray-700 text-sm sm:text-base">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-12 mb-6 text-sm sm:text-base">
            Our experts are waiting to help you take the next steps towards your
            dream.
          </p>

          <button
            onClick={handleOpenModal}
            className="bg-[#f16f22] hover:bg-[#252364] transition text-white font-semibold px-6 py-3 rounded"
          >
            Book a Free Consultation →
          </button>

          {/* ✅ Modal */}
          <ConsultationModal show={showModal} onClose={handleCloseModal} />
        </div>
      </div>
      {/* 11th section */}
    </>
  );
};

export default HealthInsurance;
