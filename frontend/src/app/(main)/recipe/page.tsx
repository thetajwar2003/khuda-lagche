"use client";
import React, { useState, useEffect } from "react";
import { Recipe } from "../../../types/RecipeType"; // Path to your Recipe interface
import DisplayAllRecipes from "@/components/DisplayAllRecipes";
import config from "../../../../utils/config";

export default function RecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const recipesPerPage = 12;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `${config.apiUrl}/recipes/?limit=${recipesPerPage}`
        );
        const data = await response.json();

        setRecipes(data.recipes);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    fetchRecipes();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
      <DisplayAllRecipes recipes={recipes} />
      <div className="flex justify-center mt-6">
        {/* Pagination Controls */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
