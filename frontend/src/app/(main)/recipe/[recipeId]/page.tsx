"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { detailedRecipe as mockRecipe } from "@/mock/detailedRecipe";

import Author from "@/components/Recipe/Author";
import IngredientsAndDirections from "@/components/Recipe/IngredientsAndDirections";
import Hero from "@/components/Recipe/Hero";
import Rating from "@/components/Recipe/Rating";
import Comment from "@/components/Recipe/Comment";
import Reviews from "@/components/Recipe/Reviews";
import NutritionalInfo from "@/components/Recipe/NutritionalInfo";

export default function RecipePage() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<any>(null); // Recipe data from the API
  const [isLoading, setIsLoading] = useState(true);
  const [showNutrition, setShowNutrition] = useState(false);

  useEffect(() => {
    if (!recipeId) return; // Wait until recipeId is available

    async function fetchRecipe() {
      try {
        const response = await fetch(
          `https://khuda-lagche-e12eb852bbf5.herokuapp.com/recipes/${recipeId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipe data");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
        setRecipe(mockRecipe); // Use mock recipe on error
      } finally {
        setIsLoading(false); // Stop loading spinner
      }
    }

    fetchRecipe();
  }, [recipeId]); // Dependency array includes recipeId

  const toggleNutritionInfo = () => {
    setShowNutrition(!showNutrition);
  };

  // Ensure fallback values for any missing attributes
  const detailedRecipe = recipe
    ? {
        ...mockRecipe, // Start with mockRecipe as a fallback
        ...recipe, // Override with actual recipe data
        author: {
          name: recipe.author_name || mockRecipe.author.name,
        },
        nutritionalInformation: {
          ...mockRecipe.nutritionalInformation,
          calories:
            recipe.calories || mockRecipe.nutritionalInformation.calories,
          fatContent:
            recipe.fat_content || mockRecipe.nutritionalInformation.fat,
          proteinContent:
            recipe.protein_content || mockRecipe.nutritionalInformation.protein,
          carbohydrateContent:
            recipe.carbohydrate_content ||
            mockRecipe.nutritionalInformation.carbohydrates,
          sodiumContent:
            recipe.sodium_content || mockRecipe.nutritionalInformation.sodium,
          // sugarContent:
          //   recipe.sugar_content ||
          //   mockRecipe.nutritionalInformation.sug,
          // fiberContent:
          //   recipe.fiber_content ||
          //   mockRecipe.nutritionalInformation.,
          // saturatedFatContent:
          //   recipe.saturated_fat_content ||
          //   mockRecipe.nutritionalInformation.saturatedFatContent,
        },
      }
    : mockRecipe;

  // Render loading state
  if (isLoading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <main className="bg-primary min-h-screen py-10">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Column - Hero, Ingredients, Directions */}
        <div className="w-full md:w-2/3">
          {/* Hero Section */}
          <Hero {...detailedRecipe} />

          {/* Ingredients and Directions Section */}
          <IngredientsAndDirections
            ingredients={
              recipe.ingredients
                ? typeof recipe.ingredients === "string"
                  ? JSON.parse(recipe.ingredients.replace(/'/g, '"'))
                  : recipe.ingredients
                : []
            }
            directions={
              recipe.recipe_instructions
                ? recipe.recipe_instructions
                : ["No instructions available"]
            }
          />

          {/* Nutrition Information Section */}
          <div className="border-2 border-secondary rounded-lg shadow-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Nutritional Information
            </h2>
            <button
              onClick={toggleNutritionInfo}
              className="text-white bg-accent hover:bg-accent-light py-2 px-4 rounded focus:outline-none"
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
