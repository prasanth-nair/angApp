import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe-model';
import { RecipeService } from '../../shared/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  selectedItem: Recipe;
  subscription: Subscription;


  recipes: Recipe[] = [];

  constructor(private _recipeService: RecipeService) { }


  ngOnInit() {
    this._recipeService.recipeSubject
      .subscribe(
        (rcp: Recipe[]) => {
          this.recipes = rcp;
        }
      )
    this._recipeService.getRecipe();

  }

}
