"use client";
import { useState } from "react";

import { detailedRecipe } from "@/mock/detailedRecipe";

import Author from "@/components/Recipe/Author";
import IngredientsAndDirections from "@/components/Recipe/IngredientsAndDirections";
import Hero from "@/components/Recipe/Hero";
import Rating from "@/components/Recipe/Rating";
import Comment from "@/components/Recipe/Comment";
import Reviews from "@/components/Recipe/Reviews";
import NutritionalInfo from "@/components/Recipe/NutritionalInfo";

export default function RecipePage() {
  const [showNutrition, setShowNutrition] = useState(false);

  const toggleNutritionInfo = () => {
    setShowNutrition(!showNutrition);
  };

  return (
    <main className="bg-primary min-h-screen py-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Column - Hero, Ingredients, Directions */}
        <div className="w-full md:w-2/3">
          {/* Hero Section */}
          <Hero {...detailedRecipe} />

          {/* Ingredients and Directions Section */}
          <IngredientsAndDirections
            ingredients={detailedRecipe.ingredients}
            directions={detailedRecipe.directions}
          />

          {/* Nutrition Information Section */}
          <div className="bg-secondary rounded-lg shadow-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Nutritional Information
            </h2>
            <button
              onClick={toggleNutritionInfo}
              className="text-white bg-accent hover:bg-accent-dark py-2 px-4 rounded focus:outline-none"
            >
              {showNutrition ? "Hide" : "Show"} Nutritional Information
            </button>
            {showNutrition && (
              <NutritionalInfo
                nutritionalInfo={detailedRecipe.nutritionalInformation}
              />
            )}
          </div>
        </div>

        {/* Right Column - Author, Rating, Comments */}
        <div className="w-full md:w-1/3 md:ml-10 mt-8 md:mt-0">
          {/* Author Section */}
          <Author {...detailedRecipe.author} />

          {/* Rating Section */}
          <Rating {...detailedRecipe} />

          {/* Comment Section */}
          <Comment />

          {/* Reviews Section */}
          <Reviews reviews={detailedRecipe.reviews} />
        </div>
      </div>
    </main>
  );
}
