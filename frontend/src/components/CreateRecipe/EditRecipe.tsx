"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RecipeFormValues } from "@/types/RecipeFormValues";
import TextInput from "@/components/FormComponents/TextInput";
import TextareaInput from "@/components/FormComponents/TextareaInput";
import FileInput from "@/components/FormComponents/FileInput";
import FieldArrayInput from "@/components/FormComponents/FieldArrayInput";

interface EditRecipeProps {
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (data: RecipeFormValues) => void;
  detailedRecipe: RecipeFormValues;
  setDetailedRecipe: React.Dispatch<React.SetStateAction<RecipeFormValues>>;
}

export default function EditRecipe({
  onImageUpload,
  onSubmit,
  detailedRecipe,
  setDetailedRecipe,
}: EditRecipeProps) {
  const { register, handleSubmit, control, setValue } =
    useForm<RecipeFormValues>({
      defaultValues: detailedRecipe,
    });

  useEffect(() => {
    Object.keys(detailedRecipe).forEach((key) => {
      setValue(
        key as keyof RecipeFormValues,
        detailedRecipe[key as keyof RecipeFormValues]
      );
    });
  }, [detailedRecipe, setValue]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetailedRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: "ingredients" | "directions"
  ) => {
    const { value } = e.target;
    const newArray = [...detailedRecipe[field]];
    newArray[index] = value;
    setDetailedRecipe((prev) => ({
      ...prev,
      [field]: newArray,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container px-5 py-24 mx-auto w-full max-w-screen-lg bg-primary p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-white mb-8">Create Recipe</h2>

      <TextInput
        label="Title"
        name="title"
        value={detailedRecipe.title}
        placeholder="Recipe Title"
        onChange={handleChange}
      />

      <TextareaInput
        label="Description"
        name="description"
        value={detailedRecipe.description}
        placeholder="Recipe Description"
        onChange={handleChange}
      />

      <TextInput
        label="Cooking Time"
        name="cookingTime"
        value={detailedRecipe.cookingTime}
        placeholder="Cooking Time (e.g., 1 hour)"
        onChange={handleChange}
      />

      <FileInput
        label="Upload Image"
        name="image"
        onChange={(e) => {
          onImageUpload(e);
          handleChange(e);
        }}
      />

      <div className="mb-4">
        <label className="block text-lg font-bold text-white mb-2">
          Ingredients
        </label>
        {detailedRecipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleArrayChange(e, index, "ingredients")}
            className="w-full p-2 rounded bg-gray-700 border border-accent text-white mb-2"
            placeholder={`Ingredient ${index + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setDetailedRecipe((prev) => ({
              ...prev,
              ingredients: [...prev.ingredients, ""],
            }))
          }
          className="mt-2 text-white bg-accent hover:bg-accent-light py-2 px-4 rounded"
        >
          Add Ingredient
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-bold text-white mb-2">
          Directions
        </label>
        {detailedRecipe.directions.map((direction, index) => (
          <input
            key={index}
            type="text"
            value={direction}
            onChange={(e) => handleArrayChange(e, index, "directions")}
            className="w-full p-2 rounded bg-gray-700 border border-accent text-white mb-2"
            placeholder={`Direction ${index + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() =>
            setDetailedRecipe((prev) => ({
              ...prev,
              directions: [...prev.directions, ""],
            }))
          }
          className="mt-2 text-white bg-accent hover:bg-accent-light py-2 px-4 rounded"
        >
          Add Direction
        </button>
      </div>

      {/* Nutritional Information */}
      <div className="mb-4">
        <label className="block text-lg font-bold text-white mb-2">
          Nutritional Information
        </label>
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            label="Calories"
            name="calories"
            value={String(detailedRecipe.calories)}
            placeholder="Calories"
            onChange={handleChange}
          />
          <TextInput
            label="Fat"
            name="fat"
            value={String(detailedRecipe.fat)}
            placeholder="Fat"
            onChange={handleChange}
          />
          <TextInput
            label="Carbohydrates"
            name="carbohydrates"
            value={String(detailedRecipe.carbohydrates)}
            placeholder="Carbohydrates"
            onChange={handleChange}
          />
          <TextInput
            label="Protein"
            name="protein"
            value={String(detailedRecipe.protein)}
            placeholder="Protein"
            onChange={handleChange}
          />
          <TextInput
            label="Sodium"
            name="sodium"
            value={String(detailedRecipe.sodium)}
            placeholder="Sodium"
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded bg-accent text-neutral font-bold hover:bg-pink-700 transition-colors"
      >
        Create Recipe
      </button>
    </form>
  );
}
