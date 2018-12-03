import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;


  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params => {
          if (params['id'] != null) {
            this.id = +params['id'];
            this.editMode = true;
          }
        })
      )
  }

}
