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
  ]
})
export class ExchangeSidenavModule { 

}
