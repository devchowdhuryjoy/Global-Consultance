import React from "react";
import userMap from "../../assets/map1.jpg"; // Replace with actual image path

const OurAchievements = () => {
  const achievements = [
    { value: "22,000+", label: "Students Assisted" },
    { value: "550+", label: "Partner Institutions" },
    { value: "96.7%", label: "Visa Grants" },
    { value: "18", label: "Years of Expertise" },
  ];

  const locations = [
    { name: "USA", offices: "4 Offices", top: "34%", left: "60%" },
    { name: "India", offices: "2 Offices", top: "39%", left: "14%" },
    { name: "Sri Lanka", offices: "1 Office", top: "46%", left: "27%" },
    { name: "Australia", offices: "4 Offices", top: "75%", left: "44%" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-blue-50 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">
          <span className="text-black font-bold">Our </span>
          <span className="text-blue-800 font-bold">Achievements</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Achievements */}
          <div className="grid grid-cols-2 gap-8 max-w-lg w-full">
            {achievements.map((item, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className="bg-red-100 text-black w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-3">
                  🏆
                </div>
                <div className="text-black font-bold text-xl">{item.value}</div>
                <div className="text-gray-700 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Right: Map with locations */}
          <div className="relative">
            <img
              src={userMap}
              alt="World Map"
              className="w-[700px] h-[270px]"
            />
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="absolute bg-white text-red-600 font-semibold text-sm px-3 py-1 rounded-md shadow-md"
                style={{
                  top: loc.top,
                  left: loc.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {loc.name}
                <div className="text-xs text-gray-500 font-normal">
                  {loc.offices}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
