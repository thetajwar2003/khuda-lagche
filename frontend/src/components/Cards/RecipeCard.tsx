import React from "react";

interface RecipeCardProps {
  id: string;
  imgUrl: string;
  title: string;
  category: string;
}

export default function RecipeCard({
  id,
  imgUrl,
  title,
  category,
}: RecipeCardProps) {
  return (
    <div
      className="xs:w-1/2 flex flex-col border-2 border-gray-800 m-2 rounded-lg overflow-hidden h-full"
      id={id}
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover object-center"
          src={imgUrl}
          alt="recipe"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="inline-block py-1 px-2 rounded mb-1 bg-accent text-secondary text-opacity-75 text-sm font-medium tracking-widest">
            {category}
          </h2>
          <h1 className="title-font text-2xl font-medium text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
