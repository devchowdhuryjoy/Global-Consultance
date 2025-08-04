import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConsultationModal from "../../Modal/ConsultationModal";

const destinations = [
  { title: "Study in UK", image: "Uk.jpg", path: "/uk" },
  { title: "Study in USA", image: "usaupdate.jpg", path: "/usa" },
  { title: "Study in Canada", image: "canadaupdate.png", path: "/canada" },
  {
    title: "Study in Sweden",
    image: "Sweden.jpg",
    path: "/new-zealand",
  },
  { title: "Study in Denmark", image: "denmarkupdate.jpg", path: "/uk" },
  { title: "Study in Finland", image: "finlandupdate.jpg", path: "/japan" },
  { title: "Study in Hungary", image: "hungaryupdate.jpg", path: "/europe" },
  { title: "Study in Italy", image: "italyupdate.jpg", path: "/uk" },
  { title: "Study in France", image: "franceupdate.jpg", path: "/australia" },
  { title: "Study in Dubai", image: "dubaiupdate.jpg", path: "/uk" },
  { title: "Study in Europe", image: "uk1.jpg", path: "/uk" },
];

const Textimage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
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
        Global Routways is a partner of renowned institutions across 11
        countries. Pick a destination below and learn everything you need to
        make an informed decision.
      </p>

      <Slider {...settings}>
        {destinations.map((item, index) => (
          <div
            key={index}
            className="px-2 cursor-pointer"
            onClick={() => navigate(item.path)}
          >
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
        <button
          onClick={handleOpenModal}
          className="bg-[#f16f22] hover:bg-[#252364] text-white font-semibold py-3 px-6 rounded-full transition-all"
        >
          Book a FREE Consultation
        </button>
      </div>
      {/* ✅ Modal */}
      <ConsultationModal show={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Textimage;




