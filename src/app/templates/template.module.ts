import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FirstTemplateComponent } from './first-template/first-template.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { ModalTemplateComponent } from './modal-template/modal-template.component';
import { BaseComponent, COMPONENT_LIST } from '@laxersnine/ngx-dynamic-component-loader';

const componentList: Type<BaseComponent>[] = [
  FirstTemplateComponent,
  FormTemplateComponent,
  ModalTemplateComponent
];

@NgModule({
  declarations: [
    FirstTemplateComponent,
    FormTemplateComponent,
    ModalTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: COMPONENT_LIST, useValue: componentList }
  ],
  entryComponents: [...componentList]
})
export class TemplateModule { }
