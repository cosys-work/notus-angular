import { TestBed } from '@angular/core/testing';

import { UserBloobbiesService } from './user-bloobbies.service';

describe('UserBloobbiesService', () => {
  let service: UserBloobbiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBloobbiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
