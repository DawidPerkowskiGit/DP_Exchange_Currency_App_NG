import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSidenavComponent } from './exchange-sidenav.component';

describe('ExchangeSidenavComponent', () => {
  let component: ExchangeSidenavComponent;
  let fixture: ComponentFixture<ExchangeSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
