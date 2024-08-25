"use client";

import React from "react";
import { RecipeFormValues } from "@/types/RecipeFormValues";

interface PreviewRecipeProps {
  detailedRecipe: RecipeFormValues;
  imagePreviewUrl: string | null; // Add the image preview URL as a prop
}

export default function PreviewRecipe({
  detailedRecipe,
  imagePreviewUrl,
}: PreviewRecipeProps) {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-white mb-8">
        {detailedRecipe.title}
      </h2>
      <p className="text-white mb-4">{detailedRecipe.description}</p>
      <p className="text-white mb-4">
        Cooking Time: {detailedRecipe.cookingTime}
      </p>
      {imagePreviewUrl && (
        <img
          src={imagePreviewUrl}
          alt="Recipe"
          className="w-full h-64 object-cover rounded-lg"
        />
      )}

      <div className="flex flex-wrap mt-4">
        <div className="w-full md:w-1/2 p-2">
          <h3 className="text-xl font-bold text-white">Directions</h3>
          <ol className="list-decimal list-inside text-white">
            {detailedRecipe.directions.map((direction, index) => (
              <li key={index}>{direction}</li>
            ))}
          </ol>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <h3 className="text-xl font-bold text-white">Ingredients</h3>
          <ul className="list-disc list-inside text-white">
            {detailedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">
          Nutritional Information
        </h3>
        <p className="text-white">Calories: {detailedRecipe.calories}</p>
        <p className="text-white">Fat: {detailedRecipe.fat}</p>
        <p className="text-white">
          Carbohydrates: {detailedRecipe.carbohydrates}
        </p>
        <p className="text-white">Protein: {detailedRecipe.protein}</p>
        <p className="text-white">Sodium: {detailedRecipe.sodium}</p>
      </div>
    </div>
  );
}
