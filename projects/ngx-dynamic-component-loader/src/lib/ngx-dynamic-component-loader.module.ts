import { DynamicComponentService } from './services/dynamic-component.service';
import { NgModule } from '@angular/core';
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { ContentRendererComponent } from './content-renderer/content-renderer.component';
import { ViewContainerDirective } from './content-renderer/view-container.directive';

@NgModule({
  declarations: [ComponentsDemoComponent, ContentRendererComponent, ViewContainerDirective],
  imports: [
  ],
  exports: [ComponentsDemoComponent, ContentRendererComponent],
  providers: [DynamicComponentService]
})
export class NgxDynamicComponentLoaderModule { }
