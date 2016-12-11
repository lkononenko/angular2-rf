import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Trip } from './trip.model';

@Component({
  selector: 'rf-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.scss']
})
export class FindTripComponent implements OnInit {
  tripForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tripForm = this.formBuilder.group({
      bookingCode: [],
      passengers: this.formBuilder.group({
        lastName: []
      })
    });
  }

  onSubmit() {
    console.log(this.tripForm.value, this.tripForm.valid);
  }

}
