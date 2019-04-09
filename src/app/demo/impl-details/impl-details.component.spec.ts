import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplDetailsComponent } from './impl-details.component';

describe('ImplDetailsComponent', () => {
  let component: ImplDetailsComponent;
  let fixture: ComponentFixture<ImplDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
