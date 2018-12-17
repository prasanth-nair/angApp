import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { RecipesComponent } from '../recipes/recipes.component';


const recipeRoutes: Routes = [
    {
        path: 'Recipe', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'New', component: RecipeEditComponent },
            { path: ':id/Edit', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
        ]
    },

]


@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})

export class RecipeRoutingModule { }