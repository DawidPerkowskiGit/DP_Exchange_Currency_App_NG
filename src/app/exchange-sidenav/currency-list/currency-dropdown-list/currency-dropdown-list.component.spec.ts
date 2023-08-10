import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDropdownListComponent } from './currency-dropdown-list.component';

describe('CurrencyDropdownListComponent', () => {
  let component: CurrencyDropdownListComponent;
  let fixture: ComponentFixture<CurrencyDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyDropdownListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
