export interface Recipe {
  title: string;
  description: string;
  cookingTime: string;
  image?: string;
  ingredients: string[];
  directions: string[];
  calories?: number;
  fat?: number;
  carbohydrates?: number;
  protein?: number;
  sodium?: number;
  rating: number;
  authorId?: string;
  comments?: any[];
}
