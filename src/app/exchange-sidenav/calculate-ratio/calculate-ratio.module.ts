import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculateRatioComponent } from './calculate-ratio.component';
import { CurrencyDatePickerModule } from '../currency-list/currency-date-picker/currency-date-picker.module';
import { CurrencyDropdownListModule } from '../currency-list/currency-dropdown-list/currency-dropdown-list.module';
import { SpinningWheelModule } from '../spinning-wheel/spinning-wheel.module';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    CalculateRatioComponent
  ],
  imports: [
    CommonModule,
    CurrencyDatePickerModule,
    CurrencyDropdownListModule,
    SpinningWheelModule,
    MatInputModule,
    FormsModule,
  ]
})
export class CalculateRatioModule { }
