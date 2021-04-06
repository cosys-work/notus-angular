import { TestBed } from '@angular/core/testing';

import { TextualOgService } from './textual-og.service';

describe('TextualOgService', () => {
  let service: TextualOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextualOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
