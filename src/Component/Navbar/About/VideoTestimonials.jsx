import React from "react";
import googleLogo from "../../../assets/Google-Logo.png";
import userMap from "../../../assets/map1.jpg";
import ContactUs from "../../Contact Us/ContactUs";
import { FaCrown } from "react-icons/fa";

const VideoTestimonials = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/K-0RG9cU3wQ",
    },
    {
      url: "https://www.youtube.com/embed/xNNO7PIUSeE",
    },
    {
      url: "https://www.youtube.com/embed/Y0EBlvhb7qA",
    },
  ];

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

  return (
    <>
      <section className="bg-[#e8f7fd] py-16 px-4 md:px-8">
        {/* Top Title */}
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

        {/* Section Title */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-[#252364] relative inline-block">
            <span className="border-t-2 border-[#252364] w-16 inline-block absolute -top-3 left-0 md:-left-20"></span>
            Video Testimonials
            <span className="border-t-2 border-[#252364] w-16 inline-block absolute -top-3 right-0 md:-right-20"></span>
          </h3>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md bg-white"
            >
              <iframe
                width="100%"
                height="315"
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
      </section>

      <div className="bg-[#252364] py-12 px-4 md:px-16 text-white">
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
      </div>

      <div className="bg-white">
        <div className="bg-blue-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">
            <span className="text-black font-bold">Our </span>
            <span className="text-blue-800 font-bold">Achievements</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Achievements */}
            <div className="grid grid-cols-2 gap-8 max-w-lg w-full">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left"
                >
                  <div className="bg-red-100 text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3">
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
                src="maps2.png"
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
                <FaCrown className="text-red-500 text-lg" />
              </div>
              <p className="text-lg font-medium">Free* End-to-End Assistance</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-red-500 text-lg" />
              </div>
              <p className="text-lg font-medium">Trusted by 22,000+ Students</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-full">
                <FaCrown className="text-red-500 text-lg" />
              </div>
              <p className="text-lg font-medium">550+ Partner Institutions</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-full">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
              Register with Us to Take the Next Step
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-black  rounded-lg px-4 py-2 w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="border border-black rounded-lg px-4 py-2 w-full"
              />
              <div className="grid grid-cols-[80px_1fr] gap-2">
                <input
                  type="text"
                  value="+880"
                  readOnly
                  className="border border-black rounded-lg px-4 py-2 w-full bg-gray-100"
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border border-black rounded-lg px-4 py-2 w-full"
                />
              </div>
              <select className="border border-black  rounded-lg px-4 py-2 w-full">
                <option>Your Nearest Global Routways Office</option>
                <option>Global Routways Office</option>
              </select>
              <select className="border border-black rounded-lg px-4 py-2 w-full">
                <option>Your Preferred Study Destination</option>
                <option>Destination</option>
              </select>
              <select className="border border-black rounded-lg px-4 py-2 w-full">
                <option>English Language Test Status</option>
                <option>English Language</option>
              </select>
              <input
                type="text"
                placeholder="How do you plan to fund your studies"
                className="border border-blackrounded-lg px-4 py-2 w-full"
              />

              {/* Terms and checkbox */}
              <div className="flex items-start gap-2 text-sm">
                <input type="checkbox" defaultChecked className="mt-1" />
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
                <button className="mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                  Submit
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
