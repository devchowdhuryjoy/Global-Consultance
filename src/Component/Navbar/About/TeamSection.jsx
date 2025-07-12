import React from "react";
import { FaCrown } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mohammad Shaiful Islam",
    title: "Director and Founder",
    image: "/university.jpg",
    bgColor: "bg-[#f5f7cb]",
    description:
      "Driven by a strong belief in the power of education and its ability to transform lives.",
  },
  {
    name: "Md. Shaidul Islam",
    title: "Chief Executive Officer",
    image: "/studyusa.jpg",
    bgColor: "bg-[#b3e5fc]",
    description:
      "Founded on the belief that education and opportunity should be accessible to all.",
  },
  {
    name: "Mosharraf Khan Yaafi",
    title: "Chief Growth Officer",
    image: "/study4.jpg",
    bgColor: "bg-[#fff176]",
    description:
      "25+ years of corporate leadership across industries like FMCG, telecom and education.",
  },
  {
    name: "Fareha Begum",
    title: "Sr. Country Director",
    image: "/study6.jpg",
    bgColor: "bg-[#f8bbd0]",
    description:
      "A seasoned education professional with a strong track record in student counseling.",
  },
];

const TeamSection = () => {
  return (
    <>
      <section className="bg-[#f9f9f9] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Our Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#252364] leading-snug">
              Rich with Experience. Fueled by Passion.
              <br />
              Driven by the Dreams of Study Abroad Aspirants.
            </h2>
            <p className="mt-4 text-gray-700 text-base md:text-lg">
              Meet the team that spearheads Global Routeway Global.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className={`${member.bgColor} p-4`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
                <div className="bg-black text-white p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.title}</p>
                </div>
                <div className="p-4">
                  <ul className="list-disc text-gray-700 text-sm pl-5">
                    <li>{member.description}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact us */}
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

export default TeamSection;
