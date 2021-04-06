import { TestBed } from '@angular/core/testing';

import { HyperTextualOgService } from './hyper-textual-og.service';

describe('HyperTextualOgService', () => {
  let service: HyperTextualOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HyperTextualOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
