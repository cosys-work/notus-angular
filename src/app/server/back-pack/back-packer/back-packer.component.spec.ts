import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPackerComponent } from './back-packer.component';

describe('BackPackerComponent', () => {
  let component: BackPackerComponent;
  let fixture: ComponentFixture<BackPackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackPackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
