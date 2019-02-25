import { DynamicComponentService } from './services/dynamic-component.service';
import { NgModule } from '@angular/core';
import { NgxDynamicComponentLoaderComponent } from './ngx-dynamic-component-loader.component';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { ContentRendererComponent } from './content-renderer/content-renderer.component';
import { ViewContainerDirective } from './content-renderer/view-container.directive';

@NgModule({
  declarations: [NgxDynamicComponentLoaderComponent, ComponentsDemoComponent, ContentRendererComponent, ViewContainerDirective],
  imports: [
  ],
  exports: [NgxDynamicComponentLoaderComponent, ComponentsDemoComponent, ContentRendererComponent],
  providers: [DynamicComponentService]
})
export class NgxDynamicComponentLoaderModule { }
