import { TestBed } from '@angular/core/testing';

import { SemanticsOgService } from './semantics-og.service';

describe('SemanticsOgService', () => {
  let service: SemanticsOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemanticsOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
