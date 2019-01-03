import moment from 'moment';

export default {
  getters: {
    dateRanges(state) {
      return state.all.map(trip => trip.dates);
    },
    sortedTrips(state) {
      return [...state.all].sort((a, b) => moment(a.dates[0]).isAfter(b.dates[0]));
    },
  },
  state: {
    all: [],
  },
  mutations: {
    addTrip(state, trip) {
      state.all = [...state.all, trip];
      // state.all = state.all.sort((a, b) => {
      //     return moment(a.dates[0]).isBefore(b.dates[0]);
      // })
    },
    removeTrip(state, id) {
      state.all = state.all.filter(trip => trip.id !== id);
    },
  },
  actions: {},
};
