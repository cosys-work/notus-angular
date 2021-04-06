import { TestBed } from '@angular/core/testing';

import { SyntaxOgService } from './syntax-og.service';

describe('SyntaxOgService', () => {
  let service: SyntaxOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyntaxOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
