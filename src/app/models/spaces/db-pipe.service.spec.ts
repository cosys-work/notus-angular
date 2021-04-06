import { TestBed } from '@angular/core/testing';

import { DbPipeService } from './db-pipe.service';

describe('DbPipeService', () => {
  let service: DbPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
