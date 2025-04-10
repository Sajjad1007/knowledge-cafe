import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = ({ handleBookmarked, handleMarkRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="lg:w-[70%]">
      <h3 className="my-6 text-lg font-semibold text-center">
        Total Blogs : {blogs.length}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            handleBookmarked={handleBookmarked}
            handleMarkRead={handleMarkRead}
          ></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
