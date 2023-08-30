import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestComponent } from './latest.component';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyDropdownListModule } from '../currency-list/currency-dropdown-list/currency-dropdown-list.module';
import { CurrencyDatePickerModule } from '../currency-list/currency-date-picker/currency-date-picker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinningWheelModule } from '../spinning-wheel/spinning-wheel.module';



@NgModule({
  declarations: [
    LatestComponent
  ],
  imports: [
    CommonModule,
    CurrencyDropdownListModule,
    CurrencyDatePickerModule,
    SpinningWheelModule,
    BrowserAnimationsModule
  ]
})
export class LatestModule { }
