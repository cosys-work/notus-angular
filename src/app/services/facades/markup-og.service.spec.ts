import { TestBed } from '@angular/core/testing';

import { MarkupOgService } from './markup-og.service';

describe('MarkupOgService', () => {
  let service: MarkupOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkupOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
