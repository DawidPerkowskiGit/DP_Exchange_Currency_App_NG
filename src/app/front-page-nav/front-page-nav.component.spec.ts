import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageNavComponent } from './front-page-nav.component';

describe('FrontPageNavComponent', () => {
  let component: FrontPageNavComponent;
  let fixture: ComponentFixture<FrontPageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
