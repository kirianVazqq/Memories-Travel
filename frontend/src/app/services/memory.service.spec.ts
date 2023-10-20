import { TestBed } from '@angular/core/testing';

import { MemoryService } from './memory.service';

describe('BicycleService', () => {
  let service: MemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
