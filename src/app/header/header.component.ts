import { Component, OnInit } from '@angular/core';

import { DropdownDirective } from '../shared/dropdown.directive';
import { RecipeDbService } from '../shared/recipe-db.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private db: RecipeDbService) { }




  ngOnInit() {
  }

  saveData() {
    this.db.saveData()
      .subscribe(
        (res: Response) => { console.log('saved data -> ' + res) }
      )

  }

  retrieveData() {
    this.db.retriveData()
  }

}
