import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.dessertfortwo.com/wp-content/uploads/2014/12/Schnitzel-2.jpg',
      ingredients: [ 'French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://smashedpeasandcarrots.com/wp-content/uploads/2018/03/Instant-Pot-Spaghetti7.jpg',
      ingredients: [ 'Spaghetti', 'Tomato', 'Basil']
    },
  ]

  constructor() { }

  getAllRecipes() {
    return [... this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ... this.recipes.find(r => r.id === recipeId) };
  }
}
