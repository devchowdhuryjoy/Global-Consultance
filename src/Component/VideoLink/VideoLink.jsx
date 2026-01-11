import React, { useState, useEffect } from "react";
import BASE_URL from "../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../Api BaseUrl/ImageBaseUrl";

const VideoLink = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/videos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const embeddedVideos = data.map((video) => {
          const id = video.url.includes("shorts")
            ? video.url.split("/").pop()
            : video.url.split("v=")[1];
          return {
            ...video,
            url: `https://www.youtube.com/embed/${id}`,
          };
        });
        console.log("Embedded URLs:", embeddedVideos);
        setVideos(embeddedVideos);
      })
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <section className="bg-[#e8f7fd] py-16 px-4 md:px-8">
      {/* Top Title */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#fff] text-[#f16f22] px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#f16f22]">
          22,000+ Happy Clients, Worldwide!
        </h2>
        <p className="mt-4 text-black max-w-2xl mx-auto text-base md:text-lg">
          Hear how we have made a difference in helping them achieve their
          aspirations.
        </p>
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold text-[#f16f22] relative inline-block">
          <span className="border-t-2 border-black-500 w-16 inline-block absolute -top-3 left-0 md:-left-20"></span>
          Video Testimonials
          <span className="border-t-2 border-black-500 w-16 inline-block absolute -top-3 right-0 md:-right-20"></span>
        </h3>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-white"
          >
            <iframe
              src={video.url}
              title={`Testimonial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-80"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoLink;
