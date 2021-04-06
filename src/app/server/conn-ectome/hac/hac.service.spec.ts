import { TestBed } from '@angular/core/testing';

import { HacService } from './hac.service';

describe('HacService', () => {
  let service: HacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
