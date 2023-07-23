import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { FrontPageNavComponent } from '../front-page-nav/front-page-nav.component';
import { ExchangeSidenavComponent } from './exchange-sidenav.component';



const routes: Routes = [
  { path: '',
  component: ExchangeSidenavComponent,
children: [
  {
    path: 'exchange/latest',
    component: TableComponent,
  },
  {
    path: 'exchange/chart',
    component: ChartComponent,
  }
]
},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ExchangeSidenavRoutingModule {}
