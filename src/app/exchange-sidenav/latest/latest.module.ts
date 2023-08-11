import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestComponent } from './latest.component';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyDropdownListModule } from '../currency-list/currency-dropdown-list/currency-dropdown-list.module';



@NgModule({
  declarations: [
    LatestComponent
  ],
  imports: [
    CommonModule,
    CurrencyDropdownListModule
  ]
})
export class LatestModule { }
