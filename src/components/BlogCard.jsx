import React from "react";
import { FaBookmark } from "react-icons/fa";

const BlogCard = ({ blog, handleBookmarked, handleMarkRead }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={blog.cover}
          alt={blog.title}
          loading="lazy"
          className="w-full h-56 object-cover"
        />
      </figure>
      <div className="card-body gap-0">
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 md:gap-4 items-center">
            <img
              src={blog.author_img}
              alt={blog.author}
              className="w-10 h-10 hover:opacity-80 hover:cursor-pointer"
            />
            <div>
              <h4 className="font-semibold text-base">{blog.author}</h4>
              <p className="text-xs font-medium">{blog.posted_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 h-6">
            <h6 className="text-xs font-semibold">
              {blog.reading_time} min read
            </h6>
            <button
              onClick={() => handleBookmarked(blog)}
              className="hover:cursor-pointer hover:opacity-70 text-red-600"
            >
              <FaBookmark size={17} />
            </button>
          </div>
        </div>
        <h2 className="card-title">{blog.title}</h2>
        <div className="flex gap-2 justify-start mb-2">
          {blog.hashtags.map((hashtag, index) => (
            <div key={index} className="text-sm font-semibold text-blue-700">
              #{hashtag}
            </div>
          ))}
        </div>
        <p className="mb-2">
          A card component has a figure, a body part, and inside body there are
          title and actions parts.
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleMarkRead(blog)}
            className="btn btn-primary text-white rounded-lg shadow-none"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
