import moment from "moment";

export class SchengenCalculator {
    constructor(period=180, limit=90) {
        this.period = period;
        this.limit = limit;
        this.trips = [];
    }

    addByRange(start, end) {
        let walker = moment(start);

        while (!walker.isAfter(end)){
            this.trips.push(walker.clone());
            walker.add(1, "day");
        }
    }

    countFrom(date=new Date()) {
        const periodStart = moment(date).subtract(this.period, "days");

        const periodTripDays = this.trips.filter(trip => trip.isBetween(periodStart, date));

        return this.limit - periodTripDays.length;
    }
}
