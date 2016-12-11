import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FindTripComponent } from './find-trip.component';
import { FindTripService } from './find-trip.service';

@NgModule({
  imports:      [CommonModule, ReactiveFormsModule],
  declarations: [FindTripComponent],
  providers:    [FindTripService],
  exports:      [FindTripComponent]
})
export class FindTripModule { }
