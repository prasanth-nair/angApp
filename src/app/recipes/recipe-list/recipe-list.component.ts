import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe-model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

   recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe',
    'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
    new Recipe('Test Recipe', 'This is a test recipe',
    'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')
  ];

 

  constructor() {
    console.log('inside constructor');
    console.log(this.recipes);
   }

  ngOnInit() {
  }

}
