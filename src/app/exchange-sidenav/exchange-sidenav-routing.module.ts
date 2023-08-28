import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { FrontPageNavComponent } from '../front-page-nav/front-page-nav.component';
import { ExchangeSidenavComponent } from './exchange-sidenav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { LatestComponent } from './latest/latest.component';
import { CurrenciesLocationsComponent } from './currencies-locations/currencies-locations.component';

const routes: Routes = [
  {
    path: 'exchange',
    component: ExchangeSidenavComponent,
    children: [
      { 
        path: 'mainpage', 
        component: MainpageComponent 
      },
      {
        path: 'latest',
        component: LatestComponent,
      },
      {
        path: 'chart',
        component: ChartComponent,
      },
      {
        path: 'currencies',
        // component: CurrencyListComponent,
        component: CurrenciesLocationsComponent
      },
      {
        path: 'chart',
        component: ChartComponent
      },
      {
        path: '**',
        component: MainpageComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'exchange' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangeSidenavRoutingModule {}
