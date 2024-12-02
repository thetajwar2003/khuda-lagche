"use client";
import React, { useState } from "react";
import { FaSearch, FaUpload } from "react-icons/fa";

import SecondaryButton from "@/components/SecondaryButton";
import UploadModal from "@/components/UploadModal";

import DisplayAllRecipes from "@/components/DisplayAllRecipes";

export default function Search() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]); // Store recipes from API
  const [showDescription, setShowDescription] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleSearchButton = async () => {
    if (!search.trim()) {
      console.error("Search term is empty");
      return;
    }

    try {
      const response = await fetch(
        `https://khuda-lagche-e12eb852bbf5.herokuapp.com/recipes/search/${encodeURIComponent(
          search
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();
      setRecipes(data); // Update recipes state with API data
      setShowDescription(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleUpload = () => {
    setOpenModal(!openModal);
  };

  return (
    <main>
      <section>
        <div className="container px-5 py-24 mx-auto w-screen">
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 sm:space-x-4 sm:space-y-0 space-y-4 mb-12 items-center">
            {/* SECTION: Search Bar */}
            <div className="relative sm:mb-0 flex-grow w-full ">
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full text-neutral bg-gray-50 dark:bg-gray-700 bg-opacity-40 rounded border border-neutral focus:border-accent focus:ring-2 focus:ring-accent focus:bg-transparent text-base outline-none py-1 px-3 leading-8 hover:bg-gray-800 transition-colors duration-200 ease-in-out"
                placeholder="What are you looking for?"
                onChange={handleSearchInput}
                value={search}
              />
            </div>

            <SecondaryButton body={<FaSearch />} onClick={handleSearchButton} />
            <SecondaryButton body={<FaUpload />} onClick={handleUpload} />
          </div>

          {/* SECTION: Body */}
          {showDescription && (
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Advanced Recipe Search
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base w-full">
                Search up your favorite dish, a blog, or even upload an image to
                generate a recipe!
              </p>
            </div>
          )}
          {openModal && <UploadModal />}
          {recipes.length > 0 && <DisplayAllRecipes recipes={recipes} />}
        </div>
      </section>
    </main>
  );
}
