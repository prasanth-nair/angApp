import { Recipe } from '../model/recipe-model';
import { Ingredients } from '../model/ingredients.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
    recipeSubject = new Subject<Recipe[]>();



    private recipes: Recipe[] = [
        new Recipe('Grilled Mustard-Rosemary Chicken',
            'This is a test recipe',
            'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg',
            [
                new Ingredients('Chicken', 2),
                new Ingredients('Rosemary', 1),
            ]),
        new Recipe('Red Peppered Deviled Eggs', 'This is a test recipe',
            'https://cb-web-assets.imgix.net/getmagicbullet/img/recipe-red-pepper-deviled-eggs.jpg',
            [
                new Ingredients('Egg', 12),
                new Ingredients('Mayo', 1),
            ])


    ];
    getRecipe2() {
        return this.recipes;
    }

    getRecipe() {
        this.recipeSubject.next(this.recipes);
    }

    getRecipeById(id: number) {
        return this.recipes[id];
    }

    setRecipeList(recipeList: Recipe[]) {
        this.recipes = recipeList;
        this.recipeSubject.next(this.recipes);
    }

    saveRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        console.log('saving after edit')
        console.log(JSON.stringify(this.recipes))
        this.recipeSubject.next(this.recipes);
    }


}