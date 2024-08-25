export type RecipeFormValues = {
  title: string;
  description: string;
  cookingTime: string;
  image: any | File;
  ingredients: string[];
  directions: string[];
  calories: number;
  fat: number;
  carbohydrates: number;
  protein: number;
  sodium: number;
};
