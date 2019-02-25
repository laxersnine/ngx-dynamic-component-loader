import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDemoComponent } from './components-demo.component';

describe('ComponentsDemoComponent', () => {
  let component: ComponentsDemoComponent;
  let fixture: ComponentFixture<ComponentsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
