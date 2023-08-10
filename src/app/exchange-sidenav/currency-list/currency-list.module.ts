import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { CurrencyDropdownListModule } from './currency-dropdown-list/currency-dropdown-list.module';



@NgModule({
  declarations: [
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    CurrencyDropdownListModule
  ]
})
export class CurrencyListModule { }
