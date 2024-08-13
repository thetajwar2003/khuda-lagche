export interface RecipeType {
  id: string;
  title: string;
  category: string;
  imgUrl: string;
  trending?: boolean;
  popular?: boolean;
  seasonal: boolean;
}
