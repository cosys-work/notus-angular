import { TestBed } from '@angular/core/testing';

import { EctomeOneService } from './ectome-one.service';

describe('EctomeOneService', () => {
  let service: EctomeOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EctomeOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
