import React from "react";
import { formatTime } from "../../../utils/formatTime";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface MiniBlogCardProps {
  id: string;
  category: string;
  title: string;
  brief: string;
  imageUrl: string;
  author: string;
  role: string;
  timestamp: number;
}

export default function MiniBlogCard({
  id,
  category,
  title,
  brief,
  imageUrl,
  author,
  role,
  timestamp,
}: MiniBlogCardProps) {
  return (
    <div
      key={id}
      className="p-4 md:w-1/2 flex flex-col items-start border-2 rounded-lg border-neutral m-2"
    >
      <div className="flex justify-between items-center w-full">
        <span className="inline-block py-1 px-2 rounded bg-accent text-secondary text-opacity-75 text-sm font-medium tracking-widest">
          {category}
        </span>
        <span className="text-neutral text-sm font-semibold">
          {formatTime(timestamp)}
        </span>
      </div>

      <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">
        {title}
      </h2>
      <p className="leading-relaxed mb-4">{brief}</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-neutral border-opacity-75 mt-auto w-full">
        <Link
          href={`/blog/${id}`}
          className="text-secondary inline-flex items-center"
        >
          Read More
          <FaArrowRight className="ml-3" />
        </Link>
      </div>
      <a className="inline-flex items-center">
        <img
          alt="blog"
          src={imageUrl}
          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-white">{author}</span>
          <span className="text-gray-500 text-xs tracking-widest mt-0.5">
            {role}
          </span>
        </span>
      </a>
    </div>
  );
}
