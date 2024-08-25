"use client";

import React, { useState } from "react";
import EditRecipe from "@/components/CreateRecipe/EditRecipe";
import PreviewRecipe from "@/components/CreateRecipe/Preview";
import { RecipeFormValues } from "@/types/RecipeFormValues";

export default function CreateRecipePage() {
  const initialRecipeState: RecipeFormValues = {
    title: "",
    description: "",
    cookingTime: "",
    image: null,
    ingredients: [""],
    directions: [""],
    calories: 0,
    fat: 0,
    carbohydrates: 0,
    protein: 0,
    sodium: 0,
  };

  const [detailedRecipe, setDetailedRecipe] =
    useState<RecipeFormValues>(initialRecipeState);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setDetailedRecipe((prev) => ({
        ...prev,
        image: file,
      }));
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
    }
  };

  const handleRecipeSubmit = (data: RecipeFormValues) => {
    console.log("Recipe created:", data);
    // Logic to handle the submission of the form

    // Clear all data after submission
    setDetailedRecipe(initialRecipeState);
    setImagePreviewUrl(null);
  };

  return (
    <div className="bg-primary w-full min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-4">
        <EditRecipe
          onImageUpload={handleImageUpload}
          onSubmit={handleRecipeSubmit}
          detailedRecipe={detailedRecipe}
          setDetailedRecipe={setDetailedRecipe}
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <PreviewRecipe
          detailedRecipe={detailedRecipe}
          imagePreviewUrl={imagePreviewUrl}
        />
      </div>
    </div>
  );
}
