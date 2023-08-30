import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinningWheelComponent } from './spinning-wheel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    SpinningWheelComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  exports: [SpinningWheelComponent],
})
export class SpinningWheelModule { }
