import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackStackerComponent } from './back-stacker.component';

describe('BackStackerComponent', () => {
  let component: BackStackerComponent;
  let fixture: ComponentFixture<BackStackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackStackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackStackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
