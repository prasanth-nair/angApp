import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControlName, FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from 'src/app/model/recipe-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id: number;
  editMode: boolean = false;
  recipeForm = new FormGroup({});
  recipe: Recipe;
  subscription: Subscription;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.route.params
      .subscribe(
        (params => {
          if (params['id'] != null) {
            this.id = +params['id'];
            this.editMode = true;
          }
        })
      )
    this.initForm();
  }

  initForm() {

    if (this.editMode) {
      this.recipe = this.recipeService.getRecipeById(this.id);
      this.recipeForm = new FormGroup({
        'name': new FormControl(this.recipe.name, Validators.required),
        'imagePath': new FormControl(this.recipe.imagePath, Validators.required),
        'description': new FormControl(this.recipe.description, Validators.required)
      })
    } else {

      this.recipeForm = new FormGroup({
        'name': new FormControl(''),
        'imagePath': new FormControl(''),
        'description': new FormControl('')
      })
    }
  }



  onClear() {
    console.log('before clear')
    this.recipeForm.reset()

  }

  onCancel() {
    this.router.navigate(['Recipe']);
  }

  onSubmit() {
    let rcp = new Recipe(null, null, null, null);
    rcp.name = this.recipeForm.value.name;
    rcp.description = this.recipeForm.value.description;
    rcp.imagePath = this.recipeForm.value.imagePath;
    rcp.ingredients = this.recipeForm.value.ingredients;

    if (this.editMode) {
      this.recipeService.saveRecipe(this.id, rcp);
      this.onCancel();
    } else {
      this.recipeService.addRecipe(rcp);
      this.onCancel();
    }

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
