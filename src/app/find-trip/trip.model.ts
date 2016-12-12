export class Trip {
  bookingCode: string;
  passengers = {
    lastName: '',
  };
  contactDetails: {};
  itinerary: {};

  constructor(trip) {
    this.bookingCode = trip.bookingCode;
    this.passengers = trip.passengers;
    this.contactDetails = trip.contactDetails;
    this.itinerary = trip.itinerary;
  }
}
