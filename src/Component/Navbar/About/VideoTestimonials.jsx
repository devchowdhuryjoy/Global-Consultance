import React, { useEffect, useState } from "react";
import googleLogo from "../../../assets/Google-Logo.png";
import userMap from "../../../assets/map1.jpg";
import ContactUs from "../../Contact Us/ContactUs";
import { FaCrown } from "react-icons/fa";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../../Api BaseUrl/ImageBaseUrl";

const VideoTestimonials = () => {
  // const rawVideos = [
  //   { url: "https://www.youtube.com/shorts/imoKV4RqMTM" },
  //   { url: "https://www.youtube.com/shorts/S3eF3HfpEYU" },
  //   { url: "https://www.youtube.com/shorts/aby-fBeq_Y0" },
  // ];

  // const videos = rawVideos.map((video) => {
  //   const videoId = video.url.split("/").pop();
  //   return {
  //     url: `https://www.youtube.com/embed/${videoId}`,
  //   };
  // });

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}videos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const embeddedVideos = data.map((video) => {
          const id = video.url.includes("shorts")
            ? video.url.split("/").pop()
            : video.url.split("v=")[1];
          return {
            ...video,
            url: `https://www.youtube.com/embed/${id}`,
          };
        });
        console.log("Embedded URLs:", embeddedVideos);
        setVideos(embeddedVideos);
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  const reviews = [
    {
      name: "Abu Bakar Siddiq",
      content: `My journey until getting the Visa wasn't smooth at the beginning. However, when I come to Global Routeway, all confusion moved away. Thank Global Routeway from the bottom of my heart. I will be forever grateful for your dedicated team regarding SOP and others. I will highly recommend your services to anyone in need of visa assistance, knowing they will be in the best hands.`,
    },
    {
      name: "Shourav Islam Tonmoy",
      content: `Alhamdulillah! My visa request for Australia was accepted yesterday. Without Global Routeway Global, the adventure would not have been possible at all. They didn't let me down, so I maintained having faith in them. I will certainly never forget the level of professionalism they demonstrated and their unwavering support throughout my journey...`,
    },
    {
      name: "Tanvir Ahmed Shishir",
      content: `I got a visa on 4th January within 7 days through Global Routeway Global. I think this is the best leading agency in Bangladesh for students. An amazing organisation with a bunch of team members who are extremely helpful throughout the whole process. Strongly recommended for students needing help with applying abroad...`,
    },
    {
      name: "Anonymous",
      content: `I would highly recommend Global Routeway Global for their outstanding and timely service. They handled my file with the utmost care and kept me informed throughout the entire process. If anyone is planning to study in Australia and needs proper guidance, this is the place to visit.`,
    },
  ];

  const achievements = [
    { value: "22,000+", label: "Students Assisted" },
    { value: "550+", label: "Partner Institutions" },
    { value: "96.7%", label: "Visa Grants" },
    { value: "18", label: "Years of Expertise" },
  ];

  const locations = [
    { name: "USA", offices: "4 Offices", top: "34%", left: "60%" },
    { name: "Uk", offices: "2 Offices", top: "39%", left: "14%" },
    { name: "Canada", offices: "1 Office", top: "46%", left: "27%" },
    { name: "Australia", offices: "4 Offices", top: "75%", left: "44%" },
  ];

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

  const [reviewstwo, setReviewstwo] = useState([]); // ✅ renamed here

  useEffect(() => {
    fetch(`${BASE_URL}reviewtwoget`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        console.log("API Data:", data);
        setReviewstwo(data); // ✅ renamed here
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <>
      {/* <section className="bg-[#e8f7fd] py-16 px-4 md:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#252364]">
            22,000+ Happy Clients, Worldwide!
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
            Hear how we have made a difference in helping them achieve their
            aspirations.
          </p>
        </div>

        
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-[#252364] relative inline-block">
            <span className="border-t-2 border-[#252364] w-16 inline-block absolute -top-3 left-0 md:-left-20"></span>
            Video Testimonials
            <span className="border-t-2 border-[#252364] w-16 inline-block absolute -top-3 right-0 md:-right-20"></span>
          </h3>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white"
            >
              <iframe
                src={video.url}
                title={`Testimonial Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80"
              ></iframe>
            </div>
          ))}
        </div>

      </section> */}

      <section className="bg-[#e8f7fd] py-16 px-4 md:px-8">
        {/* Top Title */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#fff] text-[#f16f22] px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f16f22]">
            22,000+ Happy Clients, Worldwide!
          </h2>
          <p className="mt-4 text-black max-w-2xl mx-auto text-base md:text-lg">
            Hear how we have made a difference in helping them achieve their
            aspirations.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-[#f16f22] relative inline-block">
            <span className="border-t-2 border-black-500 w-16 inline-block absolute -top-3 left-0 md:-left-20"></span>
            Video Testimonials
            <span className="border-t-2 border-black-500 w-16 inline-block absolute -top-3 right-0 md:-right-20"></span>
          </h3>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white"
            >
              <iframe
                src={video.url}
                title={`Testimonial Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80"
              />
            </div>
          ))}
        </div>
      </section>

      {/* <div className="bg-[#252364] py-12 px-4 md:px-16 text-white">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Students Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-6 shadow-lg flex flex-col justify-between"
            >
              <p className="text-sm leading-relaxed mb-4">{review.content}</p>
              <div className="flex items-center justify-between mt-auto">
                <strong className="font-semibold">{review.name}</strong>
                <img
                  src={googleLogo}
                  alt="Google Reviews"
                  className="w-24 h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="bg-[#252364] py-12 px-4 md:px-16 text-white">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-[#f16f22]">
          Students Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewstwo.length === 0 ? (
            <p className="text-center col-span-3">No reviews found.</p>
          ) : (
            reviewstwo.map((review, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl p-6 shadow-lg flex flex-col justify-between"
              >
                <p className="text-sm leading-relaxed mb-4">
                  {review.review_text}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    {review.image_url && (
                      <img
                        src={`${IMAGE_BASE_URL}${review.image_url}`}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <strong className="font-semibold">{review.name}</strong>
                  </div>
                  {/* <img
                    src={googleLogo}
                    alt="Google Reviews"
                    className="w-24 h-auto"
                  /> */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-white">
        <div className="bg-blue-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            <span className="text-black font-bold">Our </span>
            <span className="text-[#f16f22] font-bold">Achievements</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Achievements */}
            <div className="grid grid-cols-2 gap-8 max-w-lg w-full">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left"
                >
                  <div className="bg-black text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3">
                    🏆
                  </div>
                  <div className="text-black font-bold text-xl">
                    {item.value}
                  </div>
                  <div className="text-gray-700 text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Right: Map with locations */}
            <div className="relative">
              <img
                src="map.jpg"
                alt="World Map"
                className="w-[700px] h-[270px]"
              />
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="absolute bg-white text-red-600 font-semibold text-sm px-3 py-1 rounded-md shadow-md"
                  style={{
                    top: loc.top,
                    left: loc.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {loc.name}
                  <div className="text-xs text-gray-500 font-normal">
                    {loc.offices}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <ContactUs /> */}

      <div className="bg-gray-100 py-10 px-4 md:px-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Section */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-[#f16f22] text-lg" />
              </div>
              <p className="text-lg font-medium">Free* End-to-End Assistance</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-[#f16f22] text-lg" />
              </div>
              <p className="text-lg font-medium">Trusted by 22,000+ Students</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-[#f16f22] text-lg" />
              </div>
              <p className="text-lg font-medium">550+ Partner Institutions</p>
            </div>
          </div>

          {/* Right Section - Form */}
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
    </>
  );
};

export default VideoTestimonials;
