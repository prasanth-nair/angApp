import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../model/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredients: Ingredients;

  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  emitValue(name: HTMLInputElement, amount: HTMLInputElement) {
    this.ingredients.name = name.value;
    this.ingredients.amount = parseInt(amount.value);
    return this.ingredients;
  }

  addIngredient() {

  }

  ngOnInit() {
  }

}
