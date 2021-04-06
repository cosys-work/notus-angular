import { TestBed } from '@angular/core/testing';

import { KdbOgService } from './kdb-og.service';

describe('KdbOgService', () => {
  let service: KdbOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KdbOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
