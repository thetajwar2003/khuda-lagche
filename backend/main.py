from fastapi import FastAPI, Depends, HTTPException, Query
from typing import Optional, Dict
from db.dynamodb import get_recipe_by_id, get_recipe_by_name, get_recipes_paginated

app = FastAPI()


# Public route to get a recipe by its ID
@app.get("/recipe/{recipe_id}")
async def get_recipe(recipe_id: str):
    """
    API route to fetch a recipe by its ID.
    """
    recipe = get_recipe_by_id(recipe_id)

    if not recipe:
        raise HTTPException(status_code=404, detail="Recipe not found")

    return recipe


# Route to get recipe by name
@app.get("/recipes/search")
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
async def get_recipes(limit: int = Query(10, ge=1, le=100), last_evaluated_key: Optional[Dict] = None):
    """
    API route to fetch recipes with pagination.
    """
    try:
        recipes, next_key = get_recipes_paginated(limit, last_evaluated_key)

        if not recipes:
            raise HTTPException(status_code=404, detail="No recipes found.")

        return {
            "recipes": recipes,
            "nextKey": next_key  # Return this for the next page request
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
