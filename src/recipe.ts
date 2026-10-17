import type { Recipe } from './types.js';
import { toTitleCase } from './utils.js';

async function getRecipes(num: number) {
  try {
    const res = await fetch(`https://dummyjson.com/recipes?limit=${num}`);
    const data = await res.json();
    const recipesArray = data.recipes;
    const recipeList = recipesArray.map((recipe: Recipe) => ({
      id: recipe.id,
      name: recipe.name,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      difficulty: recipe.difficulty,
      caloriesPerServing: recipe.caloriesPerServing,
      prepTimeMinutes: recipe.prepTimeMinutes,
    }));
    return recipeList;
  } catch (err) {
    console.error('Error fetching data', err);
    return [];
  }
}

function listRecipes(recipes: Recipe[]) {
  recipes.forEach((recipe: Recipe) => {
    console.log(`Name: ${recipe.name}`);

    console.log('Ingredients: ');
    recipe.ingredients.forEach((ing) => {
      console.log(`- ${ing}`);
    });

    console.log('Instructions: ');
    recipe.instructions.forEach((ins, index) => {
      console.log(`${index + 1}. ${ins}`);
    });

    console.log(`Difficulty: ${recipe.difficulty}`);
    console.log(`Calories: ${recipe.caloriesPerServing}`);
    console.log(`Preparation Time: ${recipe.prepTimeMinutes} miutes`);
    console.log('-------------------------');
  });
}

export async function handleRecipes(num: number) {
  const data: Recipe[] = await getRecipes(num);
  listRecipes(data);
}

export async function searchRecipes(
  time: number,
  calories: number,
  difficulty: string,
  num: number,
) {
  const data: Recipe[] = await getRecipes(num);
  const filteredRecipes = data.filter((recipe) => {
    return (
      recipe.prepTimeMinutes <= time &&
      recipe.caloriesPerServing <= calories &&
      recipe.difficulty === toTitleCase(difficulty)
    );
  });
  listRecipes(filteredRecipes);
}
