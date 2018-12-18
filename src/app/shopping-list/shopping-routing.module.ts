import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingRoute: Routes = [
  { path: 'Shopping', component: ShoppingListComponent }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingRoute)
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
