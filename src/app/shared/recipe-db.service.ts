import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../model/recipe-model';
import { RecipeService } from './recipe.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipeDbService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService
  ) { }

  saveData() {
    return this.http.put('https://ng-recipe-book-28940.firebaseio.com/data.json', this.recipeService.getRecipe2())
  }

  recipeList: Recipe[];

  retriveData() {
    this.http.get<Recipe[]>('https://ng-recipe-book-28940.firebaseio.com/data.json')
      .subscribe(
        (data) => {
          this.recipeList = data;
          this.recipeService.setRecipeList(data);
        }
      )
  }

}

