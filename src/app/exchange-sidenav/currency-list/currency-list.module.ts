import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyListComponent } from './currency-list.component';
import { JsonDataImportModule } from 'src/app/json-data-import/json-data-import.module';



@NgModule({
  declarations: [
    CurrencyListComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class CurrencyListModule { }
