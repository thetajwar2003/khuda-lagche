import React from "react";

interface IngredientsAndDirectionsProps {
  ingredients: string[];
  directions: string[];
}

export default function IngredientsAndDirections({
  ingredients,
  directions,
}: IngredientsAndDirectionsProps) {
  return (
    <div className="bg-secondary rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-semibold text-white mb-4">Ingredients</h2>
      <ul className="list-disc list-inside text-white mb-6">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold text-white mb-4">Directions</h2>
      <ol className="list-decimal list-inside text-white space-y-2">
        {directions.map((direction, index) => (
          <li key={index}>{direction}</li>
        ))}
      </ol>
    </div>
  );
}
