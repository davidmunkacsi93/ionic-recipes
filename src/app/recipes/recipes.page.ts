import { Component, OnDestroy, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage {
  recipes : Recipe[];

  constructor(private recipesService : RecipesService) { }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
