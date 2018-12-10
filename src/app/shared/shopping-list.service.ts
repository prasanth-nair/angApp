import { Injectable } from '@angular/core';
import { Ingredients } from '../model/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  startEditing = new Subject<any>();


  ingredients: Ingredients[] =
    [
      new Ingredients('Apple', 3),
      new Ingredients('Orange', 2),
      new Ingredients('Banana', 5),

    ];

  getIngredients() {
    return this.ingredients;
  }

  getIngredientByIndex(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ing: Ingredients) {
    this.ingredients[index] = ing;
  }

  addIngredients(ing: Ingredients) {
    this.ingredients.push(ing);
  }

  deleteIngredients(index: number) {
    this.ingredients.splice(index, 1);
  }

  editIngredients(index: number, ing: Ingredients) {
    this.ingredients[index] = ing;
  }

  clearIngredients() {
    this.ingredients.length = 0;
  }

  onEditItem(index: number) {
    this.startEditing.next(index)
  }

  addToSList(ing: Ingredients[]) {
    this.ingredients.push(...ing);
  }

  constructor() { }
}
