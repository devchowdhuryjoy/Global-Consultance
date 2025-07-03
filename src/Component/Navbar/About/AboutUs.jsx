import React from 'react'

const AboutUs = () => {
  return (
    <section className="bg-[#e5f6fd] py-16 px-4 md:px-8 text-center relative">
      {/* Sticky Tag */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
        <span className="bg-[#ffeae5] text-[#ff6b57] px-4 py-1 text-sm font-medium rounded-full shadow-sm">
          About Us
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#252364] mb-10 pt-8">
        Helping Students Achieve their Study Abroad Dreams with Expert Guidance
      </h2>

      {/* Image */}
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-md">
        <img
          src="src/assets/aboutus.webp" // Replace with your image path"// Replace with your image path
          alt="PFEC Global Team"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}

export default AboutUs