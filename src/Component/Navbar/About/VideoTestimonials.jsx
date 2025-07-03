import React from 'react'

const VideoTestimonials = () => {
    const videos = [
  {
    url: "https://www.youtube.com/embed/K-0RG9cU3wQ",
  },
  {
    url: "https://www.youtube.com/embed/xNNO7PIUSeE",
  },
  {
    url: "https://www.youtube.com/embed/Y0EBlvhb7qA",
  },
];
  return (
    <section className="bg-[#e8f7fd] py-16 px-4 md:px-8">
      {/* Top Title */}
      <div className="text-center mb-12">
        <span className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#252364]">
          22,000+ Happy Clients, Worldwide!
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
          Hear how we have made a difference in helping them achieve their aspirations.
        </p>
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-semibold text-[#252364] relative inline-block">
          <span className="border-t-2 border-[#252364] w-16 inline-block absolute -top-3 left-0 md:-left-20"></span>
          Video Testimonials
          <span className="border-t-2 border-[#252364] w-16 inline-block absolute -top-3 right-0 md:-right-20"></span>
        </h3>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((video, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-md bg-white">
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={`Testimonial Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-80"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoTestimonials