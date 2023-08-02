import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list.component';
import { JsonDataImportModule } from 'src/app/json-data-import/json-data-import.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
    JsonDataImportModule,
    HttpClientModule
  ]
})
export class CurrencyListModule { }
