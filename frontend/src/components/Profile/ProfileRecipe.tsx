import React from "react";
import DisplayAllRecipes from "../DisplayAllRecipes";
import { FaPlus } from "react-icons/fa";

interface ProfileRecipeProps {
  recipes: any[];
}

export default function ProfileRecipe({ recipes }: ProfileRecipeProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">Your Recipes</h2>
      {recipes.length > 0 ? (
        <DisplayAllRecipes recipes={recipes} />
      ) : (
        <div className="bg-secondary p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-white">No Recipes Found</h3>
          <p className="text-neutral mt-2">
            You haven't posted any recipes yet.
          </p>
          <button className="mt-4 text-white bg-accent hover:bg-accent-light py-2 px-6 rounded-full flex items-center">
            <FaPlus className="w-5 h-5 mr-2" /> Add Your First Recipe
          </button>
        </div>
      )}
    </div>
  );
}
