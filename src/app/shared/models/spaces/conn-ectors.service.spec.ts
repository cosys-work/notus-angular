import { TestBed } from '@angular/core/testing';

import { ConnEctorsService } from './conn-ectors.service';

describe('ConnEctorsService', () => {
  let service: ConnEctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnEctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
