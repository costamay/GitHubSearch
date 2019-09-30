import { HomeComponent } from './home/home.component';
import { User } from './user';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input() user: User;
  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor='yellow';
  }

}
