import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const awards = [
  {
    img: "/studyuk.jpg",
    title: "Double Platinum Eagle Award (2023)",
    subtitle: "Awarded by La Trobe University",
  },
  {
    img: "/studyusa.jpg",
    title: "Best Conversion & Emerging Partner Award (2025)",
    subtitle: "Awarded by UWE Bristol",
  },
  {
    img: "studyuk.jpg",
    title: "Outstanding Agency Performance (South Asia Region)",
    subtitle: "Awarded by Kaplan Business School",
  },
  {
    img: "studyusa.jpg",
    title: "Partner of the Year (2024) Diamond Category",
    subtitle: "Awarded by the University of Adelaide",
  },
  {
    img: "studyuk.jpg",
    title: "2024 Outstanding Achievement Partner (2024)",
    subtitle: "Awarded by Western Sydney University",
  },
];

const AwardsCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">
        Awards <span className="text-gray-700">&</span> achievements
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {awards.map((award, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden mx-auto max-w-xs">
              <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                {award.img ? (
                  <img
                    src={award.img}
                    alt={award.title}
                    className="w-full h-72 object-cover"
                  />
                ) : (
                  <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    Image Not Available
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold mb-1">{award.title}</h3>
                <hr className="my-2 border-gray-200" />
                <p className="text-xs font-medium text-gray-600">
                  {award.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300">
        Explore All
      </button>
    </div>
  );
};

export default AwardsCarousel;
