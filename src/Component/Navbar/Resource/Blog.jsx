// import React, { useState } from "react";
// import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Blog = () => {
//   const navigate = useNavigate();

//   // 2nd section
//   const blogData = [
//     {
//       slug: "cost-to-study-abroad-2024",
//       image: "/study6.jpg", // Update with your actual image path
//       title: "How Much Does it Cost to Study Abroad in 2024?",
//       excerpt:
//         "SummaryIELTS is a globally recognized English proficiency test for study, work, and migration. It assesses Listening, Reading, Writing, and Speaking through Academic and General Training formats. A...",
//       author: "Pooja",
//       date: "June 30, 2025",
//       tag: "IELTS",
//     },
//     {
//       slug: "visa-requirements-uk",
//       image: "/study1.jpg",
//       title: "Visa Requirements for Studying in UK",
//       excerpt:
//         "SummaryIELTS is a globally recognized English proficiency test for study, work, and migration. It assesses Listening, Reading, Writing, and Speaking through Academic and General Training formats. A...",
//       author: "Pooja",
//       date: "June 27, 2025",
//       tag: "IELTS",
//     },
//     {
//       slug: "visa-requirements-rejected",
//       image: "/study4.jpg",
//       title: "Why Your Partner’s Visa Application May Be Rejected?",
//       excerpt:
//         "SummaryIELTS is a globally recognized English proficiency test for study, work, and migration. It assesses Listening, Reading, Writing, and Speaking through Academic and General Training formats. A...",
//       author: "Pooja",
//       date: "June 27, 2025",
//       tag: "IELTS",
//     },
//     {
//       slug: "visa-requirements-uk",
//       image: "/study6.jpg",
//       title: "Visa Requirements for Studying in UK",
//       excerpt:
//         "SummaryIELTS is a globally recognized English proficiency test for study, work, and migration. It assesses Listening, Reading, Writing, and Speaking through Academic and General Training formats. A...",
//       author: "Pooja",
//       date: "June 27, 2025",
//       tag: "IELTS",
//     },
//     {
//       slug: "visa-requirements-rejected",
//       image: "/study6.jpg",
//       title: "Why Your Partner’s Visa Application May Be Rejected?",
//       excerpt:
//         "SummaryIELTS is a globally recognized English proficiency test for study, work, and migration. It assesses Listening, Reading, Writing, and Speaking through Academic and General Training formats. A...",
//       author: "Pooja",
//       date: "June 27, 2025",
//       tag: "IELTS",
//     },
//   ];
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;

//   const totalPages = Math.ceil(blogData.length / postsPerPage);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
//   // 2nd section

//   return (
//     <>
//       {/* 1st section */}
//       <div className="bg-[#e6faff] w-full">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between">
//           {/* Left Text */}
//           <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
//             <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
//               Blogs
//             </h2>
//             <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
//               Welcome to Global Routeway Bangladesh blog—your trusted guide for
//               everything you need to know about studying and living Down Under.
//               From expert insights on universities and visas to inspiring
//               student success stories, we’re here to help you take the next step
//               toward your Australian dream.
//             </p>
//           </div>

//           {/* Right Image with background shapes */}
//           <div className="lg:w-1/2 w-full relative flex justify-center items-center">
//             {/* Background shapes */}
//             <div className="absolute -left-8 top-0 w-3/4 h-full z-0 hidden sm:block">
//               <svg
//                 viewBox="0 0 600 400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-full h-full"
//               >
//                 <rect
//                   x="100"
//                   y="0"
//                   width="150"
//                   height="400"
//                   fill="#6e73e6"
//                   transform="skewX(-20)"
//                 />
//                 <rect
//                   x="300"
//                   y="0"
//                   width="150"
//                   height="400"
//                   fill="#d9dbee"
//                   transform="skewX(-20)"
//                 />
//               </svg>
//             </div>

//             {/* Main Image */}
//             <img
//               src="/award1.jpg" // Replace with your actual path
//               alt="Global Routeway Blog"
//               className="relative z-10 max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//       {/* 1st section */}

//       {/* 2nd section */}
//       <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
//         {/* Grid */}
//         <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {currentPosts.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col"
//             >
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-56 object-cover rounded-t-lg"
//               />

//               <div className="p-5 flex flex-col flex-grow">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {blog.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 flex-grow">
//                   {blog.excerpt}
//                 </p>

//                 <button
//                   onClick={() => {
//                     window.scrollTo(0, 0); // Scroll top করে দিচ্ছে
//                     navigate(`/blog/${blog.slug}`);
//                   }}
//                   className="hover:bg-[#252364] bg-[#f16f22] text-white py-2 px-5 rounded-md self-start transition"
//                 >
//                   Read More
//                 </button>
//               </div>

//               <div className="border-t px-5 py-3 text-sm text-gray-500 flex items-center justify-start gap-4">
//                 <span className="flex items-center gap-1">
//                   <FaUser /> By {blog.author}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <FaCalendarAlt /> {blog.date}
//                 </span>
//                 <span className="flex items-center gap-1">
//                   <FaTag /> {blog.tag}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="mt-10 flex justify-center space-x-2">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-4 py-2 rounded ${
//                 currentPage === i + 1
//                   ? "bg-[#f16f22] text-white"
//                   : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//               } transition`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//       {/* 2nd section */}
//     </>
//   );
// };

// export default Blog;

// -----------------------api integation code------------------

import React, { useState, useEffect } from "react";
import { FaUser, FaCalendarAlt, FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../../Api BaseUrl/ImageBaseUrl";

const Blog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${BASE_URL}blog`);
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogData.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) return <div className="text-center py-12">Loading blogs...</div>;

  return (
    <>
      {/* 1st section - Keep original design */}
      <div className="bg-[#e6faff] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Blogs
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              Welcome to Global Routeway Bangladesh blog—your trusted guide for
              everything you need to know about studying and living Down Under.
              From expert insights on universities and visas to inspiring
              student success stories, we're here to help you take the next step
              toward your Australian dream.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full relative flex justify-center items-center">
            <div className="absolute -left-8 top-0 w-3/4 h-full z-0 hidden sm:block">
              <svg
                viewBox="0 0 600 400"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <rect
                  x="100"
                  y="0"
                  width="150"
                  height="400"
                  fill="#6e73e6"
                  transform="skewX(-20)"
                />
                <rect
                  x="300"
                  y="0"
                  width="150"
                  height="400"
                  fill="#d9dbee"
                  transform="skewX(-20)"
                />
              </svg>
            </div>
            <img
              src="/award1.jpg"
              alt="Global Routeway Blog"
              className="relative z-10 max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* 2nd section - Blog listings */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((blog, index) => (
            <div
              key={index}
              className="bg-white border border-black rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={`${IMAGE_BASE_URL}${blog.image}`}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {blog.excerpt}
                </p>
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/blog/${blog.slug}`);
                  }}
                  className="hover:bg-[#252364] bg-[#f16f22] text-white py-2 px-5 rounded-md self-start transition"
                >
                  Read More
                </button>
              </div>
              <div className="border-t px-5 py-3 text-sm text-gray-500 flex items-center justify-start gap-4">
                <span className="flex items-center gap-1">
                  <FaUser /> By {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaTag /> {blog.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-[#f16f22] text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              } transition`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
// -----------------------api integation code------------------
