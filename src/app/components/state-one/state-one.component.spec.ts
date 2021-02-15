import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateOneComponent } from './state-one.component';

describe('StateOneComponent', () => {
  let component: StateOneComponent;
  let fixture: ComponentFixture<StateOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
