import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../model/ingredients.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  errorFlag: boolean = false;

  @ViewChild('ingName') nameInput: ElementRef;
  @ViewChild('ingAmount') amountInput: ElementRef;


  constructor(private _slService: ShoppingListService) { }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    const itemName = this.nameInput.nativeElement.value;
    const itemAmount = parseInt(this.amountInput.nativeElement.value);

    if (itemName != '' && itemAmount != 0 && !isNaN(itemAmount)) {
      const newItem = new Ingredients(itemName, itemAmount);
      this._slService.addIngredients(newItem);
      this.errorFlag = false;

    } else {
      this.errorFlag = true;
    }
  }

  clrIng() {
    this._slService.clearIngredients();
  }

  ngOnInit() {
  }

}
