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

@NgModule({
  declarations: [
    AppComponent,
      FrontPageNavComponent
  ],
  imports: [
    BrowserModule,
    // FrontPageNavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
