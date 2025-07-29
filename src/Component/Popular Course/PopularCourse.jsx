

import React from "react";
import {
  FaUserNurse,
  FaCalculator,
  FaTools,
  FaConciergeBell,
  FaBriefcase,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import studentImage from "../../assets/banner.jpg"; // adjust path as needed

const courses = [
  {
    name: "Nursing",
    icon: <FaUserNurse className="text-[#f16f22] text-xl" />,
    path: "/nursing",
  },
  {
    name: "Accounting",
    icon: <FaCalculator className="text-[#f16f22] text-xl" />,
    path: "/accounting",
  },
  {
    name: "Engineering",
    icon: <FaTools className="text-[#f16f22] text-xl" />,
    path: "/engineering",
  },
  {
    name: "Food and Hospitality",
    icon: <FaConciergeBell className="text-[#f16f22] text-xl" />,
    path: "/hospitality",
  },
  {
    name: "Business Studies",
    icon: <FaBriefcase className="text-[#f16f22] text-xl" />,
    path: "/business-studies",
  },
];

const PopularCourse = () => {
  return (
    <div className="bg-sky-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            Explore <span className="text-[#f16f22]">Popular courses</span>{" "}
            chosen by Study Abroad Aspirants in{" "}
            <span className="text-black">Bangladesh</span>
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {courses.map((course, idx) => (
              <Link to={course.path} key={idx}>
                <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-full">
                      {course.icon}
                    </div>
                    <span className="text-gray-800 font-medium">
                      {course.name}
                    </span>
                  </div>
                  <FiArrowUpRight className="text-orange-500" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <img
            src={studentImage}
            alt="Students"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
