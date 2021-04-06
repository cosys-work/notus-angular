import { TestBed } from '@angular/core/testing';

import { BackPackService } from './back-pack.service';

describe('BackPackService', () => {
  let service: BackPackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackPackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
