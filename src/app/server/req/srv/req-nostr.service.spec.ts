import { TestBed } from '@angular/core/testing';

import { ReqNostrService } from './req-nostr.service';

describe('ReqNostrService', () => {
  let service: ReqNostrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqNostrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
