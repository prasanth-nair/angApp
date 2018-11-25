import { EventEmitter } from '@angular/core'
import { Recipe } from '../model/recipe-model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('Grilled Mustard-Rosemary Chicken', 'This is a test recipe',
            'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
        new Recipe('Red Peppered Deviled Eggs', 'This is a test recipe',
            'https://cb-web-assets.imgix.net/getmagicbullet/img/recipe-red-pepper-deviled-eggs.jpg')
    ];

    getRecipe() {
        return this.recipes.slice();
    }

}