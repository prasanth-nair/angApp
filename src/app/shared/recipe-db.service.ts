import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe-model';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeDbService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService
  ) { }

  saveData() {
    console.log('inside db service save data')
    return this.http.post('https://ng-recipe-book-28940.firebaseio.com/data.json', this.recipeService.getRecipe())
  }

}

