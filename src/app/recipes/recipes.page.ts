import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {
  }

}
