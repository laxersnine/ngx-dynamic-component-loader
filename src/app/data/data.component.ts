import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DynamicComponent } from 'ngx-dynamic-component-loader';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  mockData: DynamicComponent[] = [
    {name: 'ModalTemplateComponent', properties: {btnText: 'Click Me!', btnClass: 'btn btn-warning', modalText: 'Hello modal'}},
    {name: 'FirstTemplateComponent', properties: {title: 'Load compnoent from backend dataset', subtitle: 'Dynamic Component Loader'}},
    {name: 'FirstTemplateComponent', properties: {title: 'Dynamic Component Loader', subtitle: 'Load compnoent from backend dataset'}},
    {name: 'FormTemplateComponent', properties: {btnText: 'Submit', btnClass: 'btn btn-danger', formTarget: '#'}}
  ];
  pages: Observable<DynamicComponent[]>;

  constructor() { }

  ngOnInit() {
    this.pages = of(this.mockData);
  }

}
