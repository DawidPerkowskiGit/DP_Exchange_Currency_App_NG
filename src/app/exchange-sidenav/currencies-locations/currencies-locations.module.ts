import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesLocationsComponent } from './currencies-locations.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    CurrenciesLocationsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class CurrenciesLocationsModule { }
