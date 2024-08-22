"use client";
import React from "react";
import { mockRecipes } from "@/mock/recipes";
import Bio from "@/components/Profile/Bio";
import ProfileRecipe from "@/components/Profile/ProfileRecipe";

const pfp = "https://picsum.photos/200/200"; // Replace with actual image path
const name = "John Doe";
const location = "Hixson, Tennessee";
const followers = 305;
const recipeCount = 770;
const bio = `I came to this site in March of 2004. It was then called Recipezaar. This site was the first online site that I ever joined. I first popped in 2003 while searching for a Peach Cobbler Recipe.`;

export default function ProfilePage() {
  return (
    <div className="bg-primary min-h-screen py-12 px-5 container">
      <div className="container mx-auto">
        {/* Profile Header */}
        <div className="pb-6 border-b-2 border-secondary mb-6">
          <Bio {...{ pfp, name, location, followers, recipeCount, bio }} />
        </div>

        {/* Recipes Section */}
        <ProfileRecipe recipes={mockRecipes} />
      </div>
    </div>
  );
}
