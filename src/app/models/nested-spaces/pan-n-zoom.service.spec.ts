import { TestBed } from '@angular/core/testing';

import { PanNZoomService } from './pan-n-zoom.service';

describe('PanNZoomService', () => {
  let service: PanNZoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanNZoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
