import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, Type } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDynamicComponentLoaderModule } from '@laxersnine/ngx-dynamic-component-loader';
import { TemplateModule } from './templates/template.module';
import { DemoComponent } from './demo/demo.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule,
    NgxDynamicComponentLoaderModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
