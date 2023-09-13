import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRatioComponent } from './calculate-ratio.component';

describe('CalculateRatioComponent', () => {
  let component: CalculateRatioComponent;
  let fixture: ComponentFixture<CalculateRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
