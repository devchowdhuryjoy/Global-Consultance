import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// import success1 from "../../assets/images/success1.jpg";
// import success2 from "../../assets/images/success2.jpg";
import BASE_URL from "../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../Api BaseUrl/ImageBaseUrl";

// const defaultReviews = [
//   {
//     name: "Nashira",
//     image: success1,
//     quote: `“I'm truly thankful to Global Routways, especially my counselor Anika Anjum Nabila, for their amazing support in helping me get my AUS visa. The entire process went very smoothly due to their expert guidance during this transitional period (March–April 2025) of the Australian visa, where the branch manager personally spent time counseling me. Global Routways was professional, quick, and reliable every step of the way. Nabila Apu gave me personalized help and made sure everything was done right.

//     I highly recommend Global Routways to any student chasing their dream & one of the most expert counselor Anika Anjum Nabila. Thank you for helping make mine come true!”`,
//   },
//   {
//     name: "Zihad Hossain",
//     image: success2,
//     quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

//     A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

//     I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

//     Their dedication and efficiency truly make a difference!"`,
//   },
//   {
//     name: "Zarin Afrin Zeni",
//     image: "",
//     quote: `“I am incredibly grateful to Global Routways and especially to my counselor, Mehedi Hassan, for their exceptional support throughout my journey of obtaining a USA visa. Their guidance and expertise made the entire process seamless and stress-free.

//     Global Routways demonstrated outstanding professionalism, efficiency, and commitment to delivering on their promises. Mehedi Hassan was instrumental in providing personalized assistance and ensuring that every step of the process was handled with care and precision.

//     I highly recommend Global Routways for their excellent services and unwavering dedication to helping students achieve their goals. Thank you for making this dream a reality!"`,
//   },
//   {
//     name: "Another Student",
//     image: "",
//     quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

//     A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

//     I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

//     Their dedication and efficiency truly make a difference!"`,
//   },
// ];

const SuccessStories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  // const [allReviews, setAllReviews] = useState(defaultReviews);
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params?.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  useEffect(() => {
    const fetchDynamicReviews = async () => {
      try {
        const res = await fetch(`${BASE_URL}reviewget`);
        const data = await res.json();

        const dynamicReviews = data.map((item) => ({
          name: item.name,
          quote: item.review_text,
          image: item.image_url ? `${IMAGE_BASE_URL}${item.image_url}` : "",
        }));

        // setAllReviews([...defaultReviews, ...dynamicReviews]);
        setAllReviews(dynamicReviews);
      } catch (error) {
        console.error("Failed to fetch dynamic reviews:", error);
      }
    };

    fetchDynamicReviews();
  }, []);

  return (
    <div className="relative py-14 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">
        22,000+ Success Stories{" "}
        <span className="text-[#f16f22]">Your could be the next.</span>
      </h2>

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
        onSwiper={setSwiperInstance}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        className="pb-8"
      >
        {allReviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6 text-left h-full flex flex-col justify-between max-w-md mx-auto">
              <p className="text-sm text-gray-800 whitespace-pre-line mb-6">
                {review.quote}
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold text-sm text-gray-900">
                  {review.name}
                </h4>
                {review.image && (
                  <img
                    src={review.image}
                    alt="Success Story"
                    className="w-24 mt-2"
                  />
                )}
                <div className="text-yellow-500 text-xs mt-1">★★★★★</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStories;
