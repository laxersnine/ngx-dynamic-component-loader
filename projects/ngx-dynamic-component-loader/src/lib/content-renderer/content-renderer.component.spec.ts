import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRendererComponent } from './content-renderer.component';

describe('ContentRendererComponent', () => {
  let component: ContentRendererComponent;
  let fixture: ComponentFixture<ContentRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
