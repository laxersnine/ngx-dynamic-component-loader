import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'ngx-dynamic-component-loader';

@Component({
  selector: 'app-first-template',
  templateUrl: './first-template.component.html',
  styleUrls: ['./first-template.component.css']
})
export class FirstTemplateComponent implements OnInit, BaseComponent {
  title: string;
  subtitle: string;

  isDemoMode = false;

  constructor() { }

  ngOnInit() {
    if (this.isDemoMode) {
      this.initDemoMode();
    }
  }

  getClassName(): string {
    return 'FirstTemplateComponent';
  }

  initDemoMode(): void {
    this.title = 'First template - Demo';
    this.subtitle = 'This text shows when using demo mode';
  }
}
