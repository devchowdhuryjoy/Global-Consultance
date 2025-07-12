import React from "react";
// import userMap from "../../../assets/map1.jpg";
import { FaLeaf, FaBinoculars } from "react-icons/fa";

const AboutUs = () => {
  // 3rd section
  const achievements = [
    { value: "22,000+", label: "Students Assisted" },
    { value: "550+", label: "Partner Institutions" },
    { value: "96.7%", label: "Visa Grants" },
    { value: "18", label: "Years of Expertise" },
  ];

  const locations = [
    { name: "USA", offices: "4 Offices", top: "34%", left: "60%" },
    { name: "Uk", offices: "2 Offices", top: "39%", left: "44%" },
    { name: "Canada", offices: "1 Office", top: "46%", left: "27%" },
    { name: "Australia", offices: "4 Offices", top: "75%", left: "44%" },
  ];
  // 3rd section
  return (
    <>
      {/* 1st section */}
      <section className="bg-[#e5f6fd] py-16 px-4 md:px-8 text-center relative">
        {/* Sticky Tag */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-[#ffeae5] text-[#ff6b57] px-4 py-1 text-sm font-medium rounded-full shadow-sm">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-[#252364] mb-10 pt-8">
          Helping Students Achieve their Study Abroad Dreams with Expert
          Guidance
        </h2>

        {/* Image */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-md">
          <img
            src="/university.jpg" // Replace with your image path"// Replace with your image path
            alt="Global Routeways Team"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>
      {/* 1st section */}

      {/* 2nd section */}
      <div className="bg-gray-50 py-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Text */}
          <div className="space-y-6 text-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold">Who are we?</h2>
            <p>
              Our journey started with a single office in 2006 in Melbourne,
              Australia and since then we have expanded to different
              geographies—Sydney, Adelaide, and Perth in Australia, Dhaka and
              Chattogram in Bangladesh, and Ahmedabad & Kolkata in India and
              Colombo in Sri Lanka. Our multifield growth across the segments is
              a testimony to our commitment to professionalism, persistent hard
              work, as well as efficient and effective teamwork.
            </p>
            <p>
              At present, Global Routeway Global represents over 550 educational
              institutions globally. Our partners include:
            </p>
            <ul className="list-disc list-inside ml-2">
              <li>Renowned universities</li>
              <li>TAFES</li>
              <li>Colleges and tertiary schools all across the world</li>
            </ul>
            <p>
              Since 2006, Global Routeway Global has helped realize the dreams of 22000+
              students from different nationalities with the help of our
              partners. Our defined processes, vast experience, committed
              workforce, and uncompromising work ethics help us deliver the best
              possible service and pleasant experience in educational and career
              undertakings globally for all of our clients.
            </p>
          </div>

          {/* Right Side - Form */}
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
                  className="border border-black rounded-lg px-4 py-2 w-full"
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
              <select className="border border-black rounded-lg px-4 py-2 w-full">
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
                className="border border-black rounded-lg px-4 py-2 w-full"
              />
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
      {/* 2nd section */}

      {/* 3rd section */}
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
      {/* 3rd section */}

      {/* 4rd section */}
      <div className="bg-[#f8fbfd] py-12 px-4 md:px-16">
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md relative">
            <h3 className="text-xl font-semibold text-[#f16f22] mb-3">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Going above and beyond to ensure that each of our student's career
              aspirations has been achieved through our guidance, and we achieve
              this together.
            </p>
            <FaLeaf className="absolute top-6 right-6 text-2xl text-black/60" />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md relative">
            <h3 className="text-xl font-semibold text-[#f16f22] mb-3">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To remain an industry leader by giving the highest level of client
              experience through ethical guidance so that students can make
              informed decisions on their career goals and become global
              citizens.
            </p>
            <FaBinoculars className="absolute top-6 right-6 text-2xl text-black/60" />
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our <span className="text-[#252364]">Core Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h4 className="text-[#f16f22] font-semibold text-lg mb-1">
              Client-centric
            </h4>
            <p className="text-sm text-gray-700">
              Strive for client satisfaction
            </p>
          </div>
          <div>
            <h4 className="text-[#f16f22] font-semibold text-lg mb-1">
              Ownership
            </h4>
            <p className="text-sm text-gray-700">Deliver as committed</p>
          </div>
          <div>
            <h4 className="text-[#f16f22] font-semibold text-lg mb-1">
              Reliability
            </h4>
            <p className="text-sm text-gray-700">
              Fostering trust through honesty and openness
            </p>
          </div>
          <div>
            <h4 className="text-[#f16f22] font-semibold text-lg mb-1">
              Teamwork
            </h4>
            <p className="text-sm text-gray-700">
              Strong cooperation for the best conclusion
            </p>
          </div>
        </div>
      </div>
      {/* 4rd section */}
    </>
  );
};

export default AboutUs;
