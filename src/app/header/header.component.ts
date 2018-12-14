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
    console.log('inside header save data')
    this.db.saveData()
      .subscribe(
        (res: Response) => { console.log(res) }
      )

  }

}
