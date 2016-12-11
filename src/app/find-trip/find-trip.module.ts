import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FindTripComponent } from './find-trip.component';

@NgModule({
  imports:      [CommonModule, ReactiveFormsModule],
  declarations: [FindTripComponent],
  exports:      [FindTripComponent]
})
export class FindTripModule { }
