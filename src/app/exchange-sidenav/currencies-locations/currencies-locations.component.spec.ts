import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesLocationsComponent } from './currencies-locations.component';

describe('CurrenciesLocationsComponent', () => {
  let component: CurrenciesLocationsComponent;
  let fixture: ComponentFixture<CurrenciesLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
