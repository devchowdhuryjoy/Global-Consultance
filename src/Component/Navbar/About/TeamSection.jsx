import React from "react";

const teamMembers = [
  {
    name: "Mohammad Shaiful Islam",
    title: "Director and Founder",
    image: "/studyuk.jpg",
    bgColor: "bg-[#f5f7cb]",
    description: "Driven by a strong belief in the power of education and its ability to transform lives.",
  },
  {
    name: "Md. Shaidul Islam",
    title: "Chief Executive Officer",
    image: "/studyusa.jpg",
    bgColor: "bg-[#b3e5fc]",
    description: "Founded on the belief that education and opportunity should be accessible to all.",
  },
  {
    name: "Mosharraf Khan Yaafi",
    title: "Chief Growth Officer",
    image: "/studyuk.jpg",
    bgColor: "bg-[#fff176]",
    description: "25+ years of corporate leadership across industries like FMCG, telecom and education.",
  },
  {
    name: "Fareha Begum",
    title: "Sr. Country Director",
    image: "/studyusa.jpg",
    bgColor: "bg-[#f8bbd0]",
    description: "A seasoned education professional with a strong track record in student counseling.",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-500 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Our Leadership Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#252364] leading-snug">
            Rich with Experience. Fueled by Passion.
            <br />
            Driven by the Dreams of Study Abroad Aspirants.
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Meet the team that spearheads PFEC Global.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className={`${member.bgColor} p-4`}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
              <div className="bg-black text-white p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.title}</p>
              </div>
              <div className="p-4">
                <ul className="list-disc text-gray-700 text-sm pl-5">
                  <li>{member.description}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
