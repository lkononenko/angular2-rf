import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FindTripService } from './find-trip.service';
import { Trip } from './trip.model';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.scss']
})
export class FindTripComponent implements OnInit {
  tripForm: FormGroup;
  formErrors = {};

  constructor(private findTripService: FindTripService) { }

  ngOnInit() {
    this.tripForm = this.findTripService.buildForm();

    this.tripForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  onSubmit() {
    if (this.tripForm.valid) {
      console.log(this.tripForm.value);
    }
  }

  private onValueChanged(data?: any) {
    if (!this.tripForm) { return; }
    this.formErrors = this.findTripService.checkFormValidation(this.tripForm);
  }
}
