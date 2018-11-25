import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown1]'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log('inside directive')
  }


  constructor() { }

}
