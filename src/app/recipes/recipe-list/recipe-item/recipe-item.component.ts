import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe-model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  debug;
  @Input() recipeItem : Recipe;

  @Output()  onClick = new EventEmitter<string>(); 
  
  emitValue() {
    return ('Hello There.. I see you...');
  }

  
  constructor() { }

  ngOnInit() {
  }

}
