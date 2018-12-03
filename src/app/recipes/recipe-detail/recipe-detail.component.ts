import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe-model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';



@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() 
  passedRecipe: Recipe;
  passedId: number;

  constructor(private _shoppingService: ShoppingListService,
    private _recipeService: RecipeService,
    private _route: ActivatedRoute) { }

  addToSl() {
    this._shoppingService.addToSList(this.passedRecipe.ingredients);
  }

  ngOnInit() {
    this.passedId = +this._route.paramMap
      .subscribe(params => {
        this.passedId = parseInt(params.get('id'));
        this.passedRecipe = this._recipeService.getRecipeById(this.passedId);
      }
      )
  }





}
