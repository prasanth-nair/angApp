import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../model/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] =
    [
      new Ingredients('Apple', 3),
      new Ingredients('Orange', 2),
      new Ingredients('Banana', 5),

    ];


  constructor() { }

  ngOnInit() {
  }

}
