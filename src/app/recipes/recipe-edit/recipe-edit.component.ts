import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControlName, FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from 'src/app/model/recipe-model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params => {
          if (params['id'] != null) {
            this.id = +params['id'];
            this.editMode = true;
            this.initForm();
          }
        })
      )
  }

  initForm() {

    if (this.editMode) {
      this.recipe = this.recipeService.getRecipeById(this.id);
      // console.log(JSON.stringify(recipe));
      this.recipeForm = new FormGroup({
        'name': new FormControl(this.recipe.name),
        'imagePath': new FormControl(this.recipe.imagePath),
        'description': new FormControl(this.recipe.description)
      })
    }
  }

  onSubmit() {
    console.log(this.recipeForm.value);
  }

}
