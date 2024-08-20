import Link from "next/link";
import React from "react";
import RecipeCard from "./Cards/RecipeCard";
import { RecipeType } from "@/app/types/RecipeType";

interface DisplayAllRecipes {
  recipes: RecipeType[];
}

export default function DisplayAllRecipes({ recipes }: DisplayAllRecipes) {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {recipes.map((recipe: any) => (
        <Link
          href={`/recipe/${recipe["id"]}`}
          key={recipe["id"]}
          className="w-1/4"
        >
          <RecipeCard {...recipe} />
        </Link>
      ))}
    </div>
  );
}