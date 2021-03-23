import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isToggleOpen = false;
    
    @HostListener('click') toggleOpen(){
    this.isToggleOpen= !this.isToggleOpen
    }   
}