import { Component, OnChanges, ViewEncapsulation, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { ViewContainerDirective } from './view-container.directive';
import { DynamicComponent } from '../models/dynamic-component.model';
import { DynamicComponentService } from '../services/dynamic-component.service';

@Component({
  selector: 'ngx-dcl-content-renderer',
  template: `<div ngx-dcl-view-container></div>`,
  styleUrls: ['./content-renderer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentRendererComponent implements OnChanges {
  @ViewChild(ViewContainerDirective) container: ViewContainerDirective;

  @Input() pages: DynamicComponent[];
  @Input() isDemoMode = false;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly dynamicComponentService: DynamicComponentService
    ) { }

  ngOnChanges() {
    if (this.pages && this.pages.length) {
      this.loadPage();
    } else {
      this.container.viewContainerRef.clear();
    }
  }

  loadPage() {
    const containerRef = this.container.viewContainerRef;
    containerRef.clear();

    for (const { model, index } of this.pages.map((m, i) => ({ model: m, index: i }))) {
      const component = this.dynamicComponentService.getComponent(model.name);
      const comFactory = this.componentFactoryResolver.resolveComponentFactory(component);
      const componentRef = containerRef.createComponent(comFactory);
      let anyHasValue = false;

      const instance = componentRef.instance as typeof component;
      // tslint:disable-next-line:forin
      for (const key in model.properties) {
        instance[key] = model.properties[key];
        anyHasValue = anyHasValue || !!model.properties[key];
      }

      // Remove this component if its all properties have no value
      if (!anyHasValue && !this.isDemoMode) {
        this.pages.splice(index, 1);
        containerRef.remove();
      }

      if (this.isDemoMode) {
        instance.isDemoMode = true;
      }
    }
  }
}
