import { TestBed } from '@angular/core/testing';

import { ComponentFactoryHandlingService } from './component-factory-handling.service';

describe('ComponentFactoryHandlingService', () => {
  let service: ComponentFactoryHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentFactoryHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
