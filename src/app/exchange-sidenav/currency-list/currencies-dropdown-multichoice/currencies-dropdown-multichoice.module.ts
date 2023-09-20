import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrenciesDropdownMultichoiceComponent } from './currencies-dropdown-multichoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    CurrenciesDropdownMultichoiceComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CurrenciesDropdownMultichoiceComponent,
  ]
})
export class CurrenciesDropdownMultichoiceModule { }
