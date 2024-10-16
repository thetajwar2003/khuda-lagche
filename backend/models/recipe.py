from pydantic import BaseModel
from typing import Optional, List, Any


class RecipeCreate(BaseModel):
    title: str
    description: str
    cookingTime: str
    image: Optional[Any] = None
    ingredients: List[str]
    directions: List[str]
    calories: Optional[int] = None
    fat: Optional[int] = None
    carbohydrates: Optional[int] = None
    protein: Optional[int] = None
    sodium: Optional[int] = None
    rating: float
    authorId: Optional[str] = None
    comments: Optional[List[Any]] = []
