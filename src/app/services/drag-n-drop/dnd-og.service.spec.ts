import { TestBed } from '@angular/core/testing';

import { DndOgService } from './dnd-og.service';

describe('DndOgService', () => {
  let service: DndOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DndOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
