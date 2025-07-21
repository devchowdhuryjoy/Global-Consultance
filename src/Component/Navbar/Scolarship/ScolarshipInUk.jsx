import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import ConsultationModal from "../../../Modal/ConsultationModal";

const ScolarshipInUk = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // 2nd section
  const benefits = [
    "100% Free Scholarship Assistance – No hidden fees",
    "Exclusive University Partner Scholarships – Save up to 50% on tuition fees",
    "Personalized Scholarship Matching – Based on your academic profile",
    "Quick & Hassle-Free Application Process – Expert guidance at every step",
    "High Success Rate – Thousands of students placed in top Ukn universities",
  ];
  // 2nd section

  // 3rd section
  const scholarships = [
    {
      title: "Merit-Based Scholarships",
      description: "For students with outstanding academic achievements",
    },
    {
      title: "Need-Based Scholarships",
      description:
        "Financial aid for eligible students based on their economical situation",
    },
    {
      title: "Destination Uk Scholarships",
      description:
        "Government-funded support for students studying in regional areas",
    },
    {
      title: "University-Specific Scholarships",
      description: "Exclusive grants and scholarships from Ukn universities",
    },
    {
      title: "Research & Postgraduate Funding",
      description:
        "Provided to students who are pursuing master’s or research degrees",
    },
  ];
  // 3rd section

  {
    /* 4th section */
  }
  const scholarship = [
    {
      name: "La Trobe University Scholarship",
      funding: "Up to 30% fee discount",
      eligibility: "Indian SSC 60–70% (subject-based); IELTS 6.5 (min 6.0)",
      campuses:
        "Bundoora, Bendigo, Albury-Wodonga, Mildura, Shepparton, Sydney",
    },
    {
      name: "University of Wollongong Scholarship",
      funding: "Up to 30% fee discount",
      eligibility:
        "Year 12: ISC/CBSE 65%, State Board 70%; IELTS 6.0 (UG), 6.5 (PG)",
      campuses: "Wollongong, Sydney, South Western Sydney",
    },
    {
      name: "Federation University International Scholarship",
      funding: "Up to 20% fee discount",
      eligibility: "Indian SSC 60–70% (subject-based); IELTS 6.5 (min 6.0)",
      campuses: "Ballarat, Berwick, Gippsland, Melbourne (City), Wimmera",
    },
    {
      name: "Victoria University Scholarship",
      funding: "Up to 30% fee discount",
      eligibility: "Ukn Year 12 equivalent; IELTS 6.0 (UG), 6.5 (PG)",
      campuses:
        "VU City Campus, Footscray Park, St Albans, Ballarat, Sunshine, Brisbane, Sydney, Werribee",
    },
    {
      name: "Torrens University Scholarship (South East region)",
      funding: "Up to 12% of tuition fees",
      eligibility: "Ukn Year 12 equivalent; IELTS 6.5 (min 6.0)",
      campuses: "Sydney, Melbourne, Brisbane, Adelaide, Blue Mountains, China",
    },
    {
      name: "Torrens University Scholarship (Brisbane campuses 2025)",
      funding: "Up to 20% of tuition fees",
      eligibility: "Ukn Year 12 equivalent; IELTS 6.5 (min 6.0)",
      campuses: "Sydney, Melbourne, Brisbane, Adelaide, Blue Mountains, China",
    },
  ];

  // 4th section

  // 7th section
  const steps = [
    {
      step: "Step 1",
      text: "Get your profile assessed & Receive Recommendations from Expert Counsellors",
      img: "/study1.jpg", // replace with your actual image path
    },
    {
      step: "Step 2",
      text: "Shortlist your preferred institutions and courses based on your aspirations",
      img: "/study6.jpg",
    },
    {
      step: "Step 3",
      text: "Complete the application process & secure scholarships with our comprehensive assistance",
      img: "/study3.png",
    },
    {
      step: "Step 4",
      text: "Receive the offer letter from the institution & complete the necessary steps to finalize your seat",
      img: "/study4.jpg",
    },
    {
      step: "Step 5",
      text: "Apply & prepare for visa interviews. Our team will guide you at every single step of the way.",
      img: "/university.jpg",
    },
    {
      step: "Step 6",
      text: "Prepare for take-off! Get ready to board the flight and begin your first day at the institution abroad!",
      img: "/award1.jpg",
    },
  ];
  // 7th section

  // 8th section
  const reviews = [
    {
      name: "Nashira",
      quote: `“I'm truly thankful to Global Routways, especially my counselor Anika Anjum Nabila, for their amazing support in helping me get my AUS visa. The entire process went very smoothly due to their expert guidance during this transitional period (March–April 2025) of the Ukn visa, where the branch manager personally spent time counseling me.Global Routways was professional, quick, and reliable every step of the way. Nabila Apu gave me personalized help and made sure everything was done right.
  
      I highly recommend Global Routways to any student chasing their dream & one of the most expert counselor Anika Anjum Nabila. Thank you for helping make mine come true!”`,
    },
    {
      name: "Zihad Hossain",
      quote: `“Alhamdulillah! I got my Ukn visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.
  
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
      quote: `“Alhamdulillah! I got my Ukn visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.
  
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

  // 8th section

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
      <div className="bg-[#e6f6fc] py-12 px-4 sm:px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Left Text Content */}
          <div>
            <span className="inline-block bg-[#ffe3dd] text-[#f16f22] font-medium px-4 py-1 rounded mb-4">
              Scholarships
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252364] mb-4 leading-snug">
              Study in Uk with Scholarships – <br className="hidden sm:block" />
              <span className="text-black">Save big on Tuition Fees</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Find the best scholarships in Uk and apply with Global Routeway
              Global’s expert guidance – 100% Free Assistance
            </p>

            <button
              onClick={handleOpenModal}
              className="mt-2 px-6 py-3 bg-[#f16f22] text-white font-semibold rounded hover:bg-[#252364] transition duration-300 flex items-center justify-center"
            >
              Book a FREE Consultation →
            </button>

            {/* ✅ Modal */}
            <ConsultationModal show={showModal} onClose={handleCloseModal} />
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/src/assets/images/Uk.jpg" // Replace with your actual image path
                alt="Study in the Uk"
                className="w-full object-cover"
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
      {/* 1st section */}

      {/* 2nd section */}
      <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
          {/* Left Side: Info Cards and Consultation Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="bg-white px-4 py-16 sm:px-6 lg:px-20">
              <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#252364] mb-8">
                  Why Apply for Scholarships in Uk Through Global Routways?
                </h2>

                {/* Benefits List */}
                <ul className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-5 bg-[#252364] rotate-[20deg] rounded-sm block" />
                      <p className="text-base text-[#111] font-medium">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Highlight Box */}
                <div className="mt-12 bg-[#fff2ed] rounded-xl p-6 shadow-md flex items-start gap-4">
                  <img
                    src="src/assets/logo.png" // replace with your local emoji/image
                    alt="Did you know"
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="font-semibold text-[#252364] mb-1">
                      Did you know?
                    </p>
                    <p className="text-[#333] text-[15px]">
                      Students who apply early will have higher chances of
                      securing a scholarship. They are also most likely to get a
                      bigger scholarship value.
                    </p>
                  </div>
                </div>
              </div>
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
                  <option value="Hungary">Hungary</option>
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
      <div className="bg-[#f5f9fc] py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[#252364] mb-10">
          Types of Scholarships Available in Uk
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {scholarships.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <h3 className="text-[#f16f22] text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* 3rd section */}

      {/* 4th section */}

      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-[#252364] mb-2">
            Top Scholarships for International Students in Uk
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            New scholarships are added regularly. Check the Latest Updates
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-sm">
              <thead className="bg-[#ffeee6] text-left">
                <tr>
                  <th className="py-3 px-4 font-semibold text-[#252364]">
                    Scholarship Name
                  </th>
                  <th className="py-3 px-4 font-semibold text-[#252364]">
                    Funding Amount
                  </th>
                  <th className="py-3 px-4 font-semibold text-[#252364]">
                    Eligibility
                  </th>
                  <th className="py-3 px-4 font-semibold text-[#252364]">
                    Campuses
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarship.map((item, idx) => (
                  <tr key={idx} className="border-t border-gray-200">
                    <td className="py-3 px-4 text-[#252364]">{item.name}</td>
                    <td className="py-3 px-4 text-gray-700">{item.funding}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {item.eligibility}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{item.campuses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#f9f9f9] py-10 px-4 text-center">
          <p className="text-gray-500 text-base mb-4">
            Not sure which scholarship matches your profile?
          </p>
          <button
            onClick={handleOpenModal}
            className="px-6 py-2 border border-[#f16f22] text-[#f16f22] font-medium rounded-full hover:bg-[#f16f22] hover:text-white transition duration-300"
          >
            Book a FREE Consultation
          </button>

          {/* ✅ Modal */}
          <ConsultationModal show={showModal} onClose={handleCloseModal} />
        </div>
      </div>

      {/* 4th section */}

      {/* 5th section */}
      <div className="bg-[#f9f9f9] py-12 px-4 text-center">
        {/* Table */}
        <div className="max-w-4xl mx-auto shadow-md rounded overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fff2ec] text-[#333] text-sm sm:text-base">
                <th className="px-4 py-3 font-semibold">Field of Work</th>
                <th className="px-4 py-3 font-semibold">
                  Average Salary (AUD/Year) (approx.)
                </th>
              </tr>
            </thead>
            <tbody className="text-[#333] text-sm sm:text-base">
              <tr className="border-t">
                <td className="px-4 py-3">IT & Tech</td>
                <td className="px-4 py-3">AUD 60,000 - 80,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Business & Management</td>
                <td className="px-4 py-3">AUD 65,000 - 85,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Health & Medicine</td>
                <td className="px-4 py-3">AUD 70,000 - 90,000</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Engineering</td>
                <td className="px-4 py-3">AUD 65,000 - 88,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Below */}
        <div className="mt-10">
          <p className="text-gray-500 mb-4 text-sm sm:text-base">
            Not sure which scholarship matches your profile?
          </p>
          <button
            onClick={handleOpenModal}
            className="px-6 py-2 border border-[#f16f22] text-[#f16f22] font-medium rounded-full hover:bg-[#f16f22] hover:text-white transition duration-300"
          >
            Book a FREE Consultation
          </button>

          {/* ✅ Modal */}
          <ConsultationModal show={showModal} onClose={handleCloseModal} />
        </div>
      </div>
      {/* 5th section */}

      {/* 6th section */}
      <div className="bg-[#f9f9f9] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <img
              src="study6.jpg" // replace with your image path
              alt="Students"
              className="max-w-full h-auto z-10 relative"
            />
            <div className="absolute w-3/4 h-3/4 bg-[#e0dfff] rounded-lg -z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-3"></div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#252364] mb-6">
              Who Can Apply? (Eligibility Criteria)
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Excellent Academic Record",
                  desc: "Minimum GPA requirement varies by university",
                },
                {
                  title: "English Proficiency",
                  desc: "IELTS, PTE, or TOEFL scores required",
                },
                {
                  title: "Extracurricular Achievements",
                  desc: "Leadership, research, community service and more",
                },
                {
                  title: "Offer Letter from the University",
                  desc: "Required before scholarship disbursement",
                },
                {
                  title: "Country-Specific Eligibility",
                  desc: "Available only to students from select regions",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f4f7fb] p-4 rounded-xl shadow-sm border hover:shadow-md transition"
                >
                  <h3 className="font-semibold text-[#252364] text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 text-center">
              <p className="text-gray-500 mb-4 text-sm sm:text-base">
                Not sure which scholarship matches your profile?
              </p>
              <button
                onClick={handleOpenModal}
                className="px-6 py-2 border border-[#f16f22] text-[#f16f22] font-medium rounded-full hover:bg-[#f16f22] hover:text-white transition duration-300"
              >
                Book a FREE Consultation
              </button>

              {/* ✅ Modal */}
              <ConsultationModal show={showModal} onClose={handleCloseModal} />
            </div>
          </div>
        </div>
      </div>
      {/* 6th section */}

      {/* 7th section */}
      <div className="bg-[#f3f7fb] py-14 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#252364] mb-2">
            Study Abroad in just{" "}
            <span className="text-[#252364]">6 Simple Steps</span>
          </h2>
          <p className="text-gray-500 mb-10 text-sm sm:text-base">
            With Global Routeway Global by your side, you can make the whole
            process a breeze!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <div className="relative z-10">
                  <img
                    src={item.img}
                    alt={item.step}
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                </div>

                <span className="bg-[#f16f22] text-black text-sm font-medium px-4 py-1 rounded-full mb-2">
                  {item.step}
                </span>

                <p className="text-sm text-gray-600">{item.text}</p>

                {/* Decorative background box */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#e4e7f8] rotate-3 -z-0 rounded-xl opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 7th section */}

      {/* 8th section */}
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
      {/* 8th section */}

      {/* 9th section */}
      <div className="bg-[#f3f7fb] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#252364] mb-6">
            About Global Routeway
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-10">
            Beginning in 2006, Global Routeway Global’s expertise in student
            migration consultancy evolved from a single Melbourne office to a
            multinational presence, spanning Uk, Bangladesh, Sri Lanka, and
            India. We now proudly represent international educational
            institutions, consistently turning students’ dreams into their
            reality.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">
                22,000+
              </p>
              <p className="text-sm text-gray-700">Students Assisted</p>
            </div>
            <div>
              <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">
                550+
              </p>
              <p className="text-sm text-gray-700">
                Institutions across
                <br />
                11 Countries
              </p>
            </div>
            <div>
              <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">
                18+
              </p>
              <p className="text-sm text-gray-700">Years of Experience</p>
            </div>
            <div>
              <p className="text-[#f16f22] text-xl sm:text-2xl font-bold">9</p>
              <p className="text-sm text-gray-700">
                Offices across
                <br />
                the Globe
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 9th section */}
    </>
  );
};

export default ScolarshipInUk;
