import { TestBed } from '@angular/core/testing';

import { EditnedifyOgService } from './editnedify-og.service';

describe('EditnedifyOgService', () => {
  let service: EditnedifyOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditnedifyOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
