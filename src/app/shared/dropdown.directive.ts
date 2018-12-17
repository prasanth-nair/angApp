import { Directive, HostBinding, HostListener } from '@angular/core';
import { isObject } from 'util';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // isOpen: boolean = false;

  @HostBinding('class.show') isOpen = true;

  @HostListener('mouseover') toggleMenu() {
    console.log('inside the directive')
    this.isOpen = true;
  }


  constructor() { }

}
