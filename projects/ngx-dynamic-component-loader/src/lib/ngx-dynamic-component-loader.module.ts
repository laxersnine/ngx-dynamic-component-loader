import { NgModule } from '@angular/core';
import { NgxDynamicComponentLoaderComponent } from './ngx-dynamic-component-loader.component';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';

@NgModule({
  declarations: [NgxDynamicComponentLoaderComponent, ComponentsDemoComponent],
  imports: [
  ],
  exports: [NgxDynamicComponentLoaderComponent, ComponentsDemoComponent]
})
export class NgxDynamicComponentLoaderModule { }
