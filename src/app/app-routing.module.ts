import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageNavModule } from './front-page-nav/front-page-nav.module';

import { AboutComponent } from './about/about.component';
import { ExchangeSidenavComponent } from './exchange-sidenav/exchange-sidenav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FrontPageNavComponent } from './front-page-nav/front-page-nav.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'exchange',
    component: ExchangeSidenavComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
