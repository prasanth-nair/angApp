import { Component, OnInit, Input } from '@angular/core';
import { Ingredients } from '../model/ingredients.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() newIngredient: Ingredients;

  ingredients: Ingredients[] = [];


  constructor(private _slService: ShoppingListService) { }




  ngOnInit() {
    this.ingredients = this._slService.getIngredients();
  }

}
