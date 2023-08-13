import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDatePickerComponent } from './currency-date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CurrencyDatePickerComponent
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  exports: [
    CurrencyDatePickerComponent,
  ]
})
export class CurrencyDatePickerModule { }
