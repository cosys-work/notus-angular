import { TestBed } from '@angular/core/testing';

import { WrapnwriteOgService } from './wrapnwrite-og.service';

describe('WrapnwriteOgService', () => {
  let service: WrapnwriteOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrapnwriteOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
