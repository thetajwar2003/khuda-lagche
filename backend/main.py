from fastapi import FastAPI, Depends, HTTPException, Query, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from typing import Optional, Dict
import os
from zipfile import ZipFile
import json
from db.dynamodb import get_recipe_by_id, get_recipe_by_name, get_recipes_paginated


app = FastAPI()

# Allow CORS
origins = [
    "http://localhost:3000",
    "https://khuda-lagche.vercel.app/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Public route to get a recipe by its ID
@app.get("/recipes/{recipe_id}")
async def get_recipe(recipe_id: str):
    """
    API route to fetch a recipe by its ID.
    """
    recipe = get_recipe_by_id(recipe_id)

    if not recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")

    return recipe


# Route to get recipe by name
@app.get("/recipes/search/{name}")
async def search_recipe(name: str):
    """
    API route to fetch recipes by name.
    """
    recipes = get_recipe_by_name(name)

    if not recipes:
        raise HTTPException(
            status_code=404, detail="No recipes found with the given name")

    return recipes

# Route to get recipe by pagination


@app.get("/recipes/")
async def get_recipes(
    limit: int = Query(10, ge=1, le=100),
    last_evaluated_key: Optional[str] = None
):
    """
    API route to fetch recipes with pagination.
    """
    try:
        # Parse the last_evaluated_key if provided
        parsed_key = json.loads(
            last_evaluated_key) if last_evaluated_key else None

        # Call the helper function with the parsed key
        recipes, next_key = get_recipes_paginated(limit, parsed_key)

        if not recipes:
            raise HTTPException(status_code=404, detail="No recipes found.")

        return {
            "recipes": recipes,
            "nextKey": next_key  # Return this for the next page request
        }

    except json.JSONDecodeError:
        raise HTTPException(
            status_code=400, detail="Invalid last_evaluated_key format. Must be a valid JSON string.")

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


handler = Mangum(app)
