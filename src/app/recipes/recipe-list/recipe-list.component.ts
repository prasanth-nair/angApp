import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe-model';
import { RecipeService } from '../../shared/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  selectedItem: Recipe;


  recipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) { }


  ngOnInit() {
    this.recipes = this._recipeService.getRecipe();
  }

}
