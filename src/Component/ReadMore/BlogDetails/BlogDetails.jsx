import React from "react";
import { useParams } from "react-router-dom";
import Abroad2024 from "../ReadPage/Abroad2024";
import StudyinginUK from "../ReadPage/StudyinginUK";
import Rejected from "../ReadPage/Rejected";

const blogContent = {
  "cost-to-study-abroad-2024": {
    title: "",
    content: <Abroad2024 />,
  },
  "visa-requirements-uk": {
    title: "",
    content: <StudyinginUK />,
  },
  "visa-requirements-rejected": {
    title: "",
    content: <Rejected />,
  },

  // Add other slugs and content here
};

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogContent[slug];

  if (!blog) {
    return <h2 className="text-center text-red-600 py-10">Blog not found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {blog.title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#252364]">
          {blog.title}
        </h2>
      )}
      <div className="text-lg leading-7 text-gray-700">{blog.content}</div>
    </div>
  );
};

export default BlogDetails;
