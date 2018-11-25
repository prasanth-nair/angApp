import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe-model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {


  innerSelectedRecipe: Recipe;


  constructor(private _recipeService: RecipeService) { }

  ngOnInit() {
    this._recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.innerSelectedRecipe = recipe;
        }
      )
  }

}
