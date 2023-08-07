import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeSidenavComponent } from './exchange-sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import { CurrencyListModule } from './currency-list/currency-list.module';
import { LatestModule } from './latest/latest.module';


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
    MatButtonModule,
    MatTabsModule,
    CurrencyListModule,
    LatestModule
  ]
})
export class ExchangeSidenavModule { 

}
