import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindTripComponent } from './find-trip.component';

@NgModule({
  imports:      [CommonModule],
  declarations: [FindTripComponent],
  exports:      [FindTripComponent]
})
export class FindTripModule { }
