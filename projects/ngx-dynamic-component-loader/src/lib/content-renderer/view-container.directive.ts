import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngx-dcl-view-container]'
})
export class ViewContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
