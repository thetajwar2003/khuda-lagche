import React from "react";
import DisplayAllRecipes from "../DisplayAllRecipes";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

interface ProfileRecipeProps {
  recipes: any[];
}

export default function ProfileRecipe({ recipes }: ProfileRecipeProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-white">Your Recipes</h2>
        {recipes.length > 0 && (
          <Link
            href="/create-recipe"
            className="text-white border-accent border-2 hover:bg-accent-light rounded py-2 px-6 flex items-center"
          >
            <FaPlus className="w-5 h-5 mr-2" /> Add Another Recipe
          </Link>
        )}
      </div>
      {recipes.length > 0 ? (
        <DisplayAllRecipes recipes={recipes} />
      ) : (
        <div className="border-2 border-secondary p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold text-white">No Recipes Found</h3>
          <p className="text-neutral mt-2">
            You haven't posted any recipes yet.
          </p>
          <div className="flex justify-center mt-4">
            <Link
              href="/create-recipe"
              className="text-white bg-accent hover:bg-accent-light py-2 px-6 rounded flex items-center"
            >
              <FaPlus className="w-5 h-5 mr-2" /> Add Your First Recipe
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
