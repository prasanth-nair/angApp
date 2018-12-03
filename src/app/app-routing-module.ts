import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { componentFactoryName } from '@angular/compiler';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes = [
    { path: '', redirectTo: 'Recipe', pathMatch: 'full' },
    {
        path: 'Recipe', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'New', component: RecipeEditComponent },
            { path: ':id/Edit', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
        ]
    },
    { path: 'Shopping', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
