import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
    { path: '', redirectTo: 'Recipe', pathMatch: 'full' },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
