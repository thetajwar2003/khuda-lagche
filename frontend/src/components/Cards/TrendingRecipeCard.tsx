import React from "react";

interface TrendingRecipeCardProps {
  id: string;
  imgUrl: string;
  title: string;
  category: string;
}

export default function TrendingRecipeCard({
  id,
  imgUrl,
  title,
  category,
}: TrendingRecipeCardProps) {
  return (
    <div className="flex flex-col border-2 border-gray-800 m-2 rounded-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover object-center" // Set a fixed height for images
          src={imgUrl}
          alt="recipe"
        />
      </div>
      <div className="p-6 flex-grow">
        <h2 className="inline-block py-1 px-2 rounded mb-1 bg-accent text-secondary text-opacity-75 text-sm font-medium tracking-widest">
          {category}
        </h2>
        <h1 className="title-font text-2xl font-medium text-white">{title}</h1>
      </div>
    </div>
  );
}
