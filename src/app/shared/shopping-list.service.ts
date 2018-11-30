import { Injectable } from '@angular/core';
import { Ingredients } from '../model/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {


  ingredients: Ingredients[] =
    [
      new Ingredients('Apple', 3),
      new Ingredients('Orange', 2),
      new Ingredients('Banana', 5),

    ];

  getIngredients() {
    return this.ingredients;
  }


  addIngredients(ing: Ingredients) {
    this.ingredients.push(ing);
  }

  clearIngredients() {
    this.ingredients.length = 0;
  }

  addToSList(ing: Ingredients[]) {
    this.ingredients.push(...ing);
  }

  constructor() { }
}
