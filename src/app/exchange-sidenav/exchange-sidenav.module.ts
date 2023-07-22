import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeSidenavComponent } from './exchange-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 


@NgModule({
  declarations: [
    ExchangeSidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class ExchangeSidenavModule { }
