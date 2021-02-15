import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateThreeComponent } from './state-three.component';

describe('StateThreeComponent', () => {
  let component: StateThreeComponent;
  let fixture: ComponentFixture<StateThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
