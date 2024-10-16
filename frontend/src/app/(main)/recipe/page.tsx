"use client";
import React from "react";
import { mockRecipes } from "@/mock/recipes";
import DisplayAllRecipes from "@/components/DisplayAllRecipes";
// list of all recipes with a filtering option -> trending and popular page routes here with query param: ?=trending

export default function RecipePage() {
  return (
    <div className="container px-5 py-12 w-screen">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          All Recipes
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base w-full">
          Here&apos;s a list of all of our recipes in our database!
        </p>
      </div>
      <DisplayAllRecipes recipes={mockRecipes} />
    </div>
  );
}
