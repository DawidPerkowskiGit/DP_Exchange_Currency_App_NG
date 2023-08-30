import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesLocationsComponent } from './currencies-locations.component';
import { MatTableModule } from '@angular/material/table';
import { SpinningWheelModule } from '../spinning-wheel/spinning-wheel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    CurrenciesLocationsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SpinningWheelModule,
    BrowserAnimationsModule
  ]
})
export class CurrenciesLocationsModule { }
