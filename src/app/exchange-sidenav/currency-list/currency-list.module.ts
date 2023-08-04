import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class CurrencyListModule { }
