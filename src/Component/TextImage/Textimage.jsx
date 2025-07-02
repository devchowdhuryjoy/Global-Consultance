import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Destination Data
const destinations = [
  { title: "Study in UK", image: "/uk.jpg" },
  { title: "Study in Canada", image: "/canada.jpg" },
  { title: "Study in Germany", image: "/germany.jpg" },
  { title: "Study in USA", image: "/usa.jpg" },
  { title: "Study in Ireland", image: "/ireland.jpg" },
  { title: "Study in New Zealand", image: "/newzealand.jpg" },
];

// Custom Arrow Component
const Arrow = ({ className, style, onClick, icon }) => (
  <div
    className={`absolute z-10 bg-white text-gray-700 rounded-full shadow-md flex items-center justify-center w-8 h-8 cursor-pointer ${className}`}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
  >
    {icon}
  </div>
);

// Main Component
const Textimage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow icon={<FaArrowRight />} />,
    prevArrow: <Arrow icon={<FaArrowLeft />} />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Gain Access to{" "}
        <span className="text-[#f16f22]">
          Top Institutions across the Globe
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Global Routways is a partner of renowned institutions across 11 countries.
        Pick a destination below and learn everything you need to make an informed decision.
      </p>

      <Slider {...settings}>
        {destinations.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative h-72 rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-sm">Learn More &gt;</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="mt-10">
        <button className="bg-[#f16f22] hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all">
          Book a FREE Consultation
        </button>
      </div>
    </div>
  );
};

export default Textimage;

