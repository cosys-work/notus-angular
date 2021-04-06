import { TestBed } from '@angular/core/testing';

import { ReqPostrService } from './req-postr.service';

describe('ReqPostrService', () => {
  let service: ReqPostrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqPostrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
