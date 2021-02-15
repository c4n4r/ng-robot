import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDrivenComponent } from './state-driven.component';

describe('StateDrivenComponent', () => {
  let component: StateDrivenComponent;
  let fixture: ComponentFixture<StateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
