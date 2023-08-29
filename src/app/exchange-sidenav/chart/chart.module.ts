import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { CurrencyDatePickerModule } from '../currency-list/currency-date-picker/currency-date-picker.module';
import { CurrencyDropdownListModule } from '../currency-list/currency-dropdown-list/currency-dropdown-list.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    CurrencyDropdownListModule,
    CurrencyDatePickerModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ]
})
export class ChartModule { }
