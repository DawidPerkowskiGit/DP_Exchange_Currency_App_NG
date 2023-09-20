import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesDropdownMultichoiceComponent } from './currencies-dropdown-multichoice.component';

describe('CurrenciesDropdownMultichoiceComponent', () => {
  let component: CurrenciesDropdownMultichoiceComponent;
  let fixture: ComponentFixture<CurrenciesDropdownMultichoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesDropdownMultichoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesDropdownMultichoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
