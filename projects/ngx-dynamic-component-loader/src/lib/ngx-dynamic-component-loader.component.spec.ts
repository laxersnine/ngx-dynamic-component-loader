import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicComponentLoaderComponent } from './ngx-dynamic-component-loader.component';

describe('NgxDynamicComponentLoaderComponent', () => {
  let component: NgxDynamicComponentLoaderComponent;
  let fixture: ComponentFixture<NgxDynamicComponentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDynamicComponentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicComponentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
