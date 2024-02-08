"use client";
import React from "react";
import { mockBlogs } from "@/mock/blogs";
import BlogCard from "@/components/Cards/BlogCard";
// list all the blogs in chronological order

export default function BlogPage() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden w-full">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          {mockBlogs.map((blog, index) => (
            <BlogCard blog={blog} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
