import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



const appRoutes = [
    { path: '', redirectTo: 'Recipe', pathMatch: 'full' },
    { path: 'Shopping', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})


export class AppRoutingModule { }
