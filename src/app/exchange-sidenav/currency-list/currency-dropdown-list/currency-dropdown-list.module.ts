import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyDropdownListComponent } from './currency-dropdown-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CurrencyDropdownListComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [CurrencyDropdownListComponent]
})
export class CurrencyDropdownListModule { }
