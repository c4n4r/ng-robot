import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[libAnchor]'
})
export class AnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
