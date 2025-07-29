// -----------------------api integation code------------------
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useParams } from "react-router-dom";
import BASE_URL from "../../../Api BaseUrl/BaseUrl";
import IMAGE_BASE_URL from "../../../Api BaseUrl/ImageBaseUrl";

const BlogDetails = () => {
  const [showContents, setShowContents] = useState(false);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${BASE_URL}blogs/${slug}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div className="text-center py-12">Loading blog...</div>;
  if (!blog) return <div className="text-center py-12">Blog not found</div>;

  return (
    <>
      

      <div className="bg-white">
        {/* Header Section with Reduced Padding */}
        <div className="px-4 py-6 md:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Text Content */}
            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-bold text-[#252364]">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
                <span>🕒 6:30 am</span>
                <span>⏱️ 8 min Read</span>
              </div>

              <div className="py-3">
                <h2 className="text-lg font-semibold text-red-500">Summary</h2>
                <p className="text-gray-700 mt-1">{blog.excerpt}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Share via:</h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3b5998] text-white"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1da1f2] text-white"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Image - Fixed Aspect Ratio */}
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-md">
              <img
                src={`${IMAGE_BASE_URL}${blog.image}`}
                alt="Blog Visual"
                className="w-[500px] h-[300px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section with Tighter Spacing */}
        <div className="px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4">
              <button
                onClick={() => setShowContents(!showContents)}
                className="flex items-center gap-1 text-blue-600 font-medium text-sm"
              >
                Jump to Topic | Contents
                <span
                  className={`transition-transform ${
                    showContents ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {showContents && (
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-700 space-y-1">
                  <li>Why Study in the UK?</li>
                  <li>UK Student Visa (Tier 4)</li>
                  <li>Visa Requirements</li>
                  <li>English Language Requirements</li>
                  <li>Biometric Residence Permit</li>
                </ul>
              )}
            </div>

            <div
              className="text-gray-800 leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
