import { Component, OnInit, Inject } from '@angular/core';
import { DynamicComponent, COMPONENT_LIST } from 'ngx-dynamic-component-loader';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  demoComponents: DynamicComponent[] = [];

  constructor(@Inject(COMPONENT_LIST) private readonly components: any[]) { }

  ngOnInit() {
      for (const com of this.components) {
          this.demoComponents.push({ name: new com().getClassName() , properties: null });
      }
  }
}
