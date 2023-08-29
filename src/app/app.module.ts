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
import { CommonModule } from '@angular/common';
import { LatestModule } from './exchange-sidenav/latest/latest.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatSelectModule } from '@angular/material/select';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { CurrencyDatePickerModule } from './exchange-sidenav/currency-list/currency-date-picker/currency-date-picker.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
      FrontPageNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExchangeSidenavRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    // MatListModule,
    // MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    CurrencyDatePickerModule,
    NgxChartsModule,
    MatButtonModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
