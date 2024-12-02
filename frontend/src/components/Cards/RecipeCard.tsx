import React from "react";
import { isValidUrl } from "../../../utils/validUrl";

interface RecipeCardProps {
  recipe_id: string;
  images: string;
  name: string;
  recipe_category: string;
}

export default function RecipeCard({
  recipe_id,
  images,
  name,
  recipe_category,
}: RecipeCardProps) {
  return (
    <div
      className="xs:w-1/2 flex flex-col border-2 border-gray-800 m-2 rounded-lg overflow-hidden h-full"
      id={recipe_id}
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover object-center"
          src={isValidUrl(images) ? images : "https://dummyimage.com/720x400"}
          alt="recipe"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {recipe_category && (
            <>
              <h2 className="inline-block py-1 px-2 mr-2 rounded mb-1 bg-accent text-secondary text-opacity-75 text-sm font-medium tracking-widest">
                {recipe_category}
              </h2>
            </>
          )}
          <h1 className="title-font text-2xl font-medium text-white">{name}</h1>
        </div>
      </div>
    </div>
  );
}
