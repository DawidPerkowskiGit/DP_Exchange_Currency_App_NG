import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ]
})
export class HomepageModule { }
