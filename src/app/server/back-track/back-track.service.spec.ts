import { TestBed } from '@angular/core/testing';

import { BackTrackService } from './back-track.service';

describe('BackTrackService', () => {
  let service: BackTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
