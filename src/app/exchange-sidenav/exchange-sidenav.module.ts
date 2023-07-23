import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeSidenavComponent } from './exchange-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ExchangeSidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterModule,
    MatIconModule,
  ]
})
export class ExchangeSidenavModule { 

}
