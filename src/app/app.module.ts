import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { FrontPageNavModule } from './front-page-nav/front-page-nav.module';
import { FrontPageNavComponent } from './front-page-nav/front-page-nav.component';
import { ExchangeSidenavRoutingModule } from './exchange-sidenav/exchange-sidenav-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
      FrontPageNavComponent
  ],
  imports: [
    BrowserModule,
    // FrontPageNavModule,
    AppRoutingModule,
    ExchangeSidenavRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    // MatSidenavModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
