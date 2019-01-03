import dayjs from 'dayjs';

export class SchengenCalculator {
  constructor(period = 180, limit = 90) {
    this.period = period;
    this.limit = limit;
    this.trips = [];
  }

  addByRange(start, end) {
    let walker = dayjs(start);

    while (!walker.isAfter(end)) {
      this.trips.push(walker.clone());
      walker = walker.add(1, 'day');
    }
  }

  countFrom(date = new Date()) {
    const periodStart = dayjs(date).subtract(this.period, 'days');

    const periodTripDays = this.trips.filter(trip => trip.isAfter(periodStart) && trip.isBefore(date));

    return this.limit - periodTripDays.length;
  }
}
