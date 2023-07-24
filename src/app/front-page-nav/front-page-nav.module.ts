import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageNavComponent } from './front-page-nav.component';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs'; 
import { ExchangeSidenavModule } from '../exchange-sidenav/exchange-sidenav.module';
// import {MatSidenavModule} from '@angular/material/sidenav'; 



@NgModule({
  declarations: [
    // FrontPageNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    ExchangeSidenavModule,
    // MatSidenavModule
  ]
})
export class FrontPageNavModule { }
