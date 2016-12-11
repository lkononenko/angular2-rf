/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FindTripService } from './find-trip.service';

describe('FindTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindTripService]
    });
  });

  it('should ...', inject([FindTripService], (service: FindTripService) => {
    expect(service).toBeTruthy();
  }));
});
