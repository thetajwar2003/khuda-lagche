import { Blog } from "@/type/blog";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatTime } from "../../../utils/formatTime";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div
        className={`py-8 ${index == 0 ? null : "border-t-2 border-gray-800"}`}
      >
        <div className={"flex flex-wrap md:flex-nowrap items-center"}>
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img src={blog.imageUrl} alt="blog img" />
          </div>
          <div className="md:flex-grow ml-10">
            <div className="flex justify-between items-center w-full mb-10">
              <span className="inline-block py-1 px-2 rounded bg-accent text-secondary text-opacity-75 text-sm font-medium tracking-widest">
                {blog.category}
              </span>
              <span className="text-neutral text-sm font-semibold">
                {formatTime(blog.timestamp)}
              </span>
            </div>
            <h2 className="text-2xl font-medium text-white title-font mb-2">
              {blog.title}
            </h2>
            <p className="leading-relaxed">{blog.brief}</p>
            <Link
              href={`/blog/${blog.id}`}
              className="text-secondary inline-flex items-center mt-4"
            >
              Read More
              <FaArrowRight className="ml-3" />
            </Link>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <div className="md:w-72 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            {/* <img src={blog.imageUrl} alt="blog img" /> */}
          </div>
          <img
            alt="author"
            src={blog.imageUrl} // Replace with your author's image URL
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col">
            <span className="font-medium text-white text-md">
              {blog.author}
            </span>
            <span className="text-gray-500 text-sm">{blog.role}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
