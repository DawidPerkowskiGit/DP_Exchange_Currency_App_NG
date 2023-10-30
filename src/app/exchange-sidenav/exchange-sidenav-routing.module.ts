import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ExchangeSidenavComponent } from './exchange-sidenav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LatestComponent } from './latest/latest.component';
import { CurrenciesLocationsComponent } from './currencies-locations/currencies-locations.component';
import { CalculateRatioComponent } from './calculate-ratio/calculate-ratio.component';

const routes: Routes = [
  {
    path: 'exchange',
    component: ExchangeSidenavComponent,
    children: [
      {
        path: 'mainpage',
        component: MainpageComponent,
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
        component: CurrenciesLocationsComponent,
      },
      {
        path: 'calculate',
        component: CalculateRatioComponent,
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
