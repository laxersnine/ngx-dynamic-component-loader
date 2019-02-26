import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseComponent } from 'ngx-dynamic-component-loader';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit, BaseComponent {
  btnText: string;
  btnClass: string;
  formTarget: string;
  value: string;

  isDemoMode = false;

  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    if (this.isDemoMode) {
      this.initDemoMode();
    }
  }

  getClassName(): string {
    return 'FormTemplateComponent';
  }

  initDemoMode(): void {
    this.btnText = 'Demo Submit';
    this.btnClass = 'btn btn-primary';
    this.formTarget = '#';
  }

  /**
   * @description `HttpClient` should be put in a service layer, but we just do a simple demo here.
   */
  onSubmit() {
    this.http.post(this.formTarget, this.value).subscribe(() => this.value = 'Submitted!' );
  }
}
