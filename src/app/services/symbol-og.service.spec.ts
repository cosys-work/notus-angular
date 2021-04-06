import { TestBed } from '@angular/core/testing';

import { SymbolOgService } from './symbol-og.service';

describe('SymbolOgService', () => {
  let service: SymbolOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymbolOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
