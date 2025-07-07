import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Course = () => {
  // 2nd section
  const courses = [
    {
      title: "Accounting",
      image: "/studyuk.jpg",
    },
    {
      title: "Nursing",
      image: "/studyuk.jpg",
    },
    {
      title: "Engineering",
      image: "/studyuk.jpg",
    },
    {
      title: "Business Analytics",
      image: "/studyuk.jpg",
    },
    {
      title: "Food Science",
      image: "/studyuk.jpg",
    },
  ];
  // 2nd section

  //   5th section
  const reviews = [
    {
      name: "Nashira",
      quote: `“I'm truly thankful to Global Routways, especially my counselor Anika Anjum Nabila, for their amazing support in helping me get my AUS visa. The entire process went very smoothly due to their expert guidance during this transitional period (March–April 2025) of the Australian visa, where the branch manager personally spent time counseling me.Global Routways was professional, quick, and reliable every step of the way. Nabila Apu gave me personalized help and made sure everything was done right.

    I highly recommend Global Routways to any student chasing their dream & one of the most expert counselor Anika Anjum Nabila. Thank you for helping make mine come true!”`,
    },
    {
      name: "Zihad Hossain",
      quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

      A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

      I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

      Their dedication and efficiency truly make a difference!`,
    },
    {
      name: "Zarin Afrin Zeni",
      quote: `“I am incredibly grateful to Global Routways and especially to my counselor, Mehedi Hassan, for their exceptional support throughout my journey of obtaining a USA visa. Their guidance and expertise made the entire process seamless and stress-free.

    Global Routways demonstrated outstanding professionalism, efficiency, and commitment to delivering on their promises. Mehedi Hassan was instrumental in providing personalized assistance and ensuring that every step of the process was handled with care and precision.

    I highly recommend Global Routways for their excellent services and unwavering dedication to helping students achieve their goals. Thank you for making this dream a reality!`,
    },
    {
      name: "Another Student",
      quote: `“Alhamdulillah! I got my Australian visa on March 25. It has been a great journey with Global Routways, and I am truly grateful for their outstanding support throughout the entire process.

      A special thanks to my counselor, Mr. Riyad Jahangir Dip, for his exceptional guidance and assistance. From university selection to visa processing, his expertise made everything smooth and stress-free also his friendly behavior help me in every sector.

      I recommend Global Routways to anyone looking for a reliable and professional education consultancy also Mr. Riyad Jahangir Dip.

      Their dedication and efficiency truly make a difference!”`,
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState("4"); // default 3 reviews shown

  // handle next arrow click
  const handleNextClick = () => {
    if (visibleCount < reviews.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // attach event listener after DOM refs available
    const nextBtn = nextRef.current;
    if (nextBtn) {
      nextBtn.addEventListener("click", handleNextClick);
    }
    return () => {
      if (nextBtn) {
        nextBtn.removeEventListener("click", handleNextClick);
      }
    };
  }, [visibleCount]);

  //   5th section
  return (
    <>
      {/* 1st section */}
      <div className="bg-gradient-to-r from-black via-[#064b4e] to-[#24b2c3] text-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block bg-[#fef1f0] text-[#f44336] text-sm font-semibold px-4 py-1 rounded mb-6">
            Services
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug sm:leading-snug">
            Learn everything about Studying <br className="hidden sm:block" />
            Your Preferred Course Abroad!
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-white/90">
            Explore various factors that you need to consider before you choose
            your preferred course
          </p>
        </div>
      </div>
      {/* 1st section */}

      {/* 2nd section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md transition hover:shadow-lg"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-[#252364]">
                  {course.title}
                </h3>
                <p className="text-[#f44336] text-sm font-medium mt-1">
                  Learn More &gt;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 2nd section */}

      {/* 3rd section */}
      <div className="bg-[#e6f6fa] py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side: Info List */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#252364] mb-6">
              Who Can Benefit from Our Counselling Services?
            </h2>
            <ul className="space-y-6">
              {[
                "High school graduates planning to start their tertiary education in Australia.",
                "University students seeking course or provider changes",
                "Diploma/TAFE students looking to pathway into university degrees",
                "Parents and guardians seeking professional guidance for their children’s future",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#252364] text-2xl font-bold mt-1">
                    /
                  </span>
                  <p className="text-gray-800 text-base">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Form */}
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
              </select>
              <select className="border border-black rounded-lg px-4 py-2 w-full">
                <option>Your Preferred Study Destination</option>
              </select>
              <select className="border border-black rounded-lg px-4 py-2 w-full">
                <option>English Language Test Status</option>
              </select>
              <input
                type="text"
                placeholder="How do you plan to fund your studies"
                className="border border-black rounded-lg px-4 py-2 w-full"
              />

              {/* Terms */}
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
      {/* 3rd section */}

      {/* 5th section */}
      <div className="relative py-14 px-4 sm:px-8 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          22,000+ Success Stories{" "}
          <span className="text-blue-700">Your could be the next.</span>
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {reviews.slice(0, visibleCount).map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6 text-left h-full flex flex-col justify-between max-w-md mx-auto">
                <p className="text-sm text-gray-800 whitespace-pre-line mb-6">
                  {review.quote}
                </p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-sm text-gray-900">
                    {review.name}
                  </h4>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg"
                    alt="Google Reviews"
                    className="w-24 mt-2"
                  />
                  <div className="text-yellow-500 text-xs mt-1">★★★★★</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 5th section */}
    </>
  );
};

export default Course;
