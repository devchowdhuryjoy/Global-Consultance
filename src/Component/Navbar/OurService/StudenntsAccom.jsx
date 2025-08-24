import React from "react";
import { ArrowRight } from "lucide-react";
import SuccessStories from "../../SuccessStories/SuccessStories";
import SimpleSteps from "../../Simple Steps/SimpleSteps";

const StudenntsAccom = () => {
  const factors = [
    {
      title: "Location & Connectivity",
      description:
        "Choose accommodation close to your university or with easy access to public transport, shops, and essentials.",
    },
    {
      title: "Safety & Security",
      description:
        "Check for secure entry, CCTV, and emergency support to ensure a safe living environment.",
    },
    {
      title: "Budget & Inclusions",
      description:
        "Compare costs and see what’s included—utilities, internet, furnishings, etc.—to avoid hidden expenses.",
    },
    {
      title: "Amenities & Facilities",
      description:
        "Look for features like laundry, kitchen, study areas, and social spaces that support both study and lifestyle.",
    },
    {
      title: "Contract Flexibility",
      description:
        "Review lease terms, cancellation policies, and notice periods in case your plans change.",
    },
  ];

  return (
    <>
      <section className="bg-[#E6F6FA] py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#f16f22] font-medium text-sm bg-red-50 px-3 py-1 rounded">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2B61] mt-4 leading-snug">
              Find Affordable and Trusted <br /> Student Accomodations
            </h2>
            <p className="text-blackmt-4 max-w-lg">
              Unlock global opportunities with seamless guidance from
              application to acceptance.
            </p>
            <button className="mt-6 inline-flex items-center bg-[#f16f22] hover:bg-[#252364] text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative max-w-sm">
              {/* Background Shape */}
              <div className="absolute inset-0 rounded-lg -rotate-2 z-0"></div>
              {/* Foreground Image */}
              <img
                src="student-2.png"
                alt="Student Accommodation"
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B2B61] mb-4">
              Factors to Consider before Finalizing a Student Accommodation
            </h2>
            <p className="text-gray-700 mb-8">
              Here are some of the key factors that will vary based on the needs
              of each student:
            </p>

            <ul className="space-y-6">
              {factors.map((item, index) => (
                <li key={index} className="flex items-start">
                  {/* Icon / Shape */}
                  <div className="w-3 h-6 bg-[#252364] rotate-12 mt-1 mr-4"></div>
                  <div>
                    <h3 className="font-bold text-lg text-[#252364]">
                      {item.title}
                    </h3>
                    <p className="text-black text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="Studyabroad.jpg"
                alt="Student unpacking"
                className="rounded-2xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      

      <SuccessStories/>

      <SimpleSteps/>

    </>
  );
};

export default StudenntsAccom;
