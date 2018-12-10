import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from '../../model/ingredients.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  editMode: boolean = false;
  editIndex: number;
  editIngredient: Ingredients;

  @ViewChild('f') slForm: NgForm;

  constructor(private _slService: ShoppingListService) { }

  onSubmit(_form: NgForm) {
    console.log(_form);
    const newItem = new Ingredients(_form.value.name, _form.value.amount);

    if (this.editMode) {
      this._slService.editIngredients(this.editIndex, newItem)
    }
    else {
      this._slService.addIngredients(newItem);
    }
    this.onClear();
  }


  onDelete(_form: NgForm) {
    if (_form.valid) {
      this._slService.deleteIngredients(this.editIndex)
      this.onClear();
    }
  }




  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnInit() {
    this.subscription = this._slService.startEditing
      .subscribe(
        (index) => {
          this.editMode = true;
          this.editIndex = index;
          this.editIngredient = this._slService.ingredients[index];
          this.slForm.form.setValue(
            {
              name: this.editIngredient.name,
              amount: this.editIngredient.amount
            }
          );

        }

      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
