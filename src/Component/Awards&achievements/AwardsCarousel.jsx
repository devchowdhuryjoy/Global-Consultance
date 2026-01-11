// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import ConsultationModal from "../../Modal/ConsultationModal";

// const awards = [
//   {
//     img: "certificate.jpg",
//     title: "Double Platinum Eagle Award (2023)",
//     subtitle: "Awarded by La Trobe University",
//   },
//   {
//     img: "certificate1.jpg",
//     title: "Best Conversion & Emerging Partner Award (2025)",
//     subtitle: "Awarded by UWE Bristol",
//   },
//   {
//     img: "certificate2.jpg",
//     title: "Outstanding Agency Performance (South Asia Region)",
//     subtitle: "Awarded by Kaplan Business School",
//   },
//   {
//     img: "certificate.jpg",
//     title: "Partner of the Year (2024) Diamond Category",
//     subtitle: "Awarded by the University of Adelaide",
//   },
//   {
//     img: "certificate1.jpg",
//     title: "2024 Outstanding Achievement Partner (2024)",
//     subtitle: "Awarded by Western Sydney University",
//   },
// ];

// const AwardsCarousel = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="relative py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-8 text-[#f16f22]">
//         Collaboration <span className="text-gray-700"></span>
//       </h2>

//       {/* Custom Navigation Buttons */}
//       <div
//         ref={prevRef}
//         className="swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#f16f22] w-8 h-8 rounded-full flex items-center justify-center"
//       >
//         <svg
//           className="w-4 h-4 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </div>

//       <div
//         ref={nextRef}
//         className="swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#f16f22] w-8 h-8 rounded-full flex items-center justify-center"
//       >
//         <svg
//           className="w-4 h-4 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </div>

//       <Swiper
//         modules={[Navigation, Autoplay]}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         onBeforeInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//         }}
//         onSwiper={(swiper) => {
//           setTimeout(() => {
//             swiper.navigation.init();
//             swiper.navigation.update();
//           });
//         }}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         spaceBetween={20}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 4 },
//         }}
//         className="pb-10"
//       >
//         {awards.map((award, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="bg-white shadow-md rounded-xl overflow-hidden mx-auto max-w-xs">
//               <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
//                 {award.img ? (
//                   <img
//                     src={award.img}
//                     alt={award.title}
//                     className="w-full h-72 object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
//                     Image Not Available
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-md font-semibold mb-1">{award.title}</h3>
//                 <hr className="my-2 border-gray-200" />
//                 <p className="text-xs font-medium text-gray-600">
//                   {award.subtitle}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <button
//         onClick={handleOpenModal}
//         className="mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300"
//       >
//         Explore All
//       </button>

//       {/* ✅ Modal */}
//       <ConsultationModal show={showModal} onClose={handleCloseModal} />
//     </div>
//   );
// };

// export default AwardsCarousel;

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ConsultationModal from "../../Modal/ConsultationModal";
import BASE_URL from "../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../Api BaseUrl/ImageBaseUrl";

const AwardsCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
  const fetchAwards = async () => {
    try {
      const response = await fetch(`${BASE_URL}//collaborations`);
      if (!response.ok) {
        throw new Error("Failed to fetch awards data");
      }

      const data = await response.json();

      //Log the raw data from API
      console.log("Raw API response:", data);

      // Transform API data to match expected structure
      const formattedAwards = data.map((item, index) => {
        //Log each item individually for deeper inspection
        console.log(`Item ${index}:`, item);

        return {
          img: item.image ? `${IMAGE_BASE_URL}${item.image}` : "",
          title: item.text || "",
          subtitle: item.subtitle || item.excerpt || "Collaboration by Institution",
        };
      });

      setAwards(formattedAwards);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching awards:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchAwards();
}, []);


  if (loading) {
    return (
      <div className="relative py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#f16f22]">
          Collaboration
        </h2>
        <div className="flex justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-72 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#f16f22]">
          Collaboration
        </h2>
        <p className="text-red-500">Error loading awards: {error}</p>
      </div>
    );
  }

  if (awards.length === 0) {
    return (
      <div className="relative py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#f16f22]">
          Collaboration
        </h2>
        <p>No Collaboration data available</p>
      </div>
    );
  }

  return (
    <div className="relative py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#f16f22]">
        Collaboration <span className="text-gray-700"></span>
      </h2>

      {/* Navigation Arrows */}
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
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
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
            <div className="bg-white shadow-md rounded-xl overflow-hidden mx-auto max-w-xs hover:shadow-lg transition-shadow duration-300">
              <div className="w-full h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
                {award.img ? (
                  <img
                    src={award.img}
                    alt={award.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "";
                      e.target.parentElement.classList.add("bg-gray-200");
                      e.target.parentElement.innerHTML =
                        '<div className="text-gray-400 p-4">Image Not Available</div>';
                    }}
                  />
                ) : (
                  <div className="text-gray-400 p-4">Image Not Available</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold mb-1 text-gray-800">
                  {award.title}
                </h3>
                <hr className="my-2 border-gray-200" />
                <p className="text-xs font-medium text-gray-600">
                  {award.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={handleOpenModal}
        className="mt-6 bg-[#f16f22] hover:bg-[#252364] text-white font-semibold px-6 py-2 rounded-full transition duration-300"
      >
        Explore All
      </button>

      <ConsultationModal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default AwardsCarousel;
