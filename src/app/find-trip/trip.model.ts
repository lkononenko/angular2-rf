export class Trip {
  bookingCode: string;
  passengers: {
    lastName: string;
  };

  constructor(trip) {
    this.bookingCode = trip.bookingCode;
    this.passengers = trip.passengers;
  }
}
