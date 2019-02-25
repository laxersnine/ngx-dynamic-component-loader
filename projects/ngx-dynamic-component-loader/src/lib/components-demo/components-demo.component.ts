import { Component, OnInit, Inject, Type } from '@angular/core';
import { DynamicComponent } from '../models/dynamic-component.model';
import { COMPONENT_LIST, BaseComponent } from '../interfaces/base-component.interface';

@Component({
  selector: 'ngx-dcl-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.css']
})
export class ComponentsDemoComponent implements OnInit {
  demoComponents: DynamicComponent[] = [];

  constructor(@Inject(COMPONENT_LIST) private readonly components: Type<BaseComponent>[]) { }

  ngOnInit() {
      for (const com of this.components) {
          this.demoComponents.push({ name: new com().getClassName() , properties: null });
      }
  }
}
