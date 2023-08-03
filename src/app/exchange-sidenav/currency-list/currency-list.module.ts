import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list.component';
import { JsonDataImportModule } from 'src/app/json-data-import/json-data-import.module';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
    JsonDataImportModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class CurrencyListModule { }
