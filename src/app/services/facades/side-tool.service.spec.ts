import { TestBed } from '@angular/core/testing';

import { SideToolService } from './side-tool.service';

describe('SideToolService', () => {
  let service: SideToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
