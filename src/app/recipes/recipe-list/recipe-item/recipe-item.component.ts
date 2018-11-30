import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe-model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  debug;
  @Input() recipeItems: Recipe[];

  constructor(private _recipeService: RecipeService) { }

  onSelected(rcp: Recipe) {
    //calling the event emitter from within the service, and passing 
    // the parameter
    this._recipeService.recipeSelected.emit(rcp);
  }
  ngOnInit() {
  }

}
