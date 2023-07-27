import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataImportComponent } from './json-data-import.component';
import { ApiServiceComponent } from './api-service/api-service.component';



@NgModule({
  declarations: [
    JsonDataImportComponent,
    ApiServiceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JsonDataImportModule { }
