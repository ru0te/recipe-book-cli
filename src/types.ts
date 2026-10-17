export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  difficulty: string;
  caloriesPerServing: number;
  prepTimeMinutes: number;
};
