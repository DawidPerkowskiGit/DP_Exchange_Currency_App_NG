import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDataImportComponent } from './json-data-import.component';

describe('JsonDataImportComponent', () => {
  let component: JsonDataImportComponent;
  let fixture: ComponentFixture<JsonDataImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonDataImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDataImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
