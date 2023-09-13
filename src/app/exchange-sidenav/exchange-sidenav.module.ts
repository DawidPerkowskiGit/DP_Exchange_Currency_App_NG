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
import { MainpageModule } from './mainpage/mainpage.module';
import { CurrenciesLocationsModule } from './currencies-locations/currencies-locations.module';
import { ChartModule } from './chart/chart.module';
import { CalculateRatioModule } from './calculate-ratio/calculate-ratio.module';
import { FormsModule } from '@angular/forms';


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
    LatestModule,
    CurrenciesLocationsModule,
    ChartModule,
    CalculateRatioModule,
    FormsModule,
  ]
})
export class ExchangeSidenavModule { 

}
