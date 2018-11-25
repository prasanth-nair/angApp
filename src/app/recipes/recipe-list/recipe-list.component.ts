import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe-model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  selectedItem: Recipe;


  recipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) { }



  // handleClick(parmStr) {
  //   console.log('inside recipe list');
  //   this.recipes[0].description = parmStr;
  // }

  ngOnInit() {
    this.recipes = this._recipeService.getRecipe();
  }

}
