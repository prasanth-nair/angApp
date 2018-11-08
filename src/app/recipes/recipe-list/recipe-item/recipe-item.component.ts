import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe-model';
import { SelectorContext } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  debug;
  @Input() recipeItems: Recipe[];
  @Output() SelectedItem = new EventEmitter<Recipe>();

  constructor() { }

  clickHandle(rcp: Recipe) {
    console.log("insite click handle");
    this.SelectedItem.emit(rcp);
  }
  ngOnInit() {
  }

}
