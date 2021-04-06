import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTrackerComponent } from './back-tracker.component';

describe('BackTrackerComponent', () => {
  let component: BackTrackerComponent;
  let fixture: ComponentFixture<BackTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
