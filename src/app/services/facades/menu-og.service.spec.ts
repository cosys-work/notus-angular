import { TestBed } from '@angular/core/testing';

import { MenuOgService } from './menu-og.service';

describe('MenuOgService', () => {
  let service: MenuOgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuOgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
