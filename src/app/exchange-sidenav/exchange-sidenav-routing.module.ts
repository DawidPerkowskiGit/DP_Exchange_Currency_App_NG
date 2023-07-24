import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { FrontPageNavComponent } from '../front-page-nav/front-page-nav.component';
import { ExchangeSidenavComponent } from './exchange-sidenav.component';
import { MainpageComponent } from './mainpage/mainpage.component';



const routes: Routes = [
  { path: 'exchange',
  component: ExchangeSidenavComponent,
children: [
  {
    path: 'latest',
    component: TableComponent,
  },
  {
    path: 'chart',
    component: ChartComponent,
  },
  {
    path: '',
    component: MainpageComponent,
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
