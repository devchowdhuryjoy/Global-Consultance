import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import SuccessStories from "../../SuccessStories/SuccessStories";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  // 2nd section
  const courses = [
    {
      title: "Accounting",
      image: "/Accounting.jpeg",
    },
    {
      title: "Nursing",
      image: "/Nurse.jpg",
    },
    {
      title: "Engineering",
      image: "/engineering.jpeg",
    },
    {
      title: "Business Analytics",
      image: "/business.jpg",
    },
    {
      title: "Food Science",
      image: "/FoodandHospital.jpeg",
    },
  ];
  const getPath = (title) => {
    switch (title.toLowerCase()) {
      case "nursing":
        return "/nursing";
      case "accounting":
        return "/accounting";
      case "engineering":
        return "/engineering";
      case "food science":
        return "/hospitality";
      case "business analytics":
        return "/business-studies";
      default:
        return "/";
    }
  };
  // 2nd section

  //   5th section
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

  //   5th section

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

      const response = await fetch(`${BASE_URL}/register`, {
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
      <div className="bg-gradient-to-r from-black via-[#064b4e] to-[#24b2c3] text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block bg-[#fff] text-[#f16f22] text-sm font-semibold px-4 py-1 rounded mb-6">
            Services
          </div>

          {/* Title */}
          <h1 className="text-[#f16f22] text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug sm:leading-snug">
            Learn everything about Studying <br className="hidden sm:block" />
            Your Preferred Course Abroad!
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-white/90 ">
            Explore various factors that you need to consider before you choose
            your preferred course
          </p>
        </div>
      </div>
      {/* 1st section */}

      {/* 2nd section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => {
                window.scrollTo(0, 0); // 🔥 Scrolls to top
                navigate(getPath(course.title)); // 🔥 Navigate to page
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-[#252364]">
                  {course.title}
                </h3>
                <p className="text-[#f16f22] text-sm font-medium mt-1">
                  Learn More &gt;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 2nd section */}

      {/* 3rd section */}
      <div className="bg-[#e6f6fa] py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side: Info List */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#f16f22] mb-6">
              Who Can Benefit from Our Counselling Services?
            </h2>
            <ul className="space-y-6">
              {[
                "High school graduates planning to start their tertiary education in Australia.",
                "University students seeking course or provider changes",
                "Diploma/TAFE students looking to pathway into university degrees",
                "Parents and guardians seeking professional guidance for their children’s future",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  {/* <span className="text-[#252364] text-2xl font-bold mt-1">
                    /
                  </span> */}
                  <span className="mt-1 w-2 h-5 bg-[#f16f22] rotate-[20deg] rounded-sm block" />
                  <p className="text-black-500 text-base">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Form */}
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
      {/* 3rd section */}

      {/* 5th section */}
      
      <SuccessStories />

      {/* 5th section */}
    </>
  );
};

export default Course;
