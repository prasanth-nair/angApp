import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../model/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @Output() newIngredient = new EventEmitter<Ingredients>();

  @ViewChild('ingName') nameInput: ElementRef;
  @ViewChild('ingAmount') amountInput: ElementRef;


  constructor() { }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    const itemName = this.nameInput.nativeElement.value;
    const itemAmount = parseInt(this.amountInput.nativeElement.value);
    const newItem = new Ingredients(itemName, itemAmount);
    this.newIngredient.emit(newItem);
  }



  ngOnInit() {
  }

}
