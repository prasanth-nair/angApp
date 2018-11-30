import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe-model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() passedRecipe: Recipe;


  constructor(private _shoppingService: ShoppingListService) { }

  addToSl() {
    this._shoppingService.addToSList(this.passedRecipe.ingredients);
  }

  ngOnInit() { }

}
