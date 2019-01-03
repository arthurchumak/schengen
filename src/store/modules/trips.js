import dayjs from 'dayjs';

export default {
  getters: {
    dateRanges(state) {
      return state.all.map(trip => trip.dates);
    },
    sortedTrips(state) {
      return state.all;
    },
  },
  state: {
    all: [],
  },
  mutations: {
    addTrip(state, trip) {
      state.all = [...(state.all || []), trip];
      // state.all = state.all.sort((a, b) => {
      //     return dayjs(a.dates[0]).isBefore(b.dates[0]);
      // })
    },
    removeTrip(state, id) {
      state.all = state.all.filter(trip => trip.id !== id);
    },
  },
  actions: {},
};
