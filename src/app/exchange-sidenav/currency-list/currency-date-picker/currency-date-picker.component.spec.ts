import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDatePickerComponent } from './currency-date-picker.component';

describe('CurrencyDatePickerComponent', () => {
  let component: CurrencyDatePickerComponent;
  let fixture: ComponentFixture<CurrencyDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
