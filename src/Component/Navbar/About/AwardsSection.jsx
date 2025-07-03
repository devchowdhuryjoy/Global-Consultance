import React from "react";

// Awards Data
const awards = [
  {
    img: "/studyuk.jpg", // ✅ update with your actual path
    title: "Double Platinum Eagle Award",
  },
  {
    img: "/studyusa.jpg",
    title: "Partner of the Year (2024)",
  },
  {
    img: "/studyuk.jpg",
    title: "Outstanding Service Award",
  },
];

const AwardsSection = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-[#e6f6fa] py-12 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <span className="bg-red-100 text-red-500 text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
              Awards and Achievements
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#252364] leading-tight mb-4">
              Global Routeway: Shining with <br /> Prestigious Awards!
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Our efforts have been recognized with many prestigious accolades
              over the years.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold transition-all">
              Book a FREE Consultation →
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/studyuk.jpg" // 👈 Replace with your actual image path
              alt="Awards Banner"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-[#f9f9f9] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#252364] mb-6">
              <span className="text-[#252364]">Key</span>{" "}
              <span className="text-black">Highlights</span>
            </h2>
            <p className="text-gray-800 text-base md:text-lg mb-4">
              Earning a multitude of esteemed awards and honors, PFEC Global
              stands tall in its years of remarkable operation.
            </p>
            <p className="text-gray-800 text-base md:text-lg mb-4">
              With a rich history of more than a decade, PFEC Global boasts
              numerous honors and awards that set us apart and fuel our drive to
              gain industry-wide acclaim.
            </p>
            <p className="text-gray-800 text-base md:text-lg mb-4">
              Our team's unmatched expertise and unwavering dedication are key
              to propelling us to unparalleled success in the consultancy
              industry.
            </p>
            <p className="text-gray-800 text-base md:text-lg">
              Let's proudly present a glimpse of the remarkable accolades we've
              garnered throughout our journey as a devoted higher education and
              award-winning education agency.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="/studyuk.jpg" // 👈 Replace with your actual image path
              alt="Key Highlights"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Awards Gallery */}
      <div className="bg-white py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            <span className="text-[#252364]">Awards</span>{" "}
            <span className="text-black">Gallery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <img
                  src={award.img}
                  alt={award.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <p className="mt-4 text-base md:text-lg font-medium text-gray-800">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
